import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 900px;
  padding: 0 32px;
  margin: 0 auto;
`

export default ({ children }) => <Container>{children}</Container>
