/** Componentes */
import { Button } from './components/atoms/Button/Button';
import { TextInput } from './components/atoms/Input/TextInput'
import { CustomThemeProvider, useTheme } from './hooks/useTheme'
/** Hooks */
import { createTheme } from './lib/createTheme'
import { defaultTheme } from './styles/defaultTheme'
import { Theme } from './styles/types'

export {
    TextInput,
    Button,
    defaultTheme,
    CustomThemeProvider,
    useTheme,
    createTheme,
}
export type { Theme }
