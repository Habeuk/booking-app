import RequestBasicAuthen from 'drupal-vuejs/src/App/BasicAuthentification/RequestBasicAuthen.js'
export default {
  ...RequestBasicAuthen,
  languageId:
    window.drupalSettings && window.drupalSettings.path && window.drupalSettings.path.pathPrefix
      ? window.drupalSettings.path.pathPrefix.replaceAll('/', '')
      : null,
  debug: false,
  TestDomain:
    window.location.hostname === 'localhost' ? 'http://auto-ecole687.wb-horizon.kksa' : null
}
