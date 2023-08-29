import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';
import Choices from 'choices.js';

export class Pulldown extends VanillaComponent<HTMLDivElement> {
  private _choices: Choices | undefined;

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });
    const selectEl = element.querySelector<HTMLSelectElement>('.a-pulldown__select');
    if (!selectEl) {
      return;
    }
    this._choices = new Choices(selectEl, {
      searchEnabled: false,
      placeholder: true,
      shouldSort: false,
      itemSelectText: '',
      silent: true,
    });
    if (this.element.classList.contains('a-pulldown--disabled')) {
      this._choices.disable();
    }
  }

  public enable() {
    this._choices?.enable();
    this.element.classList.toggle('a-pulldown--disabled', false);
  }

  public disable() {
    this._choices?.disable();
    this.element.classList.toggle('a-pulldown--disabled', true);
  }

  public reset() {
    this._choices?.setChoiceByValue('');
  }
}

export function autoInitPulldown() {
  document.querySelectorAll<HTMLDivElement>('.a-pulldown').forEach(element => new Pulldown({ element }));
}
