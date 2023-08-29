export interface VanillaComponentConstructor<ElementType> {
  element: ElementType;
}

export abstract class VanillaComponent<ElementType extends HTMLElement | SVGElement = HTMLElement> {
  protected element: ElementType;

  public constructor({ element }: VanillaComponentConstructor<ElementType>) {
    this.element = element;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.element.__component = this;
  }
}

export function getComponent<C extends VanillaComponent>(el: Element | null): C | null {
  if (!el) {
    return null;
  } else if ('__component' in el) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return el.__component as C;
  }

  return null;
}
