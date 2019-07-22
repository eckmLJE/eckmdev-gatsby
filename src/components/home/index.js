import React from 'react'

import { homeContent } from '../../content/summaries'

import Summary from '../summary'

export default () => (
  <>
    <Summary content={homeContent[0]} />
    {/* Image */}
    <Summary content={homeContent[1]} />
  </>
)
