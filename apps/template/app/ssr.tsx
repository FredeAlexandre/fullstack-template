import {
    createStartHandler,
    defaultStreamHandler,
  } from '@tanstack/start/server'
  import { getRouterManifest } from '@tanstack/start/router-manifest'
  
  import { createRouter } from './router'
  
  export default createStartHandler({
    createRouter,
    getRouterManifest,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  })(defaultStreamHandler)