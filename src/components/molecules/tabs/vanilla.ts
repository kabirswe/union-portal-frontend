import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';

export class Tabs extends VanillaComponent<HTMLDivElement> {
  private tabEls: Array<HTMLLIElement> | null = null;
  private contentEls: Array<HTMLLIElement> | null = null;
  private activeIndex = 0;

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });
    if (this.element) {
      this.tabEls = Array.from(this.element.querySelectorAll('.m-tabs__tab'));
      this.contentEls = Array.from(this.element.querySelectorAll('.m-tabs__content'));

      this.changeActiveIndex(this.activeIndex);
      this.tabEls.forEach((el, idx) => {
        el.addEventListener('click', () => {
          this.changeActiveIndex(idx);
        });
      });

      window.addEventListener('resize', this.adjustTabIndicator);
    }
  }

  private adjustTabIndicator = () => {
    this.tabEls?.forEach((el, idx) => {
      if (idx === this.activeIndex) {
        this.element?.style?.setProperty('--width', `${el.offsetWidth}px`);
      }
    });
  };

  private changeActiveIndex = (index: number) => {
    if (!this.tabEls || !this.contentEls) return;

    this.activeIndex = index;

    this.tabEls.forEach((el, idx) => {
      if (idx === this.activeIndex) {
        el.classList.add('m-tabs__tab--active');
        this.element?.style?.setProperty('--width', `${el.offsetWidth}px`);
        const navItemEl = el.querySelector('.a-tab-nav-item');
        if (navItemEl) {
          navItemEl.classList.add('a-tab-nav-item--active');
        }
      } else {
        el.classList.remove('m-tabs__tab--active');
        const navItemEl = el.querySelector('.a-tab-nav-item');
        if (navItemEl) {
          navItemEl.classList.remove('a-tab-nav-item--active');
        }
      }
    });

    this.contentEls.forEach((el, idx) => {
      if (idx === this.activeIndex) {
        el.classList.add('m-tabs__content--active');
      } else {
        el.classList.remove('m-tabs__content--active');
      }
    });

    this.element?.style?.setProperty('--active-index', this.activeIndex.toString());
  };
}

export function autoInitTabs() {
  document.querySelectorAll<HTMLDivElement>('.m-tabs').forEach(element => new Tabs({ element }));
}
