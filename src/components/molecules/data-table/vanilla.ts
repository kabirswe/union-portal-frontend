import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';

export class DataTable extends VanillaComponent<HTMLDivElement> {
  private _onRowClick: (index: number) => void = () => undefined;

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });

    element.querySelectorAll('.m-data-table__item').forEach((el, index) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const item: HTMLElement = el as any;
      item.addEventListener('click', (e: MouseEvent) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const target: HTMLElement = e.target as any;
        let shouldIgnore = false;
        target.classList.forEach((cls: string) => {
          if (cls.indexOf('a-button') !== -1 || cls.indexOf('a-icon') !== -1 || cls.indexOf('a-nav-item') !== -1) {
            shouldIgnore = true;
          }
        });
        if (!shouldIgnore) {
          this._onRowClick(index);
        }
      });
    });
  }

  public set onRowClick(callback: (index: number) => void) {
    this._onRowClick = callback;
  }
}

export function autoInitDataTable() {
  document.querySelectorAll<HTMLDivElement>('.m-data-table').forEach(element => new DataTable({ element }));
}
