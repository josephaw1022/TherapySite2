interface WindowPosition {
  left: number;
  top: number;
}

export function useWindowPosition(element: HTMLElement): WindowPosition | undefined {
  if (!element) {
    return;
  }

  const WindowDimensions = {
    top: document.documentElement.scrollTop,
    left: document.documentElement.scrollLeft,
  };

  return WindowDimensions;
}
