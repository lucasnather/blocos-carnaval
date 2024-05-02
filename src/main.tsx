import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { defaultTheme } from './theme/default-theme'
import { ThemeProvider } from 'styled-components'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={defaultTheme} >
      <App />
    </ThemeProvider>
)
