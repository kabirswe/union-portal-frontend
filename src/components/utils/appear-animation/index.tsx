import { RefObject, useEffect, useMemo } from 'react';
import { mapDataAttrs } from 'libs/component';
import { AppearAnimationDecorator } from './decorator';

interface UseAppearAnimationArgs {
  ref: RefObject<HTMLElement | SVGElement>;
  type?: 'fade-in-up' | 'custom';
  threshold?: number;
  cssFeature?: 'transition' | 'animation';
  delay?: number;
}

export function useAppearAnimation({
  ref,
  type = 'fade-in-up',
  threshold = 0.2,
  cssFeature = 'transition',
  delay = 0,
}: UseAppearAnimationArgs) {
  const dataProps = useMemo(() => {
    return mapDataAttrs({
      appearAnimationType: type,
      appearAnimationThreshold: threshold.toString(),
      appearAnimationTriggered: 'false',
      appearAnimationFinished: 'false',
      appearAnimationCssFeature: cssFeature,
      appearAnimationDelay: delay.toString(),
    });
  }, [threshold, type, cssFeature, delay]);

  useEffect(() => {
    if (!ref.current) {
      return () => undefined;
    }

    const decorator = new AppearAnimationDecorator({ el: ref.current, threshold, cssFeature, delay });
    decorator.start();

    return () => decorator.stop();
  }, [ref, threshold, cssFeature, delay]);

  return { dataProps };
}
