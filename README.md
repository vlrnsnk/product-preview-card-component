# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa).
Frontend Mentor challenges help improve frontend skills by building realistic UI components.

## Table of contents

- [Overview](#overview)
  - [Preview](#screenshot)
  - [Links](#links)
- [Features](#features)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Setup](#setup)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
  - [Linting](#linting)
- [Deployment](#deployment)
- [Performance](#performance)
- [Continued Development](#continued-development)
- [Useful Resources](#useful-resources)
- [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Notes](#notes)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Preview

<details>
  <summary>Click to expand website preview</summary>
  <br>
  <p align="center">
    <img src="./preview.png" alt="website preview" width="894" style="max-width: 100%; height: auto;">
  </p>
</details>

### Links

- Solution URL: [GitHub Repo](https://github.com/vlrnsnk/product-preview-card-component)
- Live Site URL: [Live Site](https://vlrnsnk.github.io/product-preview-card-component)

## Features

- Responsive mobile-first layout
- Accessible interactive states (`hover`, `focus-visible`)
- Semantic HTML structure
- Modular SCSS architecture using `@use`
- CSS custom properties for design tokens
- Stylelint configuration with property ordering
- Optimized production build with Vite
- Automated deployment to GitHub Pages via GitHub Actions

## My process

### Built with

- Semantic HTML5 markup
- SCSS (modular architecture: abstracts, base, components, layout)
- CSS custom properties (design tokens via SCSS variables)
- Flexbox
- Mobile-first workflow
- Vite
- Stylelint (code quality + property ordering)
- HTML validation
- Husky (pre-commit hooks)

### What I learned

- Using <picture> with <source> for responsive images (different per breakpoint)
- <_s_> vs <_del_> semantic difference for struck-through prices
- BEM block/element/modifier decisions for a single-component layout
- How to combine SCSS variables with CSS custom properties for maintainable design tokens
- Improved responsive design workflow using mobile-first constraints and component max-width patterns
- font-optical-sizing and variable font axes (Fraunces WONK axis)

## Setup

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
npm run preview
```

### Linting

```bash
npm run lint:scss
npm run lint:html
```

This project uses Stylelint + EditorConfig + Husky pre-commit hooks
to ensure consistent code formatting before commits.

### Fix linting issues:

```bash
npm run lint:scss:fix
npm run lint:html:fix
```

## Deployment

Project is built with Vite and deployed to GitHub Pages using GitHub Actions.

## Performance

Lighthouse score (example):

- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## Continued development

- Variable fonts and axis control
- CSS custom properties for theming
- Accessibility and keyboard navigation

## Useful resources

- [MDN Web Docs](https://developer.mozilla.org) — Reference for semantic HTML, accessibility, CSS layout behavior, and modern CSS features.
- [1-Line Layouts](https://1linelayouts.com) — Great resource for modern responsive layout patterns and intrinsic design principles.

## AI Collaboration

- Discussing semantic HTML and accessibility decisions
- Reviewing BEM naming conventions and SCSS structure
- Comparing approaches for responsive layouts and typography systems
- Debugging layout and styling issues
- Evaluating best practices for design tokens, font stacks, and CSS architecture

## Author

- Website: https://vlrnsnk.com
- Frontend Mentor: https://www.frontendmentor.io/profile/vlrnsnk
- GitHub: https://github.com/vlrnsnk

## Notes

- Accessibility-focused semantic markup
- Mobile-first responsive workflow
- Modular SCSS architecture using `@use`
- Consistent styling enforced with Stylelint
- Optimized Vite build pipeline
- GitHub Pages deployment with GitHub Actions
