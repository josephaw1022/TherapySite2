import type { ReactElement, ReactNode } from "react";
import { useWindowSize, MOBILE_SIZE } from "../../hooks/useWindowDimensions";

function ViewElement({ children, view }: ViewElementProps): ReactElement | null {
  const { width } = useWindowSize();
  const IsMobile = Number(width) < MOBILE_SIZE;

  if (view === "mobile" && !IsMobile) {
    return null;
  }

  if (view === "desktop" && IsMobile) {
    return null;
  }

  return children as ReactElement;
}

interface ViewElementProps {
  view: "mobile" | "desktop";
  children: ReactElement | null | ReactNode;
}

export default ViewElement;
