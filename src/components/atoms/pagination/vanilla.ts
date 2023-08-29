import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';

export class Pagination extends VanillaComponent<HTMLDivElement> {
  private _onChange: (index: number) => void = () => undefined;

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });

    const prevButtonEl = element.querySelector<HTMLButtonElement>('.a-pagination__action--prev');
    const nextButtonEl = element.querySelector<HTMLButtonElement>('.a-pagination__action--next');
    const pages = element.querySelectorAll<HTMLLIElement>('.a-pagination__page-item');
    const activeIndex = element.querySelector<HTMLLIElement>('.a-pagination__page-item--active')?.innerText;

    prevButtonEl?.addEventListener('click', () => {
      activeIndex && this._onChange(parseInt(activeIndex) - 1);
    });

    nextButtonEl?.addEventListener('click', () => {
      activeIndex && this._onChange(parseInt(activeIndex) + 1);
    });

    pages.forEach(page => {
      page.addEventListener('click', () => {
        this._onChange(parseInt(page.innerText));
      });
    });
  }

  public set onChange(callback: (index: number) => void) {
    this._onChange = callback;
  }
}

export function autoInitPagination() {
  document.querySelectorAll<HTMLDivElement>('.a-pagination').forEach(element => new Pagination({ element }));
}
