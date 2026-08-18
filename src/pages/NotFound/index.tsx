import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles/theme'

const Page = styled.main`
  min-height: 75vh;
  padding: 96px 16px;
  display: grid;
  place-content: center;
  text-align: center;

  h1 {
    font-size: 48px;
  }

  a {
    margin-top: 20px;
    color: ${colors.green};
    font-weight: 700;
  }
`

const NotFound = () => (
  <Page>
    <h1>404</h1>
    <p>A página que você procura não existe.</p>
    <Link to="/">Voltar à loja</Link>
  </Page>
)

export default NotFound
