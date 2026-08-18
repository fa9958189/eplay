import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Container from '../../components/Container'
import GameGallery from '../../components/GameGallery'
import Header from '../../components/Header'
import Tag from '../../components/Tag'
import { games } from '../../data/games'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { add } from '../../store/reducers/cart'
import { colors } from '../../styles/theme'
import { formatPrice } from '../../utils/formatPrice'

const Hero = styled.section<{ $image: string }>`
  min-height: 480px;
  margin-top: -104px;
  padding-top: 104px;
  background-image: linear-gradient(${colors.overlay}, ${colors.overlay}),
    url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
`

const HeroContent = styled(Container)`
  padding-bottom: 48px;

  h1 {
    max-width: 680px;
    margin: 14px 0 8px;
    font-size: clamp(30px, 5vw, 48px);
    line-height: 1.1;
  }

  p {
    color: ${colors.lightGray};
  }
`

const DetailsSection = styled.section`
  padding: 64px 0 72px;
`

const DetailsGrid = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(260px, 1fr);
  gap: 56px;

  h2 {
    margin-bottom: 20px;
    font-size: 28px;
  }

  p {
    color: ${colors.lightGray};
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

const PurchaseBox = styled.aside`
  padding: 24px;
  border-radius: 8px;
  background-color: ${colors.gray};
  align-self: start;

  span {
    display: block;
    color: ${colors.lightGray};
    font-size: 13px;
  }

  strong {
    display: block;
    margin: 4px 0 20px;
    font-size: 28px;
  }

  button {
    width: 100%;
    min-height: 42px;
    border: 0;
    border-radius: 8px;
    background-color: ${colors.green};
    color: ${colors.white};
    font-weight: 700;
  }
`

const Feedback = styled.p`
  margin-top: 12px;
  color: ${colors.green} !important;
  font-size: 13px;
  font-weight: 700;
`

const GallerySection = styled.section`
  padding: 64px 0 72px;
  background-color: ${colors.gray};

  h2 {
    margin-bottom: 24px;
    font-size: 28px;
  }
`

const Missing = styled.main`
  min-height: 70vh;
  padding: 80px 16px;
  text-align: center;

  a {
    display: inline-block;
    margin-top: 20px;
    color: ${colors.green};
  }
`

type Props = {
  onOpenCart: () => void
}

const GameDetails = ({ onOpenCart }: Props) => {
  const { id } = useParams()
  const game = games.find((item) => item.id === Number(id))
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector((state) => state.cart.items)
  const [feedback, setFeedback] = useState('')

  if (!game) {
    return (
      <Missing>
        <h1>Jogo não encontrado</h1>
        <Link to="/">Voltar à loja</Link>
      </Missing>
    )
  }

  const isInCart = cartItems.some((item) => item.id === game.id)

  const addToCart = () => {
    if (!isInCart) {
      dispatch(add(game))
      setFeedback('Jogo adicionado ao carrinho.')
    } else {
      setFeedback('Este jogo já está no carrinho.')
    }
    onOpenCart()
  }

  return (
    <main>
      <Header onOpenCart={onOpenCart} />
      <Hero $image={game.heroImage}>
        <HeroContent>
          <Tag>{game.category}</Tag>
          <h1>{game.title}</h1>
          <p>{game.platforms.join(' • ')}</p>
        </HeroContent>
      </Hero>
      <DetailsSection>
        <DetailsGrid>
          <div>
            <h2>Sobre o jogo</h2>
            <p>{game.description}</p>
          </div>
          <PurchaseBox>
            <span>Compre agora por</span>
            <strong>{formatPrice(game.price)}</strong>
            <button type="button" onClick={addToCart}>
              Adicionar ao carrinho
            </button>
            {feedback && <Feedback role="status">{feedback}</Feedback>}
          </PurchaseBox>
        </DetailsGrid>
      </DetailsSection>
      <GallerySection>
        <Container>
          <h2>Galeria</h2>
          <GameGallery items={game.gallery} />
        </Container>
      </GallerySection>
    </main>
  )
}

export default GameDetails
