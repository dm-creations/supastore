# supastore

## Technology used
Node JS
Vue JS
TailwindCSS (SCSS based template)

The option is always there to use a Wordpress theme and customise it, however I decided to go with a less templated starting point and work on the layout from the ground up. [TailwindCSS](https://tailwindcss.com/) helps greatly with rapid prototyping.

I built the page responsive and mobile first, there is one media query of __min-width: 768px__ and the max-width of the container is __1024px__.

Accessibility-wise, I tested the file by running through the mobile version of the site using Voiceover on an iPhone X. I added alt tags to make the images make a bit more sense, and all external links are semantic <a> tags.

## Project setup
Pre-requisite: Make sure to have installed, node and Node Package Manager (NPM)
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

To view Build version of the site go to: [dxlm.co.uk](https://dxlm.co.uk/for-sd/)

## Design Basis