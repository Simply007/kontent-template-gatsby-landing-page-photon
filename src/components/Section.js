import React from 'react'

import HeaderSection from './HeaderSection'
import VideoSection from './VideoSection'
import FeaturesSection from './FeaturesSection'
import ThreeColumnsSection from './ThreeColumnsSection'
import CtaSection from './CTASection'
import FooterSection from './FooterSection'

const Section = props => {
  switch (props.data.__typename) {
    case 'kontent_item_header_section':
      return <HeaderSection {...props.data} />
    case 'kontent_item_video_section':
      return <VideoSection {...props.data} />
    case 'kontent_item_features_section':
      return <FeaturesSection {...props.data} />
    case 'kontent_item_three_columns_section':
      return <ThreeColumnsSection {...props.data} />
    case 'kontent_item_cta_section':
      return <CtaSection {...props.data} />
    case 'kontent_item_footer_section':
      return <FooterSection {...props.data} />
    default:
      return <div>Unknown section!</div>
  }
}

export default Section
