#  Bluegenes Tool Test

This tool is for internal bluegenes tool API development/debug/testing use. **It doesn't do anything useful as a tool!**

Feel free to add things to this tool when you find yourself manually creating tools to test specific aspects of the tool API.

### To set up locally for development

1. Clone the repo
2. `cd bluegenes-tool-test` and then `npm install` to install dependencies.

All of the editable source files for css and js are in `src`. To bundle for prod, run the following commands:

#### CSS

Assuming [less](http://lesscss.org/) is installed globally:

```
npm run less
```

#### JS

Assuming [webpack](https://webpack.js.org/) is installed globally:

##### Single build:
```
npm run build
```

##### Developing:
Run each of these commands in separate terminals:

To rebuild your js every time you save:

```bash
npm run dev
```

To serve your page at [http://localhost:3456](http://localhost:3456):
```bash
npm run server
```
