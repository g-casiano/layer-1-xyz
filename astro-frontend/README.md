# Layer1.xyz Astro front end

This example showcases Astro's built-in support for [Solid](https://www.solidjs.com/).

## Installation

git clone
yarn install

### Automatic

Bootstrap your Astro project with this template!

```shell
npm init astro --template framework-solid
```

### Manual

To use Solid components in your Astro project:

1. Install `@astrojs/renderer-solid`

   ```shell
   npm i @astrojs/renderer-solid
   ```

2. Add `"@astrojs/renderer-solid"` to your `renderers` in `astro.config.mjs`.

   ```js
   export default {
   	renderers: [
   		'@astrojs/renderer-solid',
   		// optionally, others...
   	],
   };
   ```

## Usage

Write your Solid components as `.jsx` or `.tsx` files in your project.

todo
dark mode - https://piccalil.li/tutorial/create-a-user-controlled-dark-or-light-mode/
