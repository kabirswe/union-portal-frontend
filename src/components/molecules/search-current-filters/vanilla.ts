import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';

export class SearchCurrentFilters extends VanillaComponent<HTMLDivElement> {
  private _handleClearClick: () => void = () => undefined;
  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });

    const clearBtnEl = element.querySelector('.m-search-current-filters__clear-button');
    clearBtnEl?.addEventListener('click', () => {
      this._handleClearClick();
    });
  }

  public set onClearClick(callback: () => void) {
    this._handleClearClick = callback;
  }
}

export function autoInitSearchCurrentFilters() {
  document
    .querySelectorAll<HTMLDivElement>('.m-search-current-filters')
    .forEach(element => new SearchCurrentFilters({ element }));
}
