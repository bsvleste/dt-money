import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsCotext'
import { Transaction } from './pages/Transaction'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <TransactionsProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Transaction />
      </ThemeProvider>
    </TransactionsProvider>
  )
}
