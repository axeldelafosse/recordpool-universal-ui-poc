import { Platform } from 'react-native';

import { isMobile } from './is-mobile';

export const isDesktop = Platform.OS === 'web' && !isMobile;
