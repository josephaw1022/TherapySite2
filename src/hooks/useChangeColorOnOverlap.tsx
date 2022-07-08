import { useEffect } from "react";
import type { MutableRefObject } from "react";
import { useElementsOverlap } from "./useElementsOverlap";

/**
 * useChangeColorOnOverlap - Hook to change the color of an element when it overlaps another element
 * @param NotOverlappingCssClass - the css class for the changing element with no overlap
 * @param OverlappingCssClass - the css class for the changing element with overlap
 * @param ObjectReference - the reference to the changing element
 * @param changingElementID - the id of the changing element
 */
function useChangeColorOnOverlap(
  NotOverlappingCssClass: string,
  OverlappingCssClass: string,
  ObjectReference: MutableRefObject<any>,
  changingElementID: string
): void {
  useEffect(() => {
    function ChangeNavbarOnElementOverlap() {
      // if the document is not available, return
      if (!document) {
        return;
      }

      const ReferenceElement = document.getElementById(changingElementID);

      // If no object reference element is available, return
      if (!ObjectReference || !ObjectReference.current) {
        return;
      }

      // If no reference element is available, return
      if (!ReferenceElement) {
        return;
      }

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const ElementsOverlap = useElementsOverlap(ObjectReference.current, ReferenceElement);

      // If elements are overlapping, change the color
      if (ElementsOverlap) {
        ReferenceElement.classList.remove(NotOverlappingCssClass);
        ReferenceElement.classList.add(OverlappingCssClass);
        return;
      }

      // If were overlapping and no longer are overlapping, change the navbar color back
      if (!ElementsOverlap && ReferenceElement.classList.contains(OverlappingCssClass)) {
        ReferenceElement.classList.remove(OverlappingCssClass);
        ReferenceElement.classList.add(NotOverlappingCssClass);
      }
    }

    window.addEventListener("resize", ChangeNavbarOnElementOverlap);
    window.addEventListener("scroll", ChangeNavbarOnElementOverlap);

    return function cleanup() {
      window.removeEventListener("resize", ChangeNavbarOnElementOverlap);
      window.removeEventListener("scroll", ChangeNavbarOnElementOverlap);
    };
  }, []);
}

export default useChangeColorOnOverlap;
