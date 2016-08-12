# braille-html-app

# Pre-requisites:
* [node.js](https://nodejs.org/en/)
* A C++ compiler for node-gyp, look at [Visual C++ Build Tools](http://landinghub.visualstudio.com/visual-cpp-build-tools) or if the computer already has Visual Studio, it should be fine.
* [nw.js SDK version](http://nwjs.io/)

# Getting it up and running:
Open a command prompt or terminal and `cd` into this directory. Then run `npm install` (make sure you have node.js and the C++ build tools).

After everything is installed, run `npm build`. After that's done, the code required for nw.js should be generated and available in the `dist` folder. Copy `package.json` in this directory into the dist directory.

Find where nw.js has been downloaded, extract it if necessary. Drag the contents of the extracted nw.js folder into the `dist` folder, then run it.

# Notes
Make sure you're connected to the same Wi-Fi network as the clients.