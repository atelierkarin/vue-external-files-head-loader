<template>
  <div id="app">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-link">Link</button>
    <button type="button" class="btn">
      <code>btn</code> only
    </button>
    <button type="button" class="btn active">
      <code>.active</code>
    </button>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    const resources = [
      {
        host: "https://cdnjs.cloudflare.com/ajax/libs/",
        jsLibrary: [
          "jquery/3.5.1/jquery.js",
          "tether/1.4.7/js/tether.js",
          "bootstrap-material-design/4.0.2/bootstrap-material-design.iife.js"
        ],
        cssLibrary: [
          "bootstrap-material-design/4.0.2/bootstrap-material-design.css",
          "tether/1.4.7/css/tether.min.css"
        ]
      }
    ];

    this.$head.load(resources).then(() => {
      this.isResourceLoaded = true;
    });
  }
};
</script>