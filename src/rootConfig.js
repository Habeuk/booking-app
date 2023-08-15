import RequestBasicAuthen from 'drupal-vuejs/src/App/BasicAuthentification/RequestBasicAuthen.js'
export default {
  ...RequestBasicAuthen,
  languageId:
    window.drupalSettings &&
    window.drupalSettings.path &&
    window.drupalSettings.path.currentLanguage
      ? window.drupalSettings.path.currentLanguage
      : null,
  TestDomain: 'http://d9-test.kksa',
  debug: true
}
