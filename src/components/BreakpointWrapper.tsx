import * as React from "react";

export enum Breakpoints {
  default = 0,
  b560 = 560,
  b960 = 960,
  b1280 = 1280,
  b1600 = 1600,
  b1920 = 1920,
  b2560 = 2560,
}

export interface BreakpointWrapperProps {
  readonly min?: Breakpoints;
  readonly max?: Breakpoints;
  readonly ssrBreakpoint?: Breakpoints;
}

export interface BreakpointWrapperState {
  readonly isVisible?: boolean;
}

export class BreakpointWrapper extends React.Component<
  BreakpointWrapperProps,
  BreakpointWrapperState
> {
  private mediaQueryList?: MediaQueryList;
  private readonly mediaQuery: string;

  public constructor(props: BreakpointWrapperProps) {
    super(props);
    let { min, max, ssrBreakpoint } = this.props;

    if (min === Breakpoints.default) {
      min = undefined;
    }
    if (max === Breakpoints.default) {
      max = undefined;
    }
    if (ssrBreakpoint === Breakpoints.default) {
      ssrBreakpoint = undefined;
    }

    const mediaQueryMin = min ? ` and (min-width: ${min}px)` : "";
    const mediaQueryMax = max ? ` and (max-width: ${max - 1}px)` : "";
    this.mediaQuery = `all${mediaQueryMin}${mediaQueryMax}`;

    let isVisible = false;
    if (min && max && ssrBreakpoint) {
      isVisible = min <= ssrBreakpoint && max > ssrBreakpoint;
    } else if (min && ssrBreakpoint) {
      isVisible = min <= ssrBreakpoint;
    } else if (max && ssrBreakpoint) {
      isVisible = max > ssrBreakpoint;
    } else if (ssrBreakpoint) {
      isVisible = true;
    } else if (!min) {
      isVisible = true;
    }

    this.state = {
      isVisible,
    };
  }

  private readonly handleMatchMedia = (event: MediaQueryListEvent) => {
    this.setState({ isVisible: event.matches });
  };

  public componentDidMount(): void {
    this.mediaQueryList = window.matchMedia(this.mediaQuery);
    this.setState({ isVisible: this.mediaQueryList.matches });

    if (!this.mediaQueryList.addEventListener) {
      // Fallback for Safari
      this.mediaQueryList.addListener(this.handleMatchMedia);

      return;
    }
    this.mediaQueryList.addEventListener("change", this.handleMatchMedia);
  }

  public componentWillUnmount(): void {
    if (this.mediaQueryList) {
      if (this.mediaQueryList.removeEventListener) {
        this.mediaQueryList.removeEventListener(
          "change",
          this.handleMatchMedia
        );
      } else {
        // Fallback for Safari
        this.mediaQueryList.removeListener(this.handleMatchMedia);
      }
    }
  }

  public render(): JSX.Element | null {
    const { children } = this.props;
    const { isVisible } = this.state;

    return (isVisible && <>{children}</>) || null;
  }
}
