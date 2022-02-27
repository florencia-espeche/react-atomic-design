import React from 'react'

import { CustomThemeProvider } from '../src/hooks/useTheme/ThemeContext'

export const decorators = [
    Story => (
        <CustomThemeProvider>
            <Story />
        </CustomThemeProvider>
    )
]
