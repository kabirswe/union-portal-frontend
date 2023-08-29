import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';

export class AddItemButton extends VanillaComponent<HTMLButtonElement> {
  private _handleAddItemClick: () => void = () => undefined;

  constructor({ element }: VanillaComponentConstructor<HTMLButtonElement>) {
    super({ element });

    element.addEventListener('click', () => {
      this._handleAddItemClick();
    });
  }

  public set onAddItemClick(callback: () => void) {
    this._handleAddItemClick = callback;
  }
}

export function autoInitAddItemButton() {
  document.querySelectorAll<HTMLButtonElement>('.a-add-item-button').forEach(element => new AddItemButton({ element }));
}
