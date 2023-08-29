import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';

export class AddressSearchField extends VanillaComponent<HTMLDivElement> {
  private _handleSearchClick: () => void = () => undefined;

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });

    element.querySelectorAll<HTMLLIElement>('.a-button').forEach(el => {
      el.addEventListener('click', () => {
        this._handleSearchClick();
      });
    });
  }

  public set onSearchClick(callback: () => void) {
    this._handleSearchClick = callback;
  }
}

export function autoInitAddressSearch() {
  document
    .querySelectorAll<HTMLDivElement>('.a-address-search-field')
    .forEach(element => new AddressSearchField({ element }));
}
