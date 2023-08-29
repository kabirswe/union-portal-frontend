import { PlaceholderListItem } from 'components/atoms/email-template-editor';
import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';
import Quill from 'quill';
import 'quill-mention';

const Embed = Quill.import('blots/embed');

class TextPlaceholderBlot extends Embed {
  static blotName = 'a-text-placeholder';
  static className = 'a-text-placeholder';
  static tagName = 'SPAN';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static create(data: any) {
    const node: HTMLElement = super.create(data);
    node.innerText = data.value;
    return TextPlaceholderBlot.setDataValues(node, data);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static setDataValues(element: HTMLElement, data: any) {
    const domNode = element;
    Object.keys(data).forEach((key: string) => {
      if (key !== 'denotationChar') {
        domNode.dataset[key] = data[key] as string;
      }
    });
    return domNode;
  }

  static value(domNode: HTMLElement) {
    return domNode.dataset;
  }
}
Quill.register(TextPlaceholderBlot);

export class EmailTemplateEditor extends VanillaComponent<HTMLDivElement> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private _onResolvePlaceholder: (searchTerm: string) => Promise<PlaceholderListItem[]> = () => [];

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });

    const bodyEl = element.querySelector('.a-email-template-editor__body');

    new Quill(bodyEl as HTMLDivElement, {
      modules: {
        mention: {
          mentionDenotationChars: ['%%'],
          dataAttributes: ['id', 'value', 'code'],
          showDenotationChar: false,
          blotName: 'a-text-placeholder',
          maxChars: 10,
          source: async (searchTerm: string, renderList: (list: PlaceholderListItem[]) => void) => {
            if (this._onResolvePlaceholder) {
              const matchedCodes = await this._onResolvePlaceholder(searchTerm);
              renderList(matchedCodes);
            }
          },
        },
      },
    });
  }

  public set onResolvePlaceholder(callback: (searchTerm: string) => Promise<PlaceholderListItem[]>) {
    this._onResolvePlaceholder = callback;
  }
}

export function autoInitEmailTemplateEditor() {
  document
    .querySelectorAll<HTMLDivElement>('.a-email-template-editor')
    .forEach(element => new EmailTemplateEditor({ element }));
}
