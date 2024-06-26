import 'styled-components'
import { defaultTheme } from '../theme/default-theme'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}