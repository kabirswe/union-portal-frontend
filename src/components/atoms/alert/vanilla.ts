import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';

export class Alert extends VanillaComponent<HTMLDivElement> {
  private _handleClearClick: () => void = () => undefined;

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });

    element.querySelectorAll<HTMLLIElement>('.a-alert__button').forEach(el => {
      el.addEventListener('click', () => {
        this._handleClearClick();
      });
    });
  }

  public set onClearClick(callback: () => void) {
    this._handleClearClick = callback;
  }
}

export function autoInitAlert() {
  document.querySelectorAll<HTMLDivElement>('.a-alert').forEach(element => new Alert({ element }));
}
