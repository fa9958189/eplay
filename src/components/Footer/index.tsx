import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'
import { colors } from '../../styles/theme'
import Container from '../Container'

const FooterBar = styled.footer`
  padding: 40px 0;
  background-color: ${colors.gray};
`

const Content = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  img {
    width: 120px;
  }

  p {
    color: ${colors.lightGray};
    font-size: 12px;
    text-align: right;
  }

  @media (max-width: 560px) {
    flex-direction: column;

    p {
      text-align: center;
    }
  }
`

const Footer = () => (
  <FooterBar>
    <Content>
      <img src={logo} alt="ePlay" />
      <p>© {new Date().getFullYear()} ePlay. Projeto acadêmico desenvolvido para a EBAC.</p>
    </Content>
  </FooterBar>
)

export default Footer
