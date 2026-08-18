import styled from 'styled-components'
import type { Game } from '../../types/Game'
import { colors } from '../../styles/theme'
import Container from '../Container'
import GameCard from '../GameCard'

const Section = styled.section<{ $dark?: boolean }>`
  padding: 64px 0 72px;
  background-color: ${({ $dark }) => ($dark ? colors.black : colors.gray)};

  h2 {
    margin-bottom: 32px;
    font-size: 32px;
  }
`

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;

  li {
    min-width: 0;
  }

  @media (max-width: 840px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

type Props = {
  id?: string
  title: string
  games: Game[]
  dark?: boolean
}

const ProductList = ({ id, title, games, dark }: Props) => (
  <Section id={id} $dark={dark}>
    <Container>
      <h2>{title}</h2>
      <Grid>
        {games.map((game) => (
          <li key={game.id}>
            <GameCard game={game} />
          </li>
        ))}
      </Grid>
    </Container>
  </Section>
)

export default ProductList
