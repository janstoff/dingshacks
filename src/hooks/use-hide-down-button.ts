import React from 'react';

export function useHideDownButton() {
  const [shouldHideDownButton, setShouldHideDownButton] = React.useState(false);
  const prevScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (
        prevScrollY.current < currentScrollY &&
        currentScrollY >= 10 &&
        !shouldHideDownButton
      ) {
        setShouldHideDownButton(true);
      }
      if (currentScrollY <= 250 && shouldHideDownButton) {
        setShouldHideDownButton(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldHideDownButton]);

  return shouldHideDownButton;
}
