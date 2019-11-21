import AbstractStockAlertProxy from '../abstract/stock_alert';
import { multiStoreConfig } from './util';

class StockAlertProxy extends AbstractStockAlertProxy {
  constructor (config, req){
    const OpenCart2Client = require('./opencart-vsbridge-client').OpenCart2Client;
    super(config, req)
    this.api = OpenCart2Client(multiStoreConfig(config.opencart2.api, req));
  }
  subscribe (customerToken, productId, emailAddress) {
    return this.api.stockAlert.subscribe(customerToken, productId, emailAddress);
  }
}

module.exports = StockAlertProxy;
