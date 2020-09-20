import { useEffect } from "react";

export const useOnClickOutsideNavigation = (
  ref: React.RefObject<HTMLDivElement> | null,
  handler: (event: any) => void
) => {
  useEffect(() => {
    const listener = (event: unknown) => {
      if (!ref || !ref.current || ref.current.contains((event as any).target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
