import gsap, { Elastic } from 'gsap';

export class ScrollBouncer {
  private static _instance?: ScrollBouncer;
  private targets: (HTMLElement | SVGElement)[] = [];
  private prevScrollPos = 0;
  private bounceCanceller = 0;

  public static bounce = (targets: string | NodeListOf<HTMLElement | SVGElement> | (HTMLElement | SVGElement)[]) => {
    ScrollBouncer.getInstance().bounce(targets);
  };

  public static chill() {
    ScrollBouncer.getInstance().chill();
  }

  private static getInstance() {
    if (!ScrollBouncer._instance) {
      ScrollBouncer._instance = new ScrollBouncer();
    }

    return ScrollBouncer._instance;
  }

  private bounce = (targets: string | NodeListOf<HTMLElement | SVGElement> | (HTMLElement | SVGElement)[]) => {
    this.chill();

    if (typeof targets === 'string') {
      this.targets = Array.from(document.querySelectorAll<HTMLElement | SVGElement>(targets));
    } else {
      this.targets = Array.from(targets);
    }

    this.prevScrollPos = window.scrollY;
    window.addEventListener('scroll', this.onScroll);
  };

  private chill = () => {
    this.targets = [];
    window.removeEventListener('scroll', this.onScroll);
  };

  private onScroll = () => {
    window.requestAnimationFrame(() => {
      const delta = this.prevScrollPos - window.scrollY;

      this.targets.forEach(target => {
        if (!target.dataset['appearAnimationType'] || target.dataset['appearAnimationFinished'] === 'true') {
          gsap.killTweensOf(target);
          gsap.to(target, {
            duration: 1 + Math.random(),
            y: delta * Math.random() * 2,
            ease: Elastic.easeOut,
          });
        }
      });

      this.prevScrollPos = window.scrollY;

      clearTimeout(this.bounceCanceller);
      this.bounceCanceller = window.setTimeout(() => {
        this.onScroll();
      }, 1000 / 30);
    });
  };
}
