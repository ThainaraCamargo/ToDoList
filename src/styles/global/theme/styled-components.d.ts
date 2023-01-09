import type {iTheme} from '../../../interface/iTheme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends iTheme {} 
}