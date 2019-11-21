import AbstractStockProxy from '../abstract/stock';
import { multiStoreConfig } from './util';

class StockProxy extends AbstractStockProxy {
  constructor (config, req){
    const OpenCart2Client = require('./opencart-vsbridge-client').OpenCart2Client;
    super(config, req)
    this.api = OpenCart2Client(multiStoreConfig(config.opencart2.api, req));
  }
  check (data) {
    return this.api.stock.check(data.sku);
  }
}

module.exports = StockProxy;
