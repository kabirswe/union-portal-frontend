import React, { useEffect, useRef } from 'react';
import { mapModifiers } from 'libs/component';
import { canUseDOM } from 'exenv';
// import Quill from 'quill';

export type PlaceholderListItem = {
  id: number;
  value: string;
  code: string;
};

export interface EmailTemplateEditorProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  onResolvePlaceholder?: (searchTerm: string) => PlaceholderListItem[];
}

// const Embed = typeof document !== 'undefined' ? Quill.import('blots/embed') : Object;

export const EmailTemplateEditor: React.FC<EmailTemplateEditorProps> = ({
  children,
  id,
  className: additionalClassName = '',
  onResolvePlaceholder,
}) => {
  const componentClassName = mapModifiers('a-email-template-editor');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  const body = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (body.current && canUseDOM && typeof document !== 'undefined') {
      import('quill').then(lib => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const Quill = lib.default as any;
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

        import('quill-mention').then(() => {
          new Quill(body.current as HTMLDivElement, {
            modules: {
              mention: {
                mentionDenotationChars: ['%%'],
                dataAttributes: ['id', 'value', 'code'],
                showDenotationChar: false,
                blotName: 'a-text-placeholder',
                maxChars: 10,
                source: async (searchTerm: string, renderList: (list: PlaceholderListItem[]) => void) => {
                  if (onResolvePlaceholder) {
                    const matchedCodes = await onResolvePlaceholder(searchTerm);
                    renderList(matchedCodes);
                  }
                },
              },
            },
          });
        });
      });
    }
  }, [body, onResolvePlaceholder]);

  return (
    <div className={className} id={id}>
      <div className="a-email-template-editor__body" ref={body}>
        {children}
      </div>
    </div>
  );
};
