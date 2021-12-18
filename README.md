# Next.js Skeleton

A simple and highly customizable skeleton build with Turborepo and Next. The skeleton is bootstrapped
with [create-next-app](https://nextjs.org/docs/api-reference/create-next-app)
and has the following features:

- [ESLint](https://eslint.org/)
- [Google Tag Manager](https://tagmanager.google.com/#/homeeslint)
- [Security headers](https://nextjs.org/docs/advanced-features/security-headers)
- [Preact](https://preactjs.com/)
- [Prettier](https://prettier.io/)
- [Sass](https://sass-lang.com/)
- [Turborepo](https://turborepo.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ReactSVG](https://www.npmjs.com/package/react-svg)

## Table of contents

- [Table of contents](#table-of-contents)
- [1. Setup](#1-setup)
	- [1.1 How to install this template](#11-how-to-install-this-template)
	- [1.2 Node.js](#12-nodejs)
	- [1.3 Installing dependencies](#13-installing-dependencies)
	- [1.4 TypeScript](#14-typescript)
	- [1.5 Preact](#15-preact)
- [2. Scripts](#2-scripts)
- [3. Security](#3-security)
- [4. Styling](#4-styling)
- [5. Search engine optimization](#5-search-engine-optimization)
	- [5.1 Meta](#51-meta)
	- [5.2 Schema](#52-schema)
- [6. Environment variables](#6-environment-variables)
- [7. Vercel CLI](#7-vercel-cli)

## 1. Setup

### 1.1 How to install this template

There are two ways to get started using this skeleton. When you're using GitHub you can use the button "Use this
template" or [following this link](https://github.com/SirRedDAB/nextjs-skeleton/generate) to create a new repository
based of this skeleton. Another way is to clone the repository, remove the `.git` folder and re-init git by connecting
to the origin repository.

### 1.2 Node.js

First install the Node.js and yarn version listed in `package.json`. Use the JavaScript Tool
Manager [Volta](https://volta.sh/) or a Node Version Manager such as [NVM for Mac](https://github.com/nvm-sh/nvm).

### 1.3 Installing dependencies

After successfully installing Node.js run `yarn` to install all the packages and then `yarn dev` to start developing all
apps. To build a specific app run the command inside that folder.

### 1.4 TypeScript

This skeleton uses **TypeScript** out of the box. If you don't feel comfortable using it or don't need it, just rename
all the files to their JavaScript equivalent (`.js` and `.jsx`) and uninstall TypeScript and all the `@types` listed in
the `package.json`.

### 1.5 Preact

Besides TypeScript, this skeleton uses **Preact** over React for production builds. This results in smaller build and
the same developer experience. Want to switch back to **React**? Simply delete or comment out the code below
in `next.config.js` and uninstall the package.

```js
webpack: (config, {dev, isServer}) => {
	if (!dev && !isServer) {
		Object.assign(config.resolve.alias, {
			react: 'preact/compat',
			'react-dom/test-utils': 'preact/test-utils',
			'react-dom': 'preact/compat',
		})
	}

	return config
}
```

## 2. Scripts

- Use `yarn` or `yarn install` to install the dependencies
- Use `yarn dev` to start a local dev server at [http://localhost:3000](http://localhost:3000)
- To build the application for production, use `yarn build`
- To start a production server, use `yarn start`

## 3. Security

By default, Next doesn't provide all the **security headers** which results in a vulnerable application. I've added the
default security headers listed in the [Next docs](https://nextjs.org/docs/advanced-features/security-headers). To test
your application for security headers, visit [securityheaders.com](https://securityheaders.com/)

## 4. Styling

With Next there's a lot of options to style your projects. This skeleton uses **[Sass](https://sass-lang.com/)
Modules**, **[Tailwind CSS](https://tailwindcss.com/)** and some unit functions
from **[Foundation sites](https://get.foundation/sites/docs/sass-functions.html)**, but use whatever works best for you.
For example:

- [A global stylesheet](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet)
- [CSS-in-JS](https://nextjs.org/docs/basic-features/built-in-css-support#css-in-js)
- [styled-components](https://styled-components.com/)
- [Material-UI](https://mui.com/)

## 5. Search engine optimization

### 5.1 Meta

I've created a `Meta.tsx` component which adds all the properties required regarding SEO. You can set up default props
or feed it dynamically with data.

### 5.2 Schema

I've also created a `Schema.tsx` component to add schema markup for WebSite and WebPage to your side. You can also set
up default props or feed it dynamically with data.

## 6. Environment variables

Next has built-in support for environment variables and the option to expose variables to the browser by prefixing
with `NEXT_PUBLIC_`. In this skeleton we use a variable for the Google Tag Manager container-ID: `NEXT_PUBLIC_GTM`.
Setup this variable inside a `.env` file to start using Google Tag Manager.

## 7. Vercel CLI

Whenever possible, I recommend deploying to [Vercel](https://vercel.com/). It's free, easy to use and gets you running
within minutes (hint: This template was deployed via **Vercel**). A few commands to get you started:

- Install Vercel CLI with `npm install -g vercel`
- Connect a project with `vercel link` and configure credentials accordingly
- Use `vercel env pull` to get the environment variables
- Use `vercel dev` to deploy a local test server at http://localhost:3000
- Use `vercel` to deploy a preview build
- Use `vercel --prod` to deploy a production build
