import { UploadListItem } from 'components/molecules/upload-list/vanllia';
import { ENV } from 'libs/env';
import { bytesToSize } from 'libs/utils';
import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';

export class UploadField extends VanillaComponent<HTMLDivElement> {
  private arrayImage: Array<File> = [];
  private getDataTransfer = (): DataTransfer => {
    let dt: DataTransfer;
    try {
      dt = new ClipboardEvent('').clipboardData || new DataTransfer();
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      dt = undefined as any;
    }
    return dt;
  };

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });
    const inputEl = element.querySelector<HTMLInputElement>('.a-upload-field__input');

    if (!inputEl) return;

    const uploadFileListEl = element.querySelector<HTMLDivElement>('.a-upload-field__file-list');

    const clearImageButton = element.querySelector<HTMLButtonElement>('.a-upload-field__reset');
    clearImageButton?.addEventListener('click', () => {
      const arrayImagePreview = document.querySelector('.a-upload-field__preview');
      arrayImagePreview?.parentNode?.removeChild(arrayImagePreview);
      const fileListEl = this.element.querySelector('.m-upload-list__items');
      if (fileListEl) {
        fileListEl.innerHTML = '';
      }
      this.element.classList.remove('a-upload-field--with-reset');
      inputEl.value = '';
    });

    const updateUpdateFileListClassName = () => {
      if (uploadFileListEl) {
        uploadFileListEl.classList.toggle('a-upload-field__file-list--no-child', this.arrayImage.length === 0);
      }
    };
    updateUpdateFileListClassName();

    const getCurrentImages = (arrayFile: File[]): FileList => {
      // const dataTransfer = new DataTransfer();
      const dataTransfer = this.getDataTransfer();

      if (dataTransfer) {
        for (const file of arrayFile) {
          dataTransfer.items.add(file);
        }

        return dataTransfer.files;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return undefined as any;
    };

    const handleClearButtonClick = (index: number) => {
      const arrayImagePreview = document.querySelector('.a-upload-field__preview');
      const newArrayImage = this.arrayImage.filter(image => image != this.arrayImage[index]);
      // const dataTransfer = new DataTransfer();
      const dataTransfer = this.getDataTransfer();

      if (arrayImagePreview) {
        arrayImagePreview.parentNode?.removeChild(arrayImagePreview);
      }

      if (dataTransfer) {
        for (const file of newArrayImage) {
          dataTransfer.items.add(file);
        }
        inputEl.files = dataTransfer.files;
      }
      this.arrayImage = [];
      inputEl.dispatchEvent(new CustomEvent('inputChange', { bubbles: true }));
    };

    const handleCloseButtonClick = (index: number) => {
      // const newArrayImage = this.arrayImage.filter(image => image != this.arrayImage[index]);
      this.arrayImage.splice(index, 1);
      const dataTransfer = new DataTransfer();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fileListEl: HTMLElement = this.element.querySelector('.m-upload-list__items') as any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const targetEl: HTMLElement = fileListEl.children.item(index) as any;
      if (targetEl) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ((targetEl as any).__component as UploadListItem).removeCloseClickListener();
        fileListEl.removeChild(targetEl);
      }
      for (const file of this.arrayImage) {
        dataTransfer.items.add(file);
      }
      inputEl.files = dataTransfer.files;
      updateUpdateFileListClassName();
    };

    const createNewImageNode = (index: number) => {
      const li = document.createElement('li');
      li.className = 'a-upload-field__image';
      const img = document.createElement('img');
      img.src = URL.createObjectURL(this.arrayImage[index]);
      li.appendChild(img);

      const dt = this.getDataTransfer();
      if (dt) {
        const button = document.createElement('button');
        button.className = 'a-upload-field__clear-button';
        button.onclick = () => handleClearButtonClick(index);
        const icon = document.createElement('i');
        icon.className = 'a-icon a-icon--close-bold';
        button.appendChild(icon);
        li.appendChild(button);
      }
      return li;
    };

    const createNewFileListNode = (index: number) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const tmpl: HTMLTemplateElement = this.element.querySelector('.m-upload-list__template') as any;
      if (tmpl) {
        const itemInfo: File = this.arrayImage[index];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const nameNode: HTMLElement = tmpl.content.querySelector('.m-upload-list__file-name') as any;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const sizeNode: HTMLElement = tmpl.content.querySelector('.m-upload-list__file-size') as any;
        if (itemInfo && nameNode && sizeNode) {
          nameNode.innerHTML = itemInfo.name;
          sizeNode.innerHTML = bytesToSize(itemInfo.size);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const itemEl: HTMLDivElement = tmpl.content.cloneNode(true) as any;
          const dt = this.getDataTransfer();
          if (!dt) {
            const removeBtn = itemEl.querySelector<HTMLButtonElement>('.m-upload-list__button-remove');
            removeBtn?.parentNode?.removeChild(removeBtn);
          }
          return itemEl;
        }
      }
      return undefined;
    };

    const checkValidFileType = (accept: string, fileType: string): boolean => {
      let isValid = false;

      if (accept === '*' || accept === '*/*') {
        isValid = true;
      } else if (accept.indexOf('/') !== -1) {
        const [acceptBase, acceptExt] = accept.split('/') as [string, string];
        if (fileType.indexOf('/') !== -1) {
          const [base, ext] = fileType.split('/') as [string, string];
          if (acceptBase === base) {
            if (acceptExt === '*') {
              isValid = true;
            } else if (acceptExt === ext) {
              isValid = true;
            }
          }
        }
      }
      return isValid;
    };

    const handleInputChange = (target: HTMLInputElement, e: Event) => {
      if (target.files && target.files.length > 0) {
        const arrayNewImage = Array.from(target.files);
        const amountCurrentImage = this.arrayImage.length;
        this.arrayImage = [...this.arrayImage, ...arrayNewImage];
        const previewHolder = element.querySelector<HTMLDivElement>('.a-upload-field__preview-holder');
        const dt = this.getDataTransfer();
        if (!dt) {
          this.element.classList.toggle('a-upload-field--with-reset', this.arrayImage.length > 0);
        }
        if (inputEl.accept.startsWith('image/', 0)) {
          let ul = element.querySelector<HTMLUListElement>('.a-upload-field__preview');

          if (!ul) {
            ul = document.createElement('ul');
            ul.className = 'a-upload-field__preview';
          }

          for (let index = amountCurrentImage; index < amountCurrentImage + arrayNewImage.length; index++) {
            const childEl = createNewImageNode(index);
            ul.appendChild(childEl);
          }

          previewHolder?.appendChild(ul);
        } else {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const fileListEl: HTMLElement = this.element.querySelector('.m-upload-list__items') as any;

          for (let index = amountCurrentImage; index < amountCurrentImage + arrayNewImage.length; index++) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const childEl: HTMLElement = createNewFileListNode(index) as any;
            if (childEl) {
              fileListEl.appendChild(childEl);
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const newFileListItemEl: HTMLElement = fileListEl.lastElementChild as any;
              const listItem = new UploadListItem({
                element: newFileListItemEl,
              } as VanillaComponentConstructor<HTMLLIElement>);
              if (dt) {
                listItem.onCloseClick = () => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const el: HTMLElement = (listItem as any).element;
                  const parent = el.parentElement;
                  // check current index
                  if (parent) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const childList = parent.querySelectorAll('.m-upload-list__item');
                    childList.forEach((c, idx) => {
                      if (c === el) {
                        handleCloseButtonClick(idx);
                      }
                    });
                  }
                };
              }
            }
          }
        }

        inputEl.files = getCurrentImages(this.arrayImage);
      } else {
        if (!ENV.IS_SAFARI && e.isTrusted) {
          inputEl.files = getCurrentImages(this.arrayImage);
        }
      }

      updateUpdateFileListClassName();
    };

    inputEl.addEventListener('change', e => {
      const target = e.target as HTMLInputElement;
      handleInputChange(target, e);
    });

    inputEl.addEventListener('inputChange', e => {
      const target = e.target as HTMLInputElement;
      handleInputChange(target, e);
    });

    ['dragenter', 'dragover', 'dragleave'].forEach(eventName => {
      element.addEventListener(eventName, e => {
        e.preventDefault();
        e.stopPropagation();
      });
    });

    element.addEventListener('drop', e => {
      e.preventDefault();
      e.stopPropagation();

      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        // const dt = new DataTransfer();
        const dt = this.getDataTransfer();
        if (dt) {
          const arrayFile = e.dataTransfer.files;
          for (let i = 0; i < arrayFile.length; i++) {
            if (checkValidFileType(inputEl.accept, e.dataTransfer.files[i].type)) {
              dt.items.add(e.dataTransfer.files[i]);
            }
          }
          inputEl.files = dt.files;
          inputEl.dispatchEvent(new CustomEvent('inputChange', { bubbles: true }));
        }
      }
    });
  }
}

export function autoInitUploadField() {
  document.querySelectorAll<HTMLDivElement>('.a-upload-field').forEach(element => new UploadField({ element }));
}
