import { Link } from 'react-router-dom'
import styled from 'styled-components'
import type { Game } from '../../types/Game'
import { colors } from '../../styles/theme'
import { formatPrice } from '../../utils/formatPrice'
import Tag from '../Tag'

const Card = styled.article`
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  background-color: ${colors.gray};
  display: flex;
  flex-direction: column;
`

const Cover = styled.div`
  position: relative;
  aspect-ratio: 222 / 250;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${Card}:hover & > img {
    transform: scale(1.04);
  }
`

const Tags = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  gap: 6px;
`

const Content = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 1.25;
  }

  p {
    color: ${colors.lightGray};
    font-size: 13px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`

const Price = styled.div`
  margin-top: auto;
  padding-top: 16px;
  display: flex;
  flex-direction: column;

  span {
    color: ${colors.lightGray};
    font-size: 12px;
    text-decoration: line-through;
  }
`

const DetailsLink = styled(Link)`
  margin-top: 12px;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: ${colors.green};
  text-align: center;
  font-size: 13px;
  font-weight: 700;
`

type Props = {
  game: Game
}

const GameCard = ({ game }: Props) => (
  <Card>
    <Cover>
      <img src={game.image} alt={`Capa de ${game.title}`} />
      <Tags>
        <Tag>{game.category}</Tag>
      </Tags>
    </Cover>
    <Content>
      <h3>{game.title}</h3>
      <p>{game.description}</p>
      <Price>
        {game.oldPrice && <span>{formatPrice(game.oldPrice)}</span>}
        <strong>{formatPrice(game.price)}</strong>
      </Price>
      <DetailsLink to={`/jogo/${game.id}`}>Mais detalhes</DetailsLink>
    </Content>
  </Card>
)

export default GameCard
