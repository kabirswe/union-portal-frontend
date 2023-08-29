import { AppearAnimationDecorator } from './decorator';

export function autoInitAppearAnimation() {
  document.querySelectorAll<HTMLElement | SVGElement>('[data-appear-animation-type]').forEach(element => {
    const _threshold = parseFloat(element.dataset['appearAnimationThreshold'] || '0.2');
    const threshold = isNaN(_threshold) ? 0.2 : _threshold;
    const _delay = parseInt(element.dataset['appearAnimationDelay'] || '0');
    const delay = isNaN(_delay) ? 0 : _delay;

    new AppearAnimationDecorator({ el: element, threshold, delay }).start();
  });
}
