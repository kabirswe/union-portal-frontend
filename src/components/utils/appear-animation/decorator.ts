interface AppearAnimationDecoratorConstructorArgs {
  el: HTMLElement | SVGElement;
  threshold?: number;
  cssFeature?: 'transition' | 'animation';
  delay?: number;
}

export class AppearAnimationDecorator {
  private el: HTMLElement | SVGElement;
  private intersectionObserver: IntersectionObserver;

  constructor({ el, threshold = 0.2, cssFeature = 'transition', delay = 0 }: AppearAnimationDecoratorConstructorArgs) {
    this.el = el;
    this.intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry && (entry.isIntersecting || entry.boundingClientRect.y <= 0)) {
          if (cssFeature === 'transition') {
            el.addEventListener('transitionend', () => {
              el.dataset['appearAnimationFinished'] = 'true';
            });
          } else if (cssFeature === 'animation') {
            el.addEventListener('animationend', () => {
              el.dataset['appearAnimationFinished'] = 'true';
            });
          } else {
            el.dataset['appearAnimationFinished'] = 'true';
          }

          setTimeout(() => {
            el.dataset['appearAnimationTriggered'] = 'true';
          }, delay);
        }
      },
      { threshold }
    );
  }

  public start() {
    this.intersectionObserver.observe(this.el);
  }

  public stop() {
    this.intersectionObserver.disconnect();
  }
}
