export class ScrollFreezer {
  private static __instance?: ScrollFreezer;
  private freezeTarget = document.body;
  private frozenScrollPos = 0;

  public static freeze() {
    ScrollFreezer.getInstance().freeze();
  }

  public static unfreeze() {
    ScrollFreezer.getInstance().unfreeze();
  }

  private static getInstance() {
    if (!ScrollFreezer.__instance) {
      ScrollFreezer.__instance = new ScrollFreezer();
    }

    return ScrollFreezer.__instance;
  }

  private freeze() {
    const scrollPos = this.freezeTarget.getBoundingClientRect().y * -1;
    this.freezeTarget.style.overflow = 'hidden';
    this.freezeTarget.style.position = 'fixed';
    this.freezeTarget.style.top = `${scrollPos * -1}px`;
    this.freezeTarget.style.left = '0';
    this.freezeTarget.style.right = '0';
    this.frozenScrollPos = scrollPos;
  }

  private unfreeze() {
    this.freezeTarget.style.overflow = '';
    this.freezeTarget.style.position = '';
    this.freezeTarget.style.top = '';
    this.freezeTarget.style.left = '';
    this.freezeTarget.style.right = '';
    window.scrollTo(0, this.frozenScrollPos);
  }
}
