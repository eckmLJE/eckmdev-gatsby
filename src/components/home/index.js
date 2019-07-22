import React from 'react'
import styled from 'styled-components'

import { homeContent } from '../../content/summaries'
import HomeSkateboardImg from '../images/home-skateboard'

import Summary from '../summary'

const ImageContainer = styled.div`
  padding: 2rem 0;
  margin: 0 auto;
  max-width: 600px;
`

export default () => (
  <>
    <Summary content={homeContent[0]} />
    <ImageContainer>
      <HomeSkateboardImg />
    </ImageContainer>
    <Summary content={homeContent[1]} />
  </>
)
