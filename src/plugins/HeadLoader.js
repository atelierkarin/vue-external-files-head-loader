class HeadLoaderClass {
  loadScript = (url) => {
    return new Promise((res, rej) => {
      try {
        const script = window.document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = url;
        script.onload = () => {
          res(true);
        };
        window.document.body.appendChild(script);
      } catch (err) {
        rej(err)
      }
    })
  }

  loadStyle = (url) => {
    return new Promise((res, rej) => {
      try {
        const style = window.document.createElement('link');
        style.type = 'text/css';
        style.href = url;
        style.rel = 'stylesheet';
        style.onload = () => {
          res(true);
        };
        const head = window.document.getElementsByTagName('head')[0];
        head.appendChild(style);
      } catch (err) {
        rej(err)
      }
    })
  }

  loadResourceSet = (resourceSet) => {
    const host = resourceSet.host;
    return resourceSet.jsLibrary.reduce(
      (p, jsFile) => {
        return p.then(() => {
          return this.loadScript(host + jsFile);
        });
      },
      Promise.resolve()
    )
  }

  load = (externalResources) => {
    if (externalResources && Array.isArray(externalResources)) {
      const promiseStyles = externalResources.map(resourceSet => {
        const host = resourceSet.host;
        return resourceSet.cssLibrary.map(cssFile => this.loadStyle(host + cssFile));
      })
      const promiseScripts = externalResources.reduce((bp, resourceSet) => {
        return bp.then(() => {
          return this.loadResourceSet(resourceSet);
        })
      }, Promise.resolve())
      return Promise.all([
        promiseScripts,
        ...promiseStyles
      ]);
    } else {
      return Promise.resolve();
    }
  }
}

const HeadLoader = {
  install(Vue, options) {
    const headClass = new HeadLoaderClass();
    Vue.prototype.$head = headClass
  }
}

export default HeadLoader