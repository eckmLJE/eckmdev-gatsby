import React from 'react'
import styled from 'styled-components'

const Summary = styled.h3`
  margin: 1rem auto;
  padding: 0;
  max-width: 800px;
`

export default ({ content }) => <Summary>{content}</Summary>