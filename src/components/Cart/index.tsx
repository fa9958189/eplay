import { useEffect } from 'react'
import styled from 'styled-components'
import closeIcon from '../../assets/images/fechar.png'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { clear, remove } from '../../store/reducers/cart'
import { colors } from '../../styles/theme'
import { formatPrice } from '../../utils/formatPrice'

const CartContainer = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 50;
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
`

const Overlay = styled.button<{ $isOpen: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  border: 0;
  background-color: ${colors.overlay};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 0.25s ease;
`

const Sidebar = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: min(360px, 100%);
  height: 100%;
  padding: 32px 8px 24px;
  background-color: ${colors.gray};
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform 0.25s ease;
  overflow-y: auto;
`

const Header = styled.div`
  padding: 0 8px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 22px;
  }
`

const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  border: 0;
  background: transparent;
  display: grid;
  place-items: center;

  img {
    width: 16px;
    height: 16px;
  }
`

const EmptyCart = styled.p`
  padding: 32px 16px;
  color: ${colors.lightGray};
  text-align: center;
`

const Item = styled.li`
  position: relative;
  min-height: 100px;
  margin-bottom: 16px;
  padding: 8px 44px 8px 8px;
  border-radius: 8px;
  background-color: ${colors.white};
  color: ${colors.black};
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
  gap: 12px;

  > img {
    width: 80px;
    height: 80px;
    border-radius: 4px;
    object-fit: cover;
  }

  h3 {
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 1.25;
  }

  strong {
    font-size: 13px;
  }
`

const RemoveButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 28px;
  height: 28px;
  border: 0;
  border-radius: 4px;
  background-color: ${colors.black};
  color: ${colors.white};
  font-size: 18px;
  font-weight: 700;
`

const Summary = styled.div`
  margin-top: 24px;
  padding: 16px 8px 0;
  border-top: 1px solid ${colors.lightGray};

  div {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }
`

const ActionButton = styled.button`
  width: 100%;
  min-height: 40px;
  margin-top: 8px;
  border: 0;
  border-radius: 8px;
  background-color: ${colors.green};
  color: ${colors.white};
  font-weight: 700;

  & + & {
    background-color: transparent;
    border: 1px solid ${colors.lightGray};
  }
`

type Props = {
  isOpen: boolean
  onClose: () => void
}

const Cart = ({ isOpen, onClose }: Props) => {
  const dispatch = useAppDispatch()
  const items = useAppSelector((state) => state.cart.items)
  const total = items.reduce((sum, item) => sum + item.price, 0)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) onClose()
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen, onClose])

  return (
    <CartContainer $isOpen={isOpen} data-cart-open={isOpen ? 'true' : 'false'} aria-hidden={!isOpen}>
      <Overlay $isOpen={isOpen} type="button" onClick={onClose} aria-label="Fechar carrinho" />
      <Sidebar $isOpen={isOpen} role="dialog" aria-modal="true" aria-label="Carrinho de compras">
        <Header>
          <h2>Carrinho</h2>
          <CloseButton type="button" onClick={onClose} aria-label="Fechar carrinho">
            <img src={closeIcon} alt="" />
          </CloseButton>
        </Header>
        {items.length === 0 ? (
          <EmptyCart>Seu carrinho está vazio.</EmptyCart>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <Item key={item.id}>
                  <img src={item.image} alt={`Capa de ${item.title}`} />
                  <div>
                    <h3>{item.title}</h3>
                    <strong>{formatPrice(item.price)}</strong>
                  </div>
                  <RemoveButton
                    type="button"
                    onClick={() => dispatch(remove(item.id))}
                    aria-label={`Remover ${item.title} do carrinho`}
                  >
                    ×
                  </RemoveButton>
                </Item>
              ))}
            </ul>
            <Summary>
              <div>
                <span>Valor total</span>
                <strong data-testid="cart-total">{formatPrice(total)}</strong>
              </div>
              <ActionButton type="button">Continuar com a compra</ActionButton>
              <ActionButton type="button" onClick={() => dispatch(clear())}>
                Limpar carrinho
              </ActionButton>
            </Summary>
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
