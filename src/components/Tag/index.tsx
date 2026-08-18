import styled from 'styled-components'
import { colors } from '../../styles/theme'

const Badge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${colors.green};
  color: ${colors.white};
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
`

type Props = {
  children: string
}

const Tag = ({ children }: Props) => <Badge>{children}</Badge>

export default Tag
