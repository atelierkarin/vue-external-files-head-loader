# External Files Head Loader

A VueJS plugin for loading external JS/CSS inside VueJS environment. I created this since some of my projects need to load external scripts inside the VueJS script.

Demo: [Demo](https://codesandbox.io/s/demo-vue-external-files-head-loader-x1tdh?file=/src/App.vue)

## Install

```
npm install --save vue-external-files-head-loader
```

### Include the plugin in main.js

Add the following in `main.js`

```javascript
import HeadLoader from "vue-external-files-head-loader";

Vue.use(HeadLoader);
```

### Define the resources files (external files to be loaded)

```javascript
const resources = [
  {
    host: "https://cdnjs.cloudflare.com/ajax/libs/",
    jsLibrary: [
      "jquery/3.5.1/jquery.js",
      "tether/1.4.7/js/tether.js",
      "bootstrap-material-design/4.0.2/bootstrap-material-design.iife.js",
    ],
    cssLibrary: [
      "bootstrap-material-design/4.0.2/bootstrap-material-design.css",
      "tether/1.4.7/css/tether.min.css",
    ],
  },
];
```

Then call the following to load:

```javascript
this.$head.load(resources).then(() => {
  // Load Successfully
});
```
