# supastore

## Technology used
- Node JS
- [Vue 2](https://vuejs.org/v2/guide/)
- TailwindCSS (SCSS based template)

#### Why this setup?
The option is always there to use a Wordpress theme and customise it, however I decided to go with a less templated starting point and work on the layout from the ground up, as a way to demonstrate more of my CSS abilities. [TailwindCSS](https://tailwindcss.com/) helps greatly with rapid prototyping.

#### Responsive
I built the page responsive and mobile first, there is one media query of __min-width: 768px__ and the max-width of the container is __1024px__.

#### Accessibility
Accessibility-wise, I tested the file by running through the mobile version of the site using Voiceover on an iPhone X. I added alt tags to make the images make a bit more sense, and all external links are semantic ```<a>``` tags.

## Project setup
Pre-requisite: Make sure to have installed, Node and Node Package Manager (NPM)
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

## Alternatively...
To view Build version of the site go to: [dxlm.co.uk/sd/index.html](https://dxlm.co.uk/sd/index.html)

## Design Basis

Given more time I would have certainly tested on more browsers and devices. I used iPhone X Chrome (which is basically Safari) and Chrome Version 88.0.4324.96 (Official Build) (64-bit) on a Linux Ubuntu computer.

To avoid making the page look like a bog-standard plain background with black text, I experimented with some darker colours in the background. A light and dark mode would be preferable and I would set it to sync to the browser's system default.

Above the Fold
===
Above the fold I have the important information (and I've added an exciting quote from the book). The Author's name is above the title because if the author were to stumble upon the page, they might prefer their name to take first priority over the title, or anything else.

Buy in Stores Section
===
I have the price listed in USD. Although since there isn't an option to actually buy from my page, I would omit that information.

Since the buying information is quite important, I singled out that information from the rest of the page with a card. I think a more significant call to action to visit the links would have been a better implementation of this section.

Description Section
===
I am not a fan of the wall of text that came in from the product object. I would write a function that splits paragraphs with Newlines. In hindsight, increasing the line-height would have made a difference. On the mobile version, I have the section truncated with an expandable "Read More" link to click, accessibility-wise it could have been better as a button, although screen readers would pick up the whole of the text without the need to expand it.

Reviews Section
===
I would have liked the object to have actual customer ratings built into it ^^.
The reviews are set inline in order to preserve vertical space. The mobile version has the proper functionality of swiping left to view the other reviews. There should be an arrow to the right, or a peek of the next review to make it obvious to take the action of swiping to scroll right. Making the reviews be on cards would help to encourage that user behaviour. The see all reviews link does nothing but would ideally open a modal with all the reviews on the page.

Trailer
===
I know that there is no video link in the object (or a quote), but thought it would be fun to include on the page.

Author
===
With more time I would have meticulously spaced the sections out a bit more. Again the line height needs more space especially with this font.

## Technical Basis

In the Head of the document, the favicon and the page title take information from the object. The site logo would be more appropriate here but I just replaced it to demonstrate that it is an option.

With Tailwind CSS, you apply direct semantic styles to each element directly, the tailwind.config.js should ideally be further customised to match the Brand styles. If Tailwind CSS is set up correctly, it should automatically remove any unused CSS on build.

Importing the Data
===
Rather than importing the data directly into the Product component, I created a service __app.service.js__ to handle importing the object. I put the data in a local json file but the service could easily fetch the data asynchronously from an API directly, and handle errors appropriately. To access the data in the Product.vue component, I call the appService class functions/methods that I built and give it to the component's data object. From there interpolation of the data into the HTML template using double curly brackets is the next step. For the array of reviews and the links, I used a vue for loop to render each item in the list and then styled accordingly.

I created a function that takes the image url string and a desired new size, as arguments. It manipulates the string of an image url to return a different sized version depending on the second argument given.

I created a filter to return only the text content from the description. I think further string manipulation to separate out paragraphs, would be the most I would want to do to manipulate the description received, due to potential varying nature of the text received.