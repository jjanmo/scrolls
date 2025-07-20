import styled from '@emotion/styled'

import { FOOTER_HEIGHT, MAX_WIDTH } from '@/constants/styles'
import { palette } from '@/styles/theme'

export default function Footer() {
  return (
    <Container>
      <Content>© 2024 Scrolls</Content>
    </Container>
  )
}

const Container = styled.footer`
  height: ${FOOTER_HEIGHT}px;
  padding: 0 20px;
  border-top: 1px solid ${palette.theme4};
`
const Content = styled.div`
  width: 100%;
  max-width: ${MAX_WIDTH}px;
  height: 100%;
  padding: 0 20px;
  margin: auto;
  display: flex;
  justify-content: end;
  align-items: center;
`
