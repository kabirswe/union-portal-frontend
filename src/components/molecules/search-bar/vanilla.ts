import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';

export class SearchBar extends VanillaComponent<HTMLDivElement> {
  private _handleCloseClick: () => void = () => undefined;

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });

    element.querySelectorAll<HTMLButtonElement>('.m-search-bar__button .a-search-button').forEach(el => {
      el.addEventListener('click', () => {
        setTimeout(() => {
          element?.classList.add('m-search-bar--opened');
          setTimeout(() => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const inputEl: any = element?.querySelector('.a-text-field__input');
            if (inputEl) {
              inputEl.focus();
            }
          }, 750);
        }, 0);
      });
    });

    element.querySelectorAll<HTMLButtonElement>('.m-search-bar__button-close').forEach(el => {
      el.addEventListener('click', () => {
        setTimeout(() => {
          element?.classList.remove('m-search-bar--opened');
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const inputEl: any = element?.querySelector('.a-text-field__input');
          if (inputEl) {
            inputEl.value = '';
          }
        }, 0);
        this._handleCloseClick();
      });
    });
  }

  public set onCloseClick(callback: () => void) {
    this._handleCloseClick = callback;
  }
}

export function autoInitSearchBar() {
  document.querySelectorAll<HTMLDivElement>('.m-search-bar').forEach(element => new SearchBar({ element }));
}
