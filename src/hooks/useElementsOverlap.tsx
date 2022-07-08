type PossibleElement = HTMLElement | null;

export function useElementsOverlap(element1: PossibleElement, element2: PossibleElement) {
  if (!element1 || !element2) {
    return false;
  }

  const domRect1 = element1.getBoundingClientRect();
  const domRect2 = element2.getBoundingClientRect();

  return !(
    domRect1.top > domRect2.bottom ||
    domRect1.right < domRect2.left ||
    domRect1.bottom < domRect2.top ||
    domRect1.left > domRect2.right
  );
}
