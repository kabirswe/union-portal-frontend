import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';

export class VisitRecordInput extends VanillaComponent<HTMLDivElement> {
  private _handleCloseClick: () => void = () => undefined;

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });

    element.querySelectorAll<HTMLButtonElement>('.m-visit-record-input__button-close').forEach(el => {
      el.addEventListener('click', () => {
        this._handleCloseClick();
      });
    });
  }

  public set onCloseClick(callback: () => void) {
    this._handleCloseClick = callback;
  }
}

export function autoInitVisitRecordInput() {
  document
    .querySelectorAll<HTMLDivElement>('.m-visit-record-input')
    .forEach(element => new VisitRecordInput({ element }));
}
