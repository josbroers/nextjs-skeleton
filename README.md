# create-nextjs-skeleton

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/jos-broers/nextjs-skeleton/nextjs-skeleton) ![npm](https://img.shields.io/npm/v/create-nextjs-skeleton)

A simple and highly customizable skeleton build with Turborepo and Next. The skeleton is bootstrapped
with [create-next-app](https://nextjs.org/docs/api-reference/create-next-app) and has the following features:

- [ESLint](https://eslint.org/)
- [Security headers](https://nextjs.org/docs/advanced-features/security-headers)
- [Prettier](https://prettier.io/)
- [Sass](https://sass-lang.com/)
- [Turbopack](https://turbo.build/pack)
- [Turborepo](https://turbo.build/repo)
- [TypeScript](https://www.typescriptlang.org/)
- [SVGR](https://react-svgr.com/)

## Table of contents

- [1. Setup](#1-setup)
	- [1.1 Node.js](#11-nodejs)
	- [1.2 How to install this template](#12-how-to-install-this-template)
	- [1.3 TypeScript](#13-typescript)
- [2. Scripts](#2-scripts)
- [3. Security](#3-security)
- [4. Styling](#4-styling)
- [5. Search engine optimization](#5-search-engine-optimization)
	- [5.1 Meta](#51-meta)
	- [5.2 Schema](#52-schema)
- [6. Environment variables](#6-environment-variables)
- [7. Vercel CLI](#7-vercel-cli)
- [8. Remote caching](#8-remote-caching)

## 1. Setup

### 1.1 Node.js

First install the Node.js higher or equal to 16.15.0 Use the JavaScript Tool Manager [Volta](https://volta.sh/) or
the [Node Version Manager](https://github.com/nvm-sh/nvm).

### 1.2 How to install this template

After successfully installing Node.js you can create an app using this skeleton. We recommend creating a new app
using `npx` or `yarn create`, which sets up everything automatically for you. To create a project, run:

```bash
npx create-nextjs-skeleton
# or
npm init nextjs-skeleton
# or
yarn create nextjs-skeleton
```

### 1.3 TypeScript

This skeleton uses **TypeScript** out of the box. If you don't feel comfortable using it or don't need it, just rename
all the files to their JavaScript equivalent (`.js` and `.jsx`) and uninstall TypeScript and all the `@types` listed in
the `package.json`.

## 2. Scripts

- Use `npm run dev` to start a local dev server, e.g: [http://localhost:3000](http://localhost:3000)
- To test the code using ESLint and Stylelint, use `npm run lint`
- To build the application for production, use `npm run lint && npm run build`
- To start a production server, use `npm run start`

## 3. Security

By default, Next doesn't provide all the **security headers** which results in a vulnerable application. I've added the
default security headers listed in the [Next docs](https://nextjs.org/docs/advanced-features/security-headers). To test
your application for security headers, visit [securityheaders.com](https://securityheaders.com/)

## 4. Styling

With Next there's a lot of options to style your projects. This skeleton uses **[Sass](https://sass-lang.com/) Modules**
, **[Modern Normalize](https://www.npmjs.com/package/modern-normalize/)** and some unit functions inspired
by **[Foundation sites](https://get.foundation/sites/docs/sass-functions.html)**, but use whatever works best for you.
For example:

- [A global stylesheet](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet)
- [CSS-in-JS](https://nextjs.org/docs/basic-features/built-in-css-support#css-in-js)
- [styled-components](https://styled-components.com/)
- [Material-UI](https://mui.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## 5. Search engine optimization

### 5.1 Meta

I've created a `<Meta>` component which adds all the properties required regarding SEO. You can set up default props or
feed it dynamically with data.

### 5.2 Schema

I've also created a `<Schema>` component to add schema markup for WebSite and WebPage to your side. You can also set up
default props or feed it dynamically with data.

## 6. Environment variables

Next has built-in support for environment variables and the option to expose variables to the browser by prefixing
with `NEXT_PUBLIC_`.

## 7. Vercel CLI

Whenever possible, I recommend deploying to [Vercel](https://vercel.com/). It's free, easy to use and gets you running
within minutes (hint: This template was deployed via **Vercel**). A few commands to get you started:

- Install Vercel CLI with `npm install -g vercel`
- Connect a project with `vercel link` and configure credentials accordingly
- Use `vercel env pull` to get the environment variables
- Use `vercel dev` to deploy a local test server at http://localhost:3000
- Use `vercel` to deploy a preview build
- Use `vercel --prod` to deploy a production build

## 8. Remote caching

With Turborepo, you can connect to the Vercel Remote Cache to share build artifacts. You first need to authenticate the
Turborepo CLI with your Vercel account using `npx turbo login`. Then link your repo to enable the Remote Caching
using `npx turbo link`.
You will get a prompt to enable Remote Caching for the current repo. Enter Y for yes to enable Remote Caching. Next,
select the team scope you'd like to connect to. Once completed, Turborepo will use Vercel Remote Caching to store the
cache artifacts.
