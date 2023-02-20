import {
  BoxLogo,
  HeaderContainer,
  HeaderContent,
  NewTransactionBurron,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <BoxLogo>
          <strong>Alison</strong>
          <span>Money</span>
        </BoxLogo>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionBurron> Nova transação</NewTransactionBurron>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
