import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';

export class VisitRecordList extends VanillaComponent<HTMLDivElement> {
  private addButton: HTMLButtonElement | null = null;
  private removeButtons: NodeListOf<HTMLButtonElement> | null = null;
  private listEl: HTMLDivElement | null = null;

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });

    this.removeButtons = element.querySelectorAll<HTMLButtonElement>('.m-visit-record-input__button-close');
    this.addButton = element.querySelector<HTMLButtonElement>('.o-visit-record-list__add-button .a-add-item-button');
    this.listEl = element.querySelector<HTMLDivElement>('.o-visit-record-list__items');

    this.addButton?.addEventListener('click', () => {
      const recordItemLength = element.querySelectorAll<HTMLButtonElement>('.m-visit-record-input')?.length || 0;
      /* eslint-disable @typescript-eslint/no-explicit-any */
      const tmpl: HTMLTemplateElement = this.element.querySelector('.o-visit-record-list__template') as any;
      const itemEl: HTMLDivElement = tmpl?.content.cloneNode(true) as any;
      if (itemEl) {
        this.listEl?.appendChild(itemEl);
        const newItemEl = this.listEl?.querySelector('.m-visit-record-input:last-child');
        if (newItemEl) {
          const itemTitleEl = newItemEl.querySelector('.m-visit-record-input__header-title');
          if (itemTitleEl) {
            itemTitleEl.innerHTML = `訪問先 ${recordItemLength + 1}`;
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
        target.closest('.m-visit-record-input')?.remove();
      }

      this.element.querySelectorAll('.m-visit-record-input__header-title').forEach((itemTitleEl, index) => {
        itemTitleEl.innerHTML = `訪問先 ${index + 1}`;
      });
    });
  }
}

export function autoInitVisitRecordList() {
  document
    .querySelectorAll<HTMLDivElement>('.o-visit-record-list')
    .forEach(element => new VisitRecordList({ element }));
}
