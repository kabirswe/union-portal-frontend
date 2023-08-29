import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';

export class ExpenseRecordList extends VanillaComponent<HTMLDivElement> {
  private addButton: HTMLButtonElement | null = null;
  private removeButtons: NodeListOf<HTMLButtonElement> | null = null;
  private listEl: HTMLDivElement | null = null;

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });

    this.removeButtons = element.querySelectorAll<HTMLButtonElement>('.m-visit-record-input__button-close');
    this.addButton = element.querySelector<HTMLButtonElement>('.o-expense-record-list__add-button .a-add-item-button');
    this.listEl = element.querySelector<HTMLDivElement>('.o-expense-record-list__items');

    this.addButton?.addEventListener('click', () => {
      const recordItemLength = element.querySelectorAll<HTMLDivElement>('.m-expense-record-input')?.length || 0;
      const radioName =
        element.dataset.radioName || element.querySelector<HTMLInputElement>('.a-radio input[type="radio"]')?.name;
      /* eslint-disable @typescript-eslint/no-explicit-any */
      const tmpl: HTMLTemplateElement = this.element.querySelector('.o-expense-record-list__template') as any;
      const itemEl: HTMLDivElement = tmpl?.content.cloneNode(true) as any;
      if (itemEl) {
        itemEl.querySelectorAll<HTMLInputElement>('.a-radio input[type="radio"]').forEach(radioInput => {
          radioInput.name = `${radioName}${recordItemLength + 1}`;
        });
        this.listEl?.appendChild(itemEl);
        const newItemEl = this.listEl?.querySelector('.m-expense-record-input:last-child');
        if (newItemEl) {
          const itemTitleEl = newItemEl.querySelector('.m-visit-record-input__header-title');
          if (itemTitleEl) {
            itemTitleEl.innerHTML = `明細 ${recordItemLength + 1}`;
          }
          const removeBtn = newItemEl.querySelector<HTMLButtonElement>('.m-visit-record-input__button-close');
          if (removeBtn) this.addEventListenerRemove(element, removeBtn);
        }
      }
      /* eslint-enable @typescript-eslint/no-explicit-any */
    });

    this.removeButtons?.forEach(removeButton => {
      this.addEventListenerRemove(element, removeButton);
    });
  }

  addEventListenerRemove(_el: HTMLDivElement, removeBtn: HTMLElement) {
    removeBtn.addEventListener('click', e => {
      const target = <HTMLButtonElement>e.currentTarget;

      if (target.classList.contains('m-visit-record-input__button-close')) {
        target.closest('.m-expense-record-input')?.remove();
      }

      this.element.querySelectorAll('.m-visit-record-input__header-title').forEach((itemTitleEl, index) => {
        itemTitleEl.innerHTML = `明細 ${index + 1}`;
      });
    });
  }
}

export function autoInitExpenseRecordList() {
  document
    .querySelectorAll<HTMLDivElement>('.o-expense-record-list')
    .forEach(element => new ExpenseRecordList({ element }));
}
