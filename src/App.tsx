import { ThemeProvider } from 'styled-components'
import { TransactionProvider } from './contexts/TransactionsContext'
import { Transections } from './pages/Transactions'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <TransactionProvider>
        <Transections />
      </TransactionProvider>
    </ThemeProvider>
  )
}
