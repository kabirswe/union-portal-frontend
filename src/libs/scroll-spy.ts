type Position = 'top' | 'bottom' | 'body';
type Direction = 'up' | 'down';

export type ScrollStatus = {
  direction: Direction;
  position: Position;
};

export interface ScrollSpyListener {
  (status: ScrollStatus): void;
}

export class ScrollSpy {
  private static __instance: ScrollSpy | undefined = undefined;
  private lastScrollYOffset = window.pageYOffset;
  private lastPosition: Position | undefined = undefined;
  private lastDirection: Direction | undefined = undefined;
  private listeners: Set<ScrollSpyListener> = new Set();
  private isFirstScroll = true;
  private paused = false;

  public static addListener(callback: ScrollSpyListener) {
    ScrollSpy.getInstance().addListener(callback);
  }

  public static removeListener(callback: ScrollSpyListener) {
    ScrollSpy.getInstance().removeListener(callback);
  }

  public static pause() {
    ScrollSpy.getInstance().pause();
  }

  public static resume() {
    ScrollSpy.getInstance().resume();
  }

  private static getInstance() {
    if (!ScrollSpy.__instance) {
      ScrollSpy.__instance = new ScrollSpy();
    }

    return ScrollSpy.__instance;
  }

  constructor() {
    window.addEventListener('scroll', () => {
      if (this.paused) {
        return;
      }

      const position = this.getPosition();
      const direction = this.getDirection();

      if (position !== this.lastPosition || direction !== this.lastDirection) {
        if (!this.isFirstScroll) {
          this.listeners.forEach(listener => {
            listener({ direction, position });
          });

          this.lastDirection = direction;
          this.lastPosition = position;
        }
        this.isFirstScroll = false;
      }

      this.lastScrollYOffset = Math.max(window.pageYOffset, 0);
    });
  }

  private addListener(callback: ScrollSpyListener) {
    this.listeners.add(callback);
  }

  private removeListener(callback: ScrollSpyListener) {
    this.listeners.delete(callback);
  }

  private pause() {
    this.paused = true;
  }

  private resume() {
    this.paused = false;
  }

  private getPosition() {
    if (
      // window.pageYOffset returns float value
      (window.visualViewport?.height || window.innerHeight) + Math.round(window.pageYOffset) >=
      document.body.offsetHeight
    ) {
      return 'bottom';
    }

    // take care of negative scrolling in mobile
    if (window.pageYOffset <= 0) {
      return 'top';
    }

    return 'body';
  }

  private getDirection() {
    if (window.pageYOffset > this.lastScrollYOffset) {
      return 'down';
    } else {
      return 'up';
    }
  }
}
