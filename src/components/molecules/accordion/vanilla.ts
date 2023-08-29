import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';

export class Accordion extends VanillaComponent<HTMLDivElement> {
  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });
    const labelEl = element.querySelector('.m-accordion__label') as HTMLButtonElement;
    const detailEl = element.querySelector('.m-accordion__detail') as HTMLDivElement;

    if (!detailEl || !labelEl) return;

    labelEl.addEventListener('click', () => {
      detailEl.style.setProperty('--detail-height', `${detailEl.scrollHeight}px`);
      setTimeout(() => {
        element.classList.toggle('m-accordion--opened');
      }, 0);
    });

    detailEl.addEventListener('transitionend', () => {
      detailEl.style.setProperty('--detail-height', 'auto');
    });
  }
}

export function autoInitAccordion() {
  document.querySelectorAll<HTMLDivElement>('.m-accordion').forEach(element => new Accordion({ element }));
}
