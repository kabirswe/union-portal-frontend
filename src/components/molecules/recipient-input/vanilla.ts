import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';

export class RecipientInput extends VanillaComponent<HTMLDivElement> {
  private addButton: HTMLButtonElement | null = null;
  private removeButtons: NodeListOf<HTMLButtonElement> | null = null;
  private listEl: HTMLDivElement | null = null;

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });

    this.removeButtons = element.querySelectorAll<HTMLButtonElement>('.m-recipient-input__remove-button');
    this.addButton = element.querySelector<HTMLButtonElement>('.m-recipient-input__add-button .a-add-item-button');
    this.listEl = element.querySelector<HTMLDivElement>('.m-recipient-input__list');

    this.addButton?.addEventListener('click', () => {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      const tmpl: HTMLTemplateElement = this.element.querySelector('.m-recipient-input__template') as any;
      const itemEl: HTMLDivElement = tmpl?.content.cloneNode(true) as any;
      if (itemEl) {
        const liEl = document.createElement('li');
        liEl.setAttribute('class', 'm-recipient-input__item');
        liEl.innerHTML = `<div class="m-recipient-input__input"></div>
          <div class="m-recipient-input__remove-button">
            <button><i class="a-icon a-icon--close"></i></button>
          </div>
        `;
        liEl.querySelector('.m-recipient-input__input')?.prepend(itemEl);
        this.listEl?.appendChild(liEl);
        const newItemEl = this.listEl?.querySelector('.m-recipient-input__item:last-child');
        if (newItemEl) {
          const removeBtn = newItemEl.querySelector<HTMLDivElement>('.m-recipient-input__remove-button');
          if (removeBtn) this.addEventListenerRemove(element, removeBtn);
        }
      }
      this.updateRemoveButtonClassName();
    });

    this.removeButtons?.forEach(removeButton => {
      this.addEventListenerRemove(element, removeButton);
    });
  }

  private updateRemoveButtonClassName = () => {
    const buttonList = this.element.querySelectorAll('.m-recipient-input__remove-button');
    const buttonCount = buttonList.length;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    buttonList.forEach((node: any) => {
      const removeButtonEl: HTMLElement = node;
      removeButtonEl.classList.toggle('m-recipient-input__remove-button--hide', buttonCount === 1);
    });
  };

  addEventListenerRemove(_el: HTMLDivElement, removeBtn: HTMLElement) {
    removeBtn.addEventListener('click', e => {
      const target = <HTMLDivElement>e.currentTarget;

      if (target.classList.contains('m-recipient-input__remove-button')) {
        target.closest('.m-recipient-input__item')?.remove();
      }

      this.updateRemoveButtonClassName();
    });
  }
}

export function autoInitRecipientInput() {
  document.querySelectorAll<HTMLDivElement>('.m-recipient-input').forEach(element => new RecipientInput({ element }));
}
