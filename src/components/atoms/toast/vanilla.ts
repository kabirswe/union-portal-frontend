import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';

export class Toast extends VanillaComponent<HTMLDivElement> {
  private _duration: number;

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });
    this._duration = 5000;
  }

  public set duration(duration: number) {
    this._duration = duration;
  }

  public set opened(status: boolean) {
    this.element?.classList?.toggle('a-toast--opened', status);
    if (status && this._duration !== -1) {
      setTimeout(() => {
        this.element?.classList?.remove('a-toast--opened');
      }, this._duration);
    }
  }
}

export function autoInitToast() {
  document.querySelectorAll<HTMLDivElement>('.a-toast').forEach(element => new Toast({ element }));
}
