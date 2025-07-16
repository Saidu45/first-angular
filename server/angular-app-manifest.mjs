
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/first-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/first-angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1078, hash: '6581155da218ec43fba2de0b8f969480e7519501c35c7f2829fcd32145465731', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 966, hash: 'ce2be965eae907a18bcb598c4fab762aa254ba231caf51aec10548bf4653434a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4528, hash: 'a621fe1204b94708c426fd8bce1010a31bc4c7f438807d4b3453bd79b5cddd2b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-M64XVWSM.css': {size: 635, hash: '3HFIMHcF+wE', text: () => import('./assets-chunks/styles-M64XVWSM_css.mjs').then(m => m.default)}
  },
};
