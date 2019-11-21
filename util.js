import config from 'config'
/**
 * Adjust the config provided to the current store selected via request params
 * @param Object config configuration
 * @param Express request req
 * TODO: Implement multistore in OpenCart VS Bridge
 */
export function multiStoreConfig(apiConfig, req) {
  let confCopy = Object.assign({}, apiConfig)
  let storeCode = ''

  if (req.headers['x-vs-store-code']) {
    storeCode = req.headers['x-vs-store']
  }
  if (req.query.storeCode) {
    storeCode = req.query.storeCode
  }

  if (storeCode && config.availableStores.indexOf(storeCode) >= 0)
  {
    if (config.opencart2['api_' + storeCode]) {
      confCopy = Object.assign({}, config.opencart2['api_' + storeCode])
    } else {
      if (new RegExp("(/" + config.availableStores.join("|") + "/)", "gm").exec(confCopy.url) === null) {
        confCopy.url = (confCopy.url).replace(/(vsbridge)/gm, `${storeCode}/$1`);
      }
    }
  } else {
    if (storeCode) {
      console.error('Unavailable store code', storeCode)
    }
  }

  return confCopy
}
