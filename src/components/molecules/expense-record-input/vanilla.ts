import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';

export class ExpenseRecordInput extends VanillaComponent<HTMLDivElement> {
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

export function autoInitExpenseRecordInput() {
  document
    .querySelectorAll<HTMLDivElement>('.m-expense-record-input')
    .forEach(element => new ExpenseRecordInput({ element }));
}
