import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';
import { ScrollFreezer } from 'libs/scroll-freezer';

export class GlobalNavigation extends VanillaComponent<HTMLDivElement> {
  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });

    const openButton = element.querySelector<HTMLAnchorElement>('.o-global-navigation__toggle-button');
    if (openButton) {
      openButton.addEventListener('click', e => {
        e.preventDefault();
        setTimeout(() => {
          element?.classList.add('o-global-navigation--opened');
          ScrollFreezer.freeze();
        }, 0);
      });
    }

    const closeButton = element.querySelector<HTMLAnchorElement>('.o-global-navigation__close-button');
    if (closeButton) {
      closeButton.addEventListener('click', e => {
        e.preventDefault();
        setTimeout(() => {
          element?.classList.remove('o-global-navigation--opened');
          ScrollFreezer.unfreeze();
        }, 0);
      });
    }
  }
}

export function autoInitGlobalNavigation() {
  document
    .querySelectorAll<HTMLDivElement>('.o-global-navigation')
    .forEach(element => new GlobalNavigation({ element }));
}
