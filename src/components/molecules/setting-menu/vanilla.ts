import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';

export class SettingMenu extends VanillaComponent<HTMLDivElement> {
  private menuEls: Array<HTMLLIElement> | null = null;
  private itemEl = document.querySelector('.m-setting-menu__item--active') as HTMLLIElement;
  private activeIndex = 0;

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });

    if (this.element) {
      this.menuEls = Array.from(this.element.querySelectorAll('.m-setting-menu__item'));
      this.activeIndex = parseInt(element.dataset.activeIndex || '0');

      if (this.menuEls) {
        this.changeActiveIndex(this.activeIndex);
        this.menuEls.forEach((el, idx) => {
          el.addEventListener('click', () => {
            this.changeActiveIndex(idx);
          });
        });
      }

      const listEl = this.element.querySelector('.m-setting-menu__list');

      if (listEl) {
        listEl.addEventListener('scroll', e => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const list: any = e.target;
          const { scrollLeft } = list as HTMLElement;
          this.element.querySelectorAll('.m-setting-menu__subnav').forEach(el => {
            (el as HTMLElement).style.transform = `translateX(-${scrollLeft}px)`;
          });
        });
      }
    }
  }

  private changeActiveIndex = (index: number) => {
    if (!this.menuEls || !this.itemEl) return;
    this.activeIndex = index;

    this.menuEls.forEach((el, idx) => {
      if (idx === this.activeIndex) {
        el.classList.add('m-setting-menu__item--active');
      } else {
        el.classList.remove('m-setting-menu__item--active');
      }
    });
    this.itemEl = document.querySelector('.m-setting-menu__item--active') as HTMLLIElement;
    this.element?.style?.setProperty('--width', `${this.itemEl.offsetWidth}px`);
  };
}

export function autoInitSettingMenu() {
  document.querySelectorAll<HTMLDivElement>('.m-setting-menu').forEach(element => new SettingMenu({ element }));
}
