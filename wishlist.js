import AbstractWishlistProxy from '../abstract/wishlist';
import { multiStoreConfig } from './util';

class WishlistProxy extends AbstractWishlistProxy {
  constructor (config, req){
    const OpenCart2Client = require('./opencart-vsbridge-client').OpenCart2Client;
    super(config, req)
    this.api = OpenCart2Client(multiStoreConfig(config.opencart2.api, req));
  }
  pull (customerToken) {
    return this.api.wishlist.pull(customerToken);
  }
  update (customerToken, wishListItem) {
    return this.api.wishlist.update(customerToken, wishListItem);
  }
  delete (customerToken, wishListItem) {
    return this.api.wishlist.delete(customerToken, wishListItem);
  }
}

module.exports = WishlistProxy;
