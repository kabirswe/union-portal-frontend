import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { mapModifiers } from 'libs/component';
import { SP_MAX_WIDTH } from 'consts/common';

interface Props {
  children?: string;
  linesPC: number;
  linesSP?: number;
  endMargin?: number;
  character?: string;
}

export const generateHTML = (texts: string) =>
  texts
    .split('<br/>')
    .map(arr =>
      arr
        .split('')
        .map(char => `<span>${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('')
    )
    .join('<br>');

export const Omitpipe: React.FC<Props> = props => {
  let timeoutInstance: NodeJS.Timeout | undefined = undefined;
  const refFake = useRef<HTMLElement | null>(null);
  const [state, setState] = useState({
    maxLength: Number.MAX_SAFE_INTEGER,
    omit: false,
    done: false,
  });

  const getTotalLinesOfText = (el: HTMLElement) => {
    let totalLines = 0;
    let currentPos = Number.MIN_SAFE_INTEGER;
    const charEls = el.querySelectorAll<HTMLSpanElement>('span:not(.u-omitpipe__character)');

    for (let index = 0; index < charEls.length; index++) {
      const pos = charEls[index].offsetTop;
      if (pos > currentPos) {
        totalLines++;
      }
      currentPos = pos;
    }
    return totalLines;
  };

  const calculatorResize = useCallback(() => {
    const elFake = refFake.current;
    if (!elFake) {
      return;
    }

    /**
     * When screenspec is SP and linesSP underfined (0)
     * and screenspec is PC and linesPC passed with values 0
     * should be return with data-origin
     */
    if (
      (window.innerWidth <= SP_MAX_WIDTH && (!props.linesSP || props.linesSP <= 0)) ||
      (window.innerWidth > SP_MAX_WIDTH && props.linesPC <= 0)
    ) {
      setState(prevState => ({
        ...prevState,
        omit: false,
        done: true,
      }));
      return;
    }

    let remainLines = (window.innerWidth <= SP_MAX_WIDTH ? props.linesSP : props.linesPC) as number;
    const totalLines = getTotalLinesOfText(elFake);
    if (remainLines > totalLines) remainLines = totalLines;
    if (props.endMargin && props.endMargin > 0) {
      elFake.style.paddingLeft = `${props.endMargin / remainLines + 1}px`;
    }
    let currentPos = Number.MIN_SAFE_INTEGER;

    const charEls = elFake.querySelectorAll<HTMLSpanElement>('span:not(.u-omitpipe__character)');
    let maxLength = Number.MAX_SAFE_INTEGER;
    for (let index = 0; index < charEls.length; index++) {
      const pos = charEls[index].offsetTop;
      if (pos > currentPos && remainLines-- <= 0) {
        maxLength = index;
        break;
      }
      currentPos = pos;
    }

    maxLength--;
    if (remainLines === -1) {
      /**
       * Handle replace character until not break-line
       */
      while (maxLength > 0) {
        const charElsAfter = (elFake as HTMLElement).querySelectorAll<HTMLSpanElement>('span');
        const elReplace = charElsAfter[maxLength];
        const textEl = elReplace.innerHTML;
        elReplace.innerHTML = props.character as string;
        if (elReplace.offsetTop === charElsAfter[maxLength - 1].offsetTop) {
          elReplace.innerHTML = textEl;
          break;
        } else {
          elReplace.innerHTML = textEl;
          maxLength--;
        }
      }
    }

    if (props.endMargin && props.endMargin > 0) {
      elFake.style.paddingLeft = `0px`;
    }
    setState(prevState => ({
      ...prevState,
      maxLength: maxLength,
      omit: remainLines === -1,
      done: true,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.maxLength]);

  const handleResize = () => {
    if (timeoutInstance) {
      clearTimeout(timeoutInstance);
    }
    timeoutInstance = setTimeout(calculatorResize, 200);
  };

  useEffect(() => {
    calculatorResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const generateHTMLMemo = useMemo(() => (texts: string) => generateHTML(texts), [props.children]);

  if (!props.children) {
    return null;
  }

  return (
    <span
      className={mapModifiers('u-omitpipe')}
      data-lines-pc={props.linesPC}
      data-lines-sp={props.linesSP || 0}
      data-original={props.children}
      data-endmargin={props.endMargin || 0}
      data-character={props.character}
    >
      <span
        ref={refFake}
        className="u-omitpipe__fake"
        dangerouslySetInnerHTML={{ __html: generateHTMLMemo(props.children) }}
      />
      {state.omit ? (
        <span
          className="u-omitpipe__contents"
          dangerouslySetInnerHTML={{
            __html:
              generateHTMLMemo(props.children.substring(0, state.maxLength)) +
              `<span class="u-omitpipe__character">${props.character}</span>`,
          }}
        />
      ) : (
        <span className="u-omitpipe__contents">{state.done && props.children}</span>
      )}
    </span>
  );
};

Omitpipe.defaultProps = {
  character: '…',
};
