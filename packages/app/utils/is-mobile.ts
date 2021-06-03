import { isServer } from './is-server';

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
export const isMobile =
  !isServer &&
  (('maxTouchPoints' in navigator && navigator?.maxTouchPoints > 0) ||
    ('msMaxTouchPoints' in navigator && navigator?.msMaxTouchPoints > 0) ||
    (window?.matchMedia &&
      matchMedia('(pointer:coarse)').media === '(pointer:coarse)') ||
    /android/i.test(navigator?.userAgent) ||
    /iPad|iPhone|iPod|ios/.test(navigator?.userAgent));
