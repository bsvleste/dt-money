import styled, { css } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  ${({ theme, variant }) => css`
    background-color: ${theme['gray-700']};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    border: 0;
    color: ${theme['gray-300']};

    svg {
      color: ${variant === 'income' ? theme['green-300'] : theme['red-300']};
    }
    &[data-state='unchecked']:hover {
      background-color: ${theme['gray-600']};
    }
    &[data-state='checked'] {
      color: ${theme.white};
      background-color: ${variant === 'income'
        ? theme['green-500']
        : theme['red-500']};
      svg {
        color: ${theme.white};
      }
    }
  `}
`

export const Overlay = styled(Dialog.Overlay)`
  ${({ theme }) => css`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.75);
  `}
`
export const Content = styled(Dialog.Content)`
  ${({ theme }) => css`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background-color: ${theme['gray-800']};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      input {
        border-radius: 6px;
        border: 0;
        background-color: ${theme['gray-900']};
        color: ${theme['gray-300']};
        padding: 1rem;

        &::placeholder {
          color: ${theme['gray-500']};
        }
      }

      button[type='submit'] {
        height: 58px;
        border: 0;
        background-color: ${theme['green-500']};
        color: ${theme.white};
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 6px;
        margin-top: 1.5rem;
        cursor: pointer;

        transition: background-color 0.2s;

        &:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        &:not(:disable):hover {
          background-color: ${theme['green-700']};
        }
      }
    }
  `}
`

export const CloseButton = styled(Dialog.Close)`
  ${({ theme }) => css`
    position: absolute;
    background-color: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    cursor: pointer;
    color: ${theme['gray-500']};
  `}
`
