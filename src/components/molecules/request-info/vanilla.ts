import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';

export class RequestInfo extends VanillaComponent<HTMLDivElement> {
  private _element: HTMLDivElement;
  private _handleCardClick: (e: MouseEvent) => void = () => undefined;

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });
    this._element = element;

    element.addEventListener('click', (e: MouseEvent) => {
      // check if we have any button attached with the card or not
      const buttonHolder = this._element.querySelector('.m-request-info__action');
      if (buttonHolder) {
        e.preventDefault();
        // check target is not action button
        const target: HTMLElement = e.target as HTMLElement;
        let isButton = false;
        target.classList.forEach(cls => {
          if (cls.indexOf('a-button') !== -1) {
            isButton = true;
          }
        });
        if (!isButton) {
          e.stopPropagation();
          this._handleCardClick(e);
        }
      } else {
        // no button
        this._handleCardClick(e);
      }
    });
  }

  public set handleCardClick(callback: (e: MouseEvent) => void) {
    this._handleCardClick = callback;
  }
}

export function autoInitRequestInfo() {
  document.querySelectorAll<HTMLDivElement>('.m-request-info').forEach(element => new RequestInfo({ element }));
}
