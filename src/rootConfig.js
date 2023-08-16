import RequestBasicAuthen from 'drupal-vuejs/src/App/BasicAuthentification/RequestBasicAuthen.js'
export default {
  ...RequestBasicAuthen,
  languageId:
    window.drupalSettings &&
      window.drupalSettings.path &&
      window.drupalSettings.path.pathPrefix
      ? window.drupalSettings.path.pathPrefix
      : null,
  TestDomain: 'http://timer.vst',
  debug: true
}
