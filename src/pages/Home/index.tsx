import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Highlight from '../../components/Highlight'
import ProductList from '../../components/ProductList'
import { featuredGame, hogwartsGame, promotionGames } from '../../data/games'

type Props = {
  onOpenCart: () => void
}

const Home = ({ onOpenCart }: Props) => (
  <main>
    <Header onOpenCart={onOpenCart} />
    <Banner game={featuredGame} />
    <ProductList id="ofertas" title="Jogos em promoção" games={promotionGames} />
    <Highlight game={hogwartsGame} />
  </main>
)

export default Home
