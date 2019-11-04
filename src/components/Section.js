import React from 'react'

import HeaderSection from './HeaderSection'
import VideoSection from './VideoSection'
import FeaturesSection from './FeaturesSection'
import ThreeColumnsSection from './ThreeColumnsSection'
import CtaSection from './CTASection'
import FooterSection from './FooterSection'

const Section = props => {
  switch (props.data.__typename) {
    case 'KontentItemHeaderSection':
      return <HeaderSection {...props.data} />
    case 'KontentItemVideoSection':
      return <VideoSection {...props.data} />
    case 'KontentItemFeaturesSection':
      return <FeaturesSection {...props.data} />
    case 'KontentItemThreeColumnsSection':
      return <ThreeColumnsSection {...props.data} />
    case 'KontentItemCtaSection':
      return <CtaSection {...props.data} />
    case 'KontentItemFooterSection':
      return <FooterSection {...props.data} />
    default:
      return <div>Unknown section!</div>
  }
}

export default Section
