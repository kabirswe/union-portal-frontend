import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';

export class UploadListItem extends VanillaComponent<HTMLLIElement> {
  private _handleCloseClick: () => void = () => undefined;

  constructor({ element }: VanillaComponentConstructor<HTMLLIElement>) {
    super({ element });

    element.querySelectorAll<HTMLButtonElement>('.m-upload-list__button-remove').forEach(el => {
      el.addEventListener('click', this._handleCloseClickListener);
    });
  }

  private _handleCloseClickListener = () => {
    this._handleCloseClick();
  };

  public set onCloseClick(callback: () => void) {
    this._handleCloseClick = callback;
  }

  public removeCloseClickListener() {
    this.element.querySelectorAll<HTMLButtonElement>('.m-upload-list__button-remove').forEach(el => {
      el.removeEventListener('click', this._handleCloseClickListener);
    });
  }
}

export function autoInitUploadListItem() {
  document.querySelectorAll<HTMLLIElement>('.m-upload-list__item').forEach(element => new UploadListItem({ element }));
}
