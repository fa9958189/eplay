import { Link } from 'react-router-dom'
import styled from 'styled-components'
import type { Game } from '../../types/Game'
import { colors } from '../../styles/theme'
import { formatPrice } from '../../utils/formatPrice'
import Container from '../Container'
import Tag from '../Tag'

const Section = styled.section<{ $image: string }>`
  min-height: 480px;
  padding: 64px 0;
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.18) 80%),
    url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
`

const Content = styled(Container)`
  div {
    max-width: 430px;
  }

  h2 {
    margin: 16px 0;
    font-size: clamp(30px, 5vw, 44px);
    line-height: 1.1;
  }

  p {
    margin-bottom: 16px;
    color: ${colors.lightGray};
  }

  strong {
    display: block;
    margin-bottom: 20px;
    font-size: 22px;
  }

  a {
    display: inline-block;
    padding: 8px 16px;
    border-radius: 8px;
    background-color: ${colors.green};
    font-weight: 700;
  }
`

type Props = {
  game: Game
}

const Highlight = ({ game }: Props) => (
  <Section $image={game.heroImage}>
    <Content>
      <div>
        <Tag>Oferta especial</Tag>
        <h2>{game.title}</h2>
        <p>{game.description}</p>
        <strong>A partir de {formatPrice(game.price)}</strong>
        <Link to={`/jogo/${game.id}`}>Ver oferta</Link>
      </div>
    </Content>
  </Section>
)

export default Highlight
