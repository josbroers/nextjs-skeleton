# Next.js Starter Kit

This Next.js starter kit was bootstrapped with [create-next-app](https://nextjs.org/docs/api-reference/create-next-app) and has the following features:

- [ESLint](https://eslint.org/)
- [Google Tag Manager](https://tagmanager.google.com/#/homeeslint)
- [Next-PWA](https://www.npmjs.com/package/next-pwa)
- [Security headers](https://nextjs.org/docs/advanced-features/security-headers)
- [Preact](https://preactjs.com/)
- [Prettier](https://prettier.io/)
- [Sass](https://sass-lang.com/)
- [Stylelint](https://stylelint.io/)
- [TypeScript](https://www.typescriptlang.org/)

## Table of contents

- [Next.js Starter Kit](#nextjs-starter-kit)
  - [Table of contents](#table-of-contents)
  - [1. Setup](#1-setup)
    - [1.1 Node.js](#11-nodejs)
    - [1.2 Installing dependencies](#12-installing-dependencies)
    - [1.3 TypeScript](#13-typescript)
    - [1.4 Preact](#14-preact)
  - [2. Scripts](#2-scripts)
  - [3. Security](#3-security)
  - [4. Styling](#4-styling)
  - [5. Search engine optimization](#5-search-engine-optimization)
    - [5.1 Meta](#51-meta)
    - [5.2 Schema](#52-schema)
  - [6. Environment variables](#6-environment-variables)
  - [7. Vercel CLI](#7-vercel-cli)

## 1. Setup

### 1.1 Node.js

First install the Node.js with `nvm use` version listed in `.nvmrc`. Use a Node Version Manager such as [NVM for Mac](https://github.com/nvm-sh/nvm) or [NVM for Windows](https://github.com/coreybutler/nvm-windows).

### 1.2 Installing dependencies

After successfully installing Node.js run `yarn` to install all the packages and then `yarn dev` to start developing.

### 1.3 TypeScript

This starter kit uses **TypeScript** out of the box. If you don't feel comfortable using it or don't need it, just rename all the files to their JavaScript equivalent (`.js` and `.jsx`) and uninstall TypeScript and all the @types listed in the `package.json`.

### 1.4 Preact

Besides TypeScript this starter kit uses **Preact** over React for production builds. This results in smaller build and the same developer experience. Want to switch back to **React**? Simply delete or comment out the code below in `next.config.js` and uninstall the package.

```js
webpack: (config, { dev, isServer }) => {
	if (!dev && !isServer) {
		Object.assign(config.resolve.alias, {
			react: "preact/compat",
			"react-dom/test-utils": "preact/test-utils",
			"react-dom": "preact/compat",
		})
	}

	return config
},
```

## 2. Scripts

- Use `yarn` or `yarn install` to install the dependencies
- Use `yarn dev` to start a local dev server at [http://localhost:3000](http://localhost:3000)
- To build the application for production, use `yarn build`
- To start a production server, use `yarn start`
- To export application as static HTML, use `next build && next export`
- For checking on unused imports, use `yarn find:unused`
- For analyzing the chunks and modules, use `yarn analyze`
- For analyzing dependencies in the project, use `yarn depcheck`
- For updating the `.nvmrc` file with the current Node.js version, use `yarn node`

## 3. Security

By default Next.js doesn't provide all the **security headers** which results in a vulnerable application. I've added the default security headers listed in the [Next.js docs](https://nextjs.org/docs/advanced-features/security-headers). To test your application for security headers, visit [securityheaders.com](https://securityheaders.com/)

## 4. Styling

With Next.js there's a lot of options to style your projects. This starter kit uses **Sass** and **Sass Modules**, but use whatever works best for you. For example:

- [A global stylesheet](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet)
- [CSS (or Sass) Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)
- [CSS-in-JS](https://nextjs.org/docs/basic-features/built-in-css-support#css-in-js)
- [styled-components](https://styled-components.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Material-UI](https://mui.com/)

## 5. Search engine optimization

### 5.1 Meta

I've created a `Meta.tsx` component which adds all the properties required regarding SEO. You can setup default props or feed it dynamically with data.

### 5.2 Schema

I've also created a `Schema.tsx` component to add schema markup for WebSite and WebPage to your side. You can also setup default props or feed it dynamically with data.

## 6. Environment variables

Next.js has built-in support for environment variables and the option to expose variables to the browser by prefixing with `NEXT_PUBLIC_`. In this starter kit we use a variable for the Google Tag Manager container-ID: `NEXT_PUBLIC_GTM`. Setup this variable inside a `.env` file to start using Google Tag Manager.

## 7. Vercel CLI

Whenever possible, I recommend deploying to [Vercel](https://vercel.com/). It's free, easy to use and gets you running within minutes (hint: This template was deployed via **Vercel**). A few commands to get you started:

- Install Vercel CLI with `npm install -g vercel`
- Connect a project with `vercel link` and configure credentials accordingly
- Use `vercel env pull` to get the environment variables
- Use `vercel dev` to deploy a local test server at http://localhost:3000
- Use `vercel` to deploy a preview build
- Use `vercel --prod` to deploy a production build
