---
title: "Homepage Quotes"
date: 2022-10-22T15:03:01+01:00
description: "Using Hugo shortcodes to add JavaScript to my site"
---

I was interested in learning how to use [Hugo's shortcodes](https://gohugo.io/content-management/shortcodes/) to add JavaScript to my website to make it *less* boring.

I wrote a Goodreads [quote scraper](/projects/quote_scraper) so a natural idea was to print random quotes on the homepage.


# How to do it

I found [this](https://cborchers.com/2020/12/08/how-to-include-javascript-in-your-hugo-website-or-blog-for-cool-applications/) tutorial which gives a good example for how to add JavaScript to Hugo sites. In short, the steps are:

1. Write the JavaScript you want to add and save it to `static/js/`
2. Write an accompanying shortcode and save it to `layouts/shortcodes/`
3. Add it to your `.md` files

## JavaScript

Here is the script I wrote to select a random quote and format it:


 code file="/static/js/quotes.js" language="js" %}}

### Typing Animation

I added the typing animation using [typed.js](https://github.com/mattboldt/typed.js/).


## HTML/Hugo Shortcode

This is used via `{{ < random_quote > }}` in my `content/_index.md` file for the homepage:

// code file="/layouts/shortcodes/random_quote.html" language="html"


## Filtering Quotes

Some of the quotes on Goodreads are *really* long, so I filtered out for the short ones using `awk`:

```bash
$ awk '{if (length($0) < 100) print }' inspirational_quotes.csv >> quotes.csv
```
