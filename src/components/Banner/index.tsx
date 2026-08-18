import { Link } from 'react-router-dom'
import styled from 'styled-components'
import type { Game } from '../../types/Game'
import { colors } from '../../styles/theme'
import { formatPrice } from '../../utils/formatPrice'
import Container from '../Container'
import Tag from '../Tag'

const Hero = styled.section<{ $image: string }>`
  min-height: 560px;
  margin-top: -104px;
  padding-top: 104px;
  background-image: linear-gradient(${colors.overlay}, ${colors.overlay}),
    url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;

  @media (max-width: 640px) {
    min-height: 520px;
    margin-top: -128px;
    padding-top: 128px;
  }
`

const HeroContent = styled(Container)`
  padding-bottom: 64px;

  h1 {
    max-width: 520px;
    margin: 16px 0 8px;
    font-size: clamp(30px, 5vw, 48px);
    line-height: 1.08;
  }

  p {
    max-width: 520px;
    color: ${colors.lightGray};
  }
`

const Price = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: baseline;
  gap: 12px;

  strong {
    font-size: 24px;
  }

  span {
    color: ${colors.lightGray};
    text-decoration: line-through;
  }
`

const DetailsLink = styled(Link)`
  display: inline-flex;
  min-height: 40px;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${colors.green};
  align-items: center;
  justify-content: center;
  font-weight: 700;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(1.12);
  }
`

type Props = {
  game: Game
}

const Banner = ({ game }: Props) => (
  <Hero $image={game.heroImage}>
    <HeroContent>
      <Tag>Em destaque</Tag>
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <Price>
        <strong>{formatPrice(game.price)}</strong>
        {game.oldPrice && <span>{formatPrice(game.oldPrice)}</span>}
      </Price>
      <DetailsLink to={`/jogo/${game.id}`}>Saiba mais</DetailsLink>
    </HeroContent>
  </Hero>
)

export default Banner
