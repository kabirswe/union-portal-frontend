import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';
import { ScrollSpy, ScrollStatus } from 'libs/scroll-spy';

export class Whole extends VanillaComponent<HTMLDivElement> {
  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });
    this.element = element;
    this.onScrollChanged = this.onScrollChanged.bind(this);
    ScrollSpy.addListener(this.onScrollChanged);
  }

  private onScrollChanged({ direction }: ScrollStatus) {
    const shouldHide = direction === 'down';
    this.element.classList.toggle('o-whole--hide-nav', shouldHide);
  }
}

export function autoInitWhole() {
  document.querySelectorAll<HTMLDivElement>('.o-whole').forEach(element => new Whole({ element }));
}
