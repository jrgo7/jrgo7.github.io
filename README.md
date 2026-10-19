# jrgo7 personal site

Jekyll site, built by GitHub Pages. Pages are `index.html`, `projects.html`,
`publications.html`, and `resume.html`.

- Shared layout: `_layouts/default.html`, with `_includes/` for the head, nav, and footer.
- Content lives in `_data/`: `site.yml` (nav, links, email), `projects.yml`,
  `publications.yml`, and `talks.yml`. Edit those, not the pages.
- Images and the resume PDF are in `assets/`.

Preview locally:

    bundle install
    bundle exec jekyll serve
