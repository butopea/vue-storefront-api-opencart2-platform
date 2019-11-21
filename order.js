import AbstractOrderProxy from '../abstract/order'
import { multiStoreConfig } from './util'

class OrderProxy extends AbstractOrderProxy {
  constructor (config, req) {
    const OpenCart2Client = require('./opencart-vsbridge-client').OpenCart2Client;
    super(config, req)
    this.api = OpenCart2Client(multiStoreConfig(config.opencart2.api, req));
  }

  create (orderData) {
    return this.api.order.create(orderData);
  }
}

module.exports = OrderProxy
