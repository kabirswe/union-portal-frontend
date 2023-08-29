import { RefObject, useEffect, useMemo } from 'react';
import { mapDataAttrs } from 'libs/component';
import { LinkSpyDecorator } from './decorator';

interface UseLinkSpyArgs {
  ref: RefObject<HTMLAnchorElement>;
  offset?: number;
}

export function useLinkSpy({ ref, offset = 88 }: UseLinkSpyArgs) {
  const dataProps = useMemo(() => {
    return mapDataAttrs({
      linkSpy: 'true',
    });
  }, []);

  useEffect(() => {
    if (!ref.current) {
      return () => undefined;
    }

    const decorator = new LinkSpyDecorator({ el: ref.current, offset });
    decorator.start();

    return () => decorator.stop();
  }, [ref, offset]);

  return { dataProps };
}
