interface TextMeasureMeasureOptions {
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: string;
}

export class TextMeasure {
  public static measure(text: string, options?: TextMeasureMeasureOptions) {
    return TextMeasure.getInstance().measure(text, options);
  }

  private static getInstance() {
    if (!TextMeasure.__instance) {
      TextMeasure.__instance = new TextMeasure();
    }

    return TextMeasure.__instance;
  }

  private static __instance: TextMeasure | undefined = undefined;
  private ctx: CanvasRenderingContext2D | null;

  constructor() {
    this.ctx = document.createElement('canvas').getContext('2d');
  }

  private measure(text: string, { fontFamily, fontSize, fontWeight }: TextMeasureMeasureOptions = {}) {
    if (!this.ctx) {
      return undefined;
    }

    this.ctx.font = `${fontWeight || '400'} ${fontSize || 14}px ${fontFamily || '"Work Sans", noto-sans-cjk-jp'}`;
    return this.ctx.measureText(text);
  }
}

export interface ScreenLayoutObserverStatus {
  layout: 'pc' | 'sp';
}

export class ScreenLayoutObserver {
  private static instance?: ScreenLayoutObserver;
  private spMediaQuery?: MediaQueryList;
  private listeners: Set<(status: ScreenLayoutObserverStatus) => void> = new Set();

  public static get isPC() {
    return !this.getInstance().spMediaQuery?.matches;
  }

  public static addListener(callback: (status: ScreenLayoutObserverStatus) => void) {
    this.getInstance().addListener(callback);
  }

  public static removeListener(callback: (status: ScreenLayoutObserverStatus) => void) {
    this.getInstance().removeListener(callback);
  }

  private static getInstance() {
    if (!ScreenLayoutObserver.instance) {
      ScreenLayoutObserver.instance = new ScreenLayoutObserver();
    }

    return ScreenLayoutObserver.instance;
  }

  constructor() {
    if (typeof window === 'undefined') {
      return;
    }

    this.spMediaQuery = window.matchMedia('screen and (max-width: 1280px)');
    this.spMediaQuery.addListener(e => {
      const status: ScreenLayoutObserverStatus = { layout: e.matches ? 'sp' : 'pc' };

      this.listeners.forEach(listener => listener(status));
    });
  }

  private addListener(callback: (status: ScreenLayoutObserverStatus) => void) {
    this.listeners.add(callback);
  }

  private removeListener(callback: (status: ScreenLayoutObserverStatus) => void) {
    this.listeners.delete(callback);
  }
}

export function getOffSetTopFromRoot(el: HTMLElement) {
  let _el: HTMLElement | null = el;
  let offset = 0;

  while (_el) {
    offset += _el?.offsetTop || 0;
    _el = _el?.offsetParent as HTMLElement | null;
  }

  return offset;
}
