import { SP_MAX_WIDTH } from 'consts/common';
import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';
import _ from 'lodash';

export class NavItem extends VanillaComponent<HTMLDivElement> {
  private remoteSubNav: string;
  private _leaveTimer: number;

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });

    this._leaveTimer = 0;

    this.remoteSubNav = this.element.dataset['remoteSubnav'] || '';

    const itemLinkEl = element.querySelector<HTMLAnchorElement>('.a-nav-item__link');
    if (itemLinkEl && element.classList.contains('a-nav-item--has-subnav')) {
      itemLinkEl.addEventListener('click', e => {
        e.preventDefault();
        this.toggleRemoteMenu();
      });
      if (element.classList.contains('a-nav-item--hover-open')) {
        itemLinkEl.addEventListener('mouseover', e => {
          e.preventDefault();
          const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
          if (vw > SP_MAX_WIDTH) {
            this.toggleRemoteMenu(true);
          }
        });

        itemLinkEl.addEventListener('mouseleave', e => {
          e.preventDefault();
          const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
          if (vw > SP_MAX_WIDTH) {
            // check if mouse is over a target remote element or not
            if (this.remoteSubNav !== '') {
              const target = document.getElementById(this.remoteSubNav.replace('#', ''));
              if (target) {
                target.addEventListener('mouseover', this.checkRemoteTargetOver);
                target.addEventListener('mouseleave', this.handleMouseLeave);
                this._leaveTimer = setTimeout(() => {
                  target.removeEventListener('mouseover', this.checkRemoteTargetOver);
                  this.toggleRemoteMenu(false);
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                }, 100) as any;
              }
            }
          }
        });
      }
      document.addEventListener('mousedown', e => {
        const target = document.getElementById(this.remoteSubNav.replace('#', ''));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (!this.element.contains(e.target as HTMLElement) && target && !target.contains(e.target as HTMLElement)) {
          // hide
          target.removeEventListener('mouseover', this.checkRemoteTargetOver);
          this.toggleRemoteMenu(false);
        }
      });
      window.addEventListener('resize', () => {
        this.setNavPosition();
      });
      window.addEventListener('scroll', () => {
        this.setNavPosition();
      });
    }

    if (this.remoteSubNav !== '') {
      const target = document.getElementById(this.remoteSubNav.replace('#', ''));
      if (target) {
        target.classList.add('a-nav-item__remote-subnav');
      }
    }
  }

  private handleMouseLeave = () => {
    const target = document.getElementById(this.remoteSubNav.replace('#', ''));
    if (target) {
      this.toggleRemoteMenu(false);
      target.removeEventListener('mouseleave', this.handleMouseLeave);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private checkRemoteTargetOver = (e: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const target: HTMLElement = e.target as any;
    target.removeEventListener('mouseover', this.checkRemoteTargetOver);
    if (this._leaveTimer) {
      clearTimeout(this._leaveTimer);
    }
  };

  private setNavPosition = _.throttle(() => {
    if (this.remoteSubNav !== '') {
      const target = document.getElementById(this.remoteSubNav.replace('#', ''));
      if (target) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const nav: any = this.element;
        if (nav) {
          // get current position
          const rect = (nav as HTMLElement).getBoundingClientRect();
          const top = rect.top + rect.height - 10;
          const left = rect.left;

          target.style.top = `${top}px`;
          target.style.left = `${left}px`;
        }
      }
    }
  }, 100);

  private toggleRemoteMenu(open?: boolean | undefined): void {
    const shouldOpen = typeof open !== 'undefined' ? open : !this.element?.classList.contains('a-nav-item--opened');
    if (this.remoteSubNav !== '') {
      const target = document.getElementById(this.remoteSubNav.replace('#', ''));
      if (target) {
        setTimeout(() => {
          this.setNavPosition();
          target.classList.toggle('a-nav-item__remote-subnav--opened', shouldOpen);
          this.element?.classList.toggle('a-nav-item--opened', shouldOpen);
        });
      }
    } else {
      this.element?.classList.toggle('a-nav-item--opened', shouldOpen);
    }
  }
}

export function autoInitNavItem() {
  document.querySelectorAll<HTMLDivElement>('.a-nav-item').forEach(element => new NavItem({ element }));
}
