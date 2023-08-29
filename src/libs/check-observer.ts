export class CheckObserver {
  private callback: (event: Event) => void = () => undefined;

  public constructor(callback: (event: Event) => void = () => undefined) {
    this.callback = callback;
  }

  public observe(inputEl: HTMLInputElement | null): void {
    const type = inputEl?.getAttribute('type');

    if (type === 'radio') {
      const inputName = inputEl?.getAttribute('name');
      const radioInputEls = document.querySelectorAll<HTMLInputElement>(`input[type="radio"][name="${inputName}"]`);
      radioInputEls.forEach(itemRadioInput => {
        itemRadioInput?.addEventListener('change', e => {
          this.callback(e);
        });
      });
      return;
    }

    if (type === 'checkbox') {
      inputEl?.addEventListener('change', e => {
        this.callback(e);
      });
      return;
    }
  }
}
