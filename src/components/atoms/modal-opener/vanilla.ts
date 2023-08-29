import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';

export class ModalOpener extends VanillaComponent<HTMLAnchorElement> {
  private _handleOpenClick: () => void = () => undefined;

  constructor({ element }: VanillaComponentConstructor<HTMLAnchorElement>) {
    super({ element });

    element.addEventListener('click', () => {
      this._handleOpenClick();
    });
  }

  public set onOpenClick(callback: () => void) {
    this._handleOpenClick = callback;
  }
}

export function autoInitModalOpener() {
  document.querySelectorAll<HTMLAnchorElement>('.a-modal-opener').forEach(element => new ModalOpener({ element }));
}
