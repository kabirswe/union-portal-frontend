import { render, RenderResult } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';

export class TestHelper {
  private static wrapper: RenderResult;

  public static renderVanilla(object: React.ReactElement) {
    document.body.innerHTML = renderToStaticMarkup(object);
  }

  public static unmountVanilla() {
    document.body.innerHTML = '';
  }

  public static renderReact(object: React.ReactElement) {
    TestHelper.wrapper = render(object);
  }

  public static unmountReact() {
    TestHelper.wrapper.unmount();
  }
}
