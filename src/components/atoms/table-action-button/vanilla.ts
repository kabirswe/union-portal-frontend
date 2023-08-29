import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';
import _ from 'lodash';

export class TableActionButton extends VanillaComponent<HTMLDivElement> {
  private actionButton: HTMLButtonElement | null = null;

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });

    this.actionButton = element.querySelector<HTMLButtonElement>('.a-table-action-button__button');
    this.actionButton?.addEventListener('click', this.handleClick);

    window.addEventListener('resize', this.setActionsPosition);
    window.addEventListener('scroll', this.setActionsPosition);

    document.addEventListener('mousedown', e => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (!this.element.contains(e.target as HTMLElement)) {
        // hide
        this.element.classList.toggle('a-table-action-button--active', false);
      }
    });
  }

  private handleClick = () => {
    this.element.classList.toggle('a-table-action-button--active');
    this.setActionsPosition();
  };

  private setActionsPosition = _.throttle(() => {
    if (this.element.classList.contains('a-table-action-button--active')) {
      const btnEl = this.element.querySelector<HTMLButtonElement>('.a-table-action-button__button');
      const actionEl = this.element.querySelector<HTMLDivElement>('.a-table-action-button__action');
      const btnRect = (btnEl as HTMLElement).getBoundingClientRect();
      const navRect = (actionEl as HTMLElement).getBoundingClientRect();
      if (typeof window !== 'undefined') {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        // check if button position + btn width + nav action width > viewport width or not
        if (btnRect.right + btnRect.width + navRect.width > vw) {
          // flip to left
          (actionEl as HTMLElement).style.left = `${btnRect.left + btnRect.width - navRect.width - 4}px`;
        } else {
          // flip to right
          (actionEl as HTMLElement).style.left = `${btnRect.left}px`;
        }
        if (btnRect.bottom + btnRect.height + navRect.height > vh) {
          // flip to top
          (actionEl as HTMLElement).style.top = `${btnRect.top - navRect.height - 4}px`;
          (actionEl as HTMLElement).style.bottom = 'auto';
        } else {
          // flip to bottom
          (actionEl as HTMLElement).style.top = `${btnRect.top + btnRect.height + 4}px`;
          (actionEl as HTMLElement).style.bottom = 'auto';
        }
      }
    }
  });
}

export function autoInitTableActionButton() {
  document
    .querySelectorAll<HTMLDivElement>('.a-table-action-button')
    .forEach(element => new TableActionButton({ element }));
}
