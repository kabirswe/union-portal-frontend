import React, { useState } from 'react';
import { CKEditor } from 'ckeditor4-react';
export interface WysiwygEditorProps {
  className?: string;
}

export const WysiwygEditor: React.FC<WysiwygEditorProps> = () => {
  const [editor, setEditor] = useState('');

  const handleReady = () => {
    setEditor(CKEDITOR.instances.test.getData());
  };
  const handleChange = () => {
    setEditor(CKEDITOR.instances.test.getData());
  };

  return (
    <>
      <CKEditor
        initData={<p>Hello from CKEditor 4!</p>}
        onInstanceReady={handleReady}
        onChange={handleChange}
        name="test"
        config={{
          cloudServices_tokenUrl: '', // TODO: Set up an endpoint for authentication.
          extraPlugins: 'easyimage',
          removePlugins: 'image, about',
        }}
      />
      <div dangerouslySetInnerHTML={{ __html: editor }}></div>
    </>
  );
};
