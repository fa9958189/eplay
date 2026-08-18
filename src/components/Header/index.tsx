import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import cartIcon from '../../assets/images/carrinho.svg'
import logo from '../../assets/images/logo.svg'
import { useAppSelector } from '../../store/hooks'
import { colors } from '../../styles/theme'
import Container from '../Container'

const HeaderBar = styled.header`
  position: relative;
  z-index: 5;
  padding-top: 40px;

  @media (max-width: 640px) {
    padding-top: 16px;
  }
`

const HeaderContent = styled(Container)`
  min-height: 64px;
  padding: 12px 24px;
  border-radius: 16px;
  background-color: ${colors.gray};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 640px) {
    min-height: 112px;
    padding: 14px 18px;
    flex-wrap: wrap;
    gap: 12px;
  }
`

const Brand = styled(Link)`
  flex: 0 0 auto;

  img {
    width: 120px;
    height: auto;
  }
`

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;

  a,
  button {
    border: 0;
    background: transparent;
    color: ${colors.white};
    font-size: 14px;
    font-weight: 700;
    transition: color 0.2s ease;

    &:hover {
      color: ${colors.green};
    }
  }

  @media (max-width: 640px) {
    order: 3;
    width: 100%;
    justify-content: center;
  }
`

const CartButton = styled.button`
  border: 0;
  background: transparent;
  color: ${colors.white};
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;

  img {
    width: 28px;
    height: 28px;
  }
`

type Props = {
  onOpenCart: () => void
}

const Header = ({ onOpenCart }: Props) => {
  const navigate = useNavigate()
  const totalItems = useAppSelector((state) => state.cart.items.length)

  const navigateToOffers = () => {
    navigate('/')
    window.setTimeout(() => document.getElementById('ofertas')?.scrollIntoView(), 0)
  }

  return (
    <HeaderBar>
      <HeaderContent>
        <Brand to="/" aria-label="Página inicial do ePlay">
          <img src={logo} alt="ePlay" />
        </Brand>
        <Navigation aria-label="Navegação principal">
          <button type="button" onClick={navigateToOffers}>
            Categorias
          </button>
          <Link to="/">Novidades</Link>
        </Navigation>
        <CartButton type="button" onClick={onOpenCart} aria-label="Abrir carrinho">
          <span>
            {totalItems} {totalItems === 1 ? 'item' : 'itens'}
          </span>
          <img src={cartIcon} alt="" aria-hidden="true" />
        </CartButton>
      </HeaderContent>
    </HeaderBar>
  )
}

export default Header
