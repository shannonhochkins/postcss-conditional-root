[![npm version](https://badge.fury.io/js/postcss-conditional-root.svg)](https://badge.fury.io/js/postcss-conditional-root)
[![npm](https://img.shields.io/npm/dt/postcss-conditional-root.svg)]()
# Postcss only one :root
> A [PostCSS](https://github.com/postcss/postcss) plugin to remove all instances of “:root”  conditionally from a stylesheet.

This plugin is very basic. It removes all instances of `:root` except for the stylesheets that have "postcss-allow-root" inside the file. I built this as I used automatical localised imports for my Webpack scss files, which occured in duplicate references to the :root selector variables.


## Installation

```
npm install --save postcss-conditional-root
```

## Example

### variables.scss

```css
:root {
    --color-blue: blue;
}
```
### file.a.scss

```css
@import "./variables";
.something-1 {
    color: var(--color-blue);
}
```

### file.b.scss

```css
@import "./variables";
.something-2 {
    color: var(--color-blue);
}
```

## styles.scss
The following input file will be the only output to recieve the root variable.

```css
    /* postcss-allow-root */
    @import "./file.a.scss";
    @import "./file.b.scss";

```

### Output

```css
:root {
    color-blue: blue
}
.something-1 {
    color: blue;
    color: var(--color-blue);
}
.something-2 {
    color:blue;
    color: var(--color-blue);
}
```

## Usage

See the [PostCSS documentation](https://github.com/postcss/postcss#usage) for examples on how to use this plugin in different environments.
This plugin takes no options.

## [Changelog](CHANGELOG.md)
