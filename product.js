import AbstractProductProxy from '../abstract/product'
import { multiStoreConfig } from './util'

class ProductProxy extends AbstractProductProxy {
  constructor (config, req){
    const OpenCart2Client = require('./opencart-vsbridge-client').OpenCart2Client;
    super(config, req)
    this.api = OpenCart2Client(multiStoreConfig(config.opencart2.api, req));
  }

  renderList (skus, currencyCode, storeId = 0) {
    return this.api.product.renderList(skus, currencyCode, storeId).then((result) => {
      return result
    })
  }

  list (skus) {
    return this.api.product.list(skus).then((result) => {
      return result
    })
  }
}

module.exports = ProductProxy
