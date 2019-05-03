# Kentico Cloud & GatsbyJs web template

Kentico cloud web template using Gatsby and Kentico Cloud.

## Get started

### Prerequisites

* [Node.js](https://nodejs.org/en/download/)
* [Yarn](https://yarnpkg.com/en/docs/install)

### Run

* [Clone](https://git-scm.com/docs/git-clone) or [fork](https://hub.github.com/hub-fork.1.html) this repository. Once it's done, navigate to the [app's root directory](https://github.com/Simply007/cloud-template-gatsby) and install the packages:

    ```sh
    yarn
    ```

* Run development environment

    ```sh
    yarn develop
    ```

## Icons

TODO: fontawesome + material icons

## CSS Grid

The grid on this site was replaced with a custom version, built using CSS Grid. It's a very simple 12 column grid that is disabled on mobile. To start using the grid, wrap the desired items with `grid-wrapper`. Items inside the `grid-wrapper` use the class `col-` followed by a number, which should add up to 12.

Here is an example of using the grid, for a 3 column layout:

```
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
