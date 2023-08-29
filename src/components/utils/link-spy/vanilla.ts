import { LinkSpyDecorator } from './decorator';

export function autoInitLinkSpy() {
  document.querySelectorAll<HTMLAnchorElement>('[data-link-spy]').forEach(element => {
    new LinkSpyDecorator({ el: element }).start();
  });
}
