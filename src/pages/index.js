import React from 'react'
import Helmet from 'react-helmet'

import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Section from '../components/Section'

class Homepage extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
{
  kontentItemSectionsPage(system: {codename: {eq: "home_page"}}) {
    elements {
      sections {
        value {
          ... on kontent_item_header_section {
            elements {
              primary_text {
                value
              }
              secondary_text {
                value
              }
              logo {
                value {
                  url
                }
              }
              url {
                value
              }
              text {
                value
              }
            }
          }
          ... on kontent_item_video_section {
            system {
              codename
            }
            elements {
              primary_text {
                value
              }
              secondary_text {
                value
              }
              youtube_id {
                value
              }
            }
          }
          ... on kontent_item_features_section {
            elements {
              primary_text {
                value
              }
              secondary_text {
                value
              }
              icons {
                value {
                  ... on kontent_item_icon {
                    system {
                      id
                    }
                    elements {
                      code {
                        value
                      }
                    }
                  }
                }
              }
            }
          }
          ... on kontent_item_three_columns_section {
            elements {
              primary_text {
                value
              }
              secondary_text {
                value
              }
              detail_text {
                value
              }
              columns {
                value {
                  ... on kontent_item_blog_post {
                    system {
                      id
                    }
                    elements {
                      title {
                        value
                      }
                      slug {
                        value
                      }
                      summary {
                        value
                      }
                      image {
                        value {
                          name
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on kontent_item_cta_section {
            elements {
              primary_text {
                value
              }
              secondary_text {
                value
              }
              buttons {
                value {
                  ... on kontent_item_button {
                    system {
                      id
                    }
                    elements {
                      text {
                        value
                      }
                      url {
                        value
                      }
                      special {
                        value {
                          codename
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on kontent_item_footer_section {
            elements {
              icons {
                value {
                  ... on kontent_item_link_icon {
                    system {
                      id
                    }
                    elements {
                      text {
                        value
                      }
                      url {
                        value
                      }
                      icon {
                        value {
                          ... on kontent_item_icon {
                            elements {
                              code {
                                value
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              copyright {
                value
              }
            }
          }
        }
      }
    }
  }
}
`}
        render={({ kontentItemSectionsPage }) => {
          const sections = kontentItemSectionsPage.elements.sections.value.map(
            (section, index) => <Section key={index} data={section} />
          )

          return (
            <Layout>
              <Helmet
                title={
                  kontentItemSectionsPage.elements.sections.value[0].elements
                    .primary_text.value
                }
              />
              {sections}
            </Layout>
          )
        }}
      />
    )
  }
}

export default Homepage
