# Kentico Kontent & GatsbyJs web template

[![Preview](https://img.shields.io/badge/-Preview-brightgreen.svg)](https://kontent-template-gatsby-landing-page-photon.netlify.com)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ba608493-8415-46e4-87c9-19f025f56619/deploy-status)](https://app.netlify.com/sites/kontent-template-gatsby-landing-page-photon/deploys)

Kentico Kontent web template using Gatsby and Kentico Kontent.

![template preview](/template.png)

## Get started

### Prerequisites

* [Node.js](https://nodejs.org/en/download/)
* [Yarn](https://yarnpkg.com/en/docs/install)

### Run

1. [Clone](https://git-scm.com/docs/git-clone) or [fork](https://hub.github.com/hub-fork.1.html) this repository. Once it's done, install the packages:

    ```sh
    yarn
    ```

1. [Register on Kentico Kontent](http://app.kontent.ai)
1. [Create an empty project](https://docs.kontent.ai/tutorials/set-up-projects/manage-projects/creating-and-archiving-projects)
1. [Enable Content Management API](https://docs.kontent.ai/tutorials/set-up-projects/migrate-content/importing-to-kentico-kontent#a-enabling-the-api-for-your-project)
1. Import [content.zip](/content.zip) data using [Template manager](https://kentico.github.io/kontent-template-manager/import-from-file)
    * Use `Project Id` and `Content Management API key` from previously generated project.
    * Select `Publish language variants after import`
1. Copy [.env.template](./.env.template) and name it `.env`, then set the `KONTENT_PROJECT_ID` environment variable to value from Kontent -> "Project Settings" -> API keys -> Project ID.
1. Run development environment

    ```sh
    yarn develop
    ```

🚀 Your site is now running at http://localhost:8000!

## Deploy with Netlify

Netlify CMS can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify. Use the button below to build and deploy your own copy of the repository:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Simply007/kontent-template-gatsby-landing-page-photon)

> After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete.

## Features

* [GatsbyJS](https://www.gatsbyjs.org/) static site generator
* Data source - Kentico Kontent (using [Gatsby source plugin for Kentico Kontent](https://www.gatsbyjs.org/packages/@kentico/gatsby-source-kontent))
* Styling using SCSS
* [Font awesome + Material Icons](#Icons)
* [CSS Grid](#CSS-Grid)

### Color palette

To define color pallette - change values of variables stored in [_vars.scss](https://github.com/Simply007/kontent-template-gatsby-landing-page-photon/blob/master/src/assets/scss/libs/_vars.scss#L32).

### Icons

It is possible to use [two sets of font icons](https://github.com/Simply007/kontent-template-gatsby-landing-page-photon/tree/master/src/assets/css) - [Material Icons](https://material.io/tools/icons/) as well as [Font Awesome](https://fontawesome.com/).

Format Example:

* Material icons: `<i className="material-icons">face</i>` (`face` - icon code)
* Font Awesome : `<li><span  className="fa-code"></span></li>` (`fa-code` - icon code)

### CSS Grid

The grid on this site was replaced with a custom version, built using CSS Grid. It's a very simple 12 column grid that is disabled on mobile. To start using the grid, wrap the desired items with `grid-wrapper`. Items inside the `grid-wrapper` use the class `col-` followed by a number, which should add up to 12.

Here is an example of using the grid, for a 3 column layout:

```html
<div className="grid-wrapper">
    <div className="col-4">
        <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
    </div>
</div>
```

## Thanks

 © 2019, Built with Gatsby using [Gatsby starter Photon](https://www.gatsbyjs.org/starters/codebushi/gatsby-starter-photon/)
