# My Personal Website

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![Lint, Format, and Type Check](https://github.com/yashjawale/yashjawale.github.io/actions/workflows/lint.yml/badge.svg)](https://github.com/yashjawale/yashjawale.github.io/actions/workflows/lint.yml)
[![Deploy to GitHub Pages](https://github.com/yashjawale/yashjawale.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/yashjawale/yashjawale.github.io/actions/workflows/deploy.yml)

Website for sharing my thoughts on whatever I find interesting with the world!

![Homepage Screenshot](./screenshot.png)

Visit at [https://yashjawale.github.io/](https://yashjawale.github.io/)

## Features

- Image optimization on build
- Accessible emojis
- Automatic reading time display for posts
- Automatic last update status for posts
- Dark mode support
- RSS feed

## Running Locally

- Clone this repository
- Install dependencies with `npm i`
- Start dev server with `npm run dev`

## Adding a blog post

- Add `your-blog-post.md` file under `src/content/blog` (filename denotes the URL slug)
- Write content in file using Markdown syntax
- Add cover image at `src/assets/blogimages/<YOUR_SLUG>/cover.jpg` - Recommended dimensions: `853x480px`
- For adding images to content, use the folowing syntax for caption support `![Alt text](../../assets/blogimages/<YOUR_SLUG>/imagename.ext)`
- Create a PR & merge after passing workflow checks

---

<a href="https://yashjawale.github.io/" target="_blank"><img style="height: 22px;" src="https://raw.githubusercontent.com/yashjawale/.github/main/docs/logo.svg" alt="Yash Jawale"/></a>
