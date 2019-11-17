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
        linked_items {
          ... on Node {
            ... on KontentItemHeaderSection {
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
            ... on KontentItemVideoSection {
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
            ... on KontentItemFeaturesSection {
              elements {
                primary_text {
                  value
                }
                secondary_text {
                  value
                }
                icons {
                  linked_items {
                    ... on Node {
                      ... on KontentItemIcon {
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
            }
            ... on KontentItemThreeColumnsSection {
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
                  linked_items {
                    ... on Node {
                      ... on KontentItemBlogPost {
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
            }
            ... on KontentItemCtaSection {
              elements {
                primary_text {
                  value
                }
                secondary_text {
                  value
                }
                buttons {
                  linked_items {
                    ... on Node {
                      ... on KontentItemButton {
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
            }
            ... on KontentItemFooterSection {
              elements {
                icons {
                  linked_items {
                    ... on Node {
                      ... on KontentItemLinkIcon {
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
                            linked_items {
                              ... on Node {
                                ... on KontentItemIcon {
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
}
`}
        render={({ kontentItemSectionsPage }) => {
          const sections = kontentItemSectionsPage.elements.sections.linked_items.map(
            (section, index) => <Section key={index} data={section} />
          )

          return (
            <Layout>
              <Helmet
                title={
                  kontentItemSectionsPage.elements.sections.linked_items[0].elements
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
