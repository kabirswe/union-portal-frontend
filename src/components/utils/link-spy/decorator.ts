interface LinkSpyDecoratorConstructorArgs {
  el: HTMLAnchorElement;
  offset?: number;
}

export class LinkSpyDecorator {
  private el: HTMLAnchorElement;
  private offset: number;

  constructor({ el, offset = 88 }: LinkSpyDecoratorConstructorArgs) {
    this.el = el;
    this.offset = offset;
    this.goToOrDefault = this.goToOrDefault.bind(this);
  }

  private goToOrDefault(e: MouseEvent) {
    const href = this.el.getAttribute('href');
    const target = this.el.getAttribute('target');
    const anchorLinkMatch = href?.match(/^#(.+)/);

    if (anchorLinkMatch && anchorLinkMatch.length > 1 && target !== '_blank') {
      e.preventDefault();

      const scrollToElement = document.getElementById(anchorLinkMatch[1]);

      if (scrollToElement) {
        const rect = scrollToElement.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let scrollToElementTop = rect.top + scrollTop - this.offset; // include 100px margin top
        if (scrollToElementTop < 0) scrollToElementTop = 0;

        window.scrollTo({ top: scrollToElementTop, left: 0, behavior: 'smooth' });
      }
    }
  }

  public start() {
    this.el.addEventListener('click', this.goToOrDefault);
  }

  public stop() {
    this.el.removeEventListener('click', this.goToOrDefault);
  }
}
