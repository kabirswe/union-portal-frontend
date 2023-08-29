import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { ResizeObserver as ResizeObserverPolyfill } from '@juggle/resize-observer';
import SmoothScrollPolyfill from 'smoothscroll-polyfill';

export function makeSureResizeObserverPolyfilled() {
  if (typeof window === 'undefined' || 'ResizeObserver' in window) {
    return;
  }

  window.ResizeObserver = ResizeObserverPolyfill;
}

export function makeSureSmoothScrollPolyfilled() {
  if (typeof window === 'undefined') {
    return;
  }

  SmoothScrollPolyfill.polyfill();
}
