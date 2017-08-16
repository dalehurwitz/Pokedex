*woops, this stopped working 😞. The API might have changed. *

# Pokedex

A basic Pokedex built with React & Redux using the PokeApi.

[Demo](http://play.dalehurwitz.com/pokedex)

### Install Packages

```
npm install
```

### Download Pokemon images

1) Download Wget [here](https://www.gnu.org/software/wget/) or [here (.exe)](http://gnuwin32.sourceforge.net/packages/wget.htm). Mac users - God speed

2) Run `dl-images` in project root

### Run in dev server with watchers
````
gulp
````

### build dev
```
gulp build
```

### build prod
```
gulp build:prod
```

## TODO
* Complete base UI including design and loaders
* Add evolution tree
* Add animated gradient bg
* Add clientside caching
* Automate image compression
* Replace gulp for webpack
