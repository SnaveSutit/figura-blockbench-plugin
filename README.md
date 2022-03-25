# figura-blockbench-plugin


## Setting up the development enviornment
Once you've cloned the repo to your local machine, Follow these steps to get the dev env setup.
- Open a terminal in the repo folder.
- Run `yarn install`
- Run `yarn dev`
- Develop! `yarn dev` will watch for file changes and automatically re-build the packaged plugin.
The `yarn dev` command will build a development version of the plugin and package it as `dist/figura_blockbench.js`. You can load this file as a plugin in blockbench.

### Building for production
Running `yarn build` will produce a minimized, compressed, and production safe version of the plugin.