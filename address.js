import AbstractAddressProxy from '../abstract/address'
import {multiStoreConfig} from "./util";

class AddressProxy extends AbstractAddressProxy {
  constructor (config, req){
    const OpenCart2Client = require('./opencart-vsbridge-client').OpenCart2Client;
    super(config, req)
    this.api = OpenCart2Client(multiStoreConfig(config.opencart2.api, req));
  }
  list (customerToken) {
    return this.api.address.list(customerToken)
  }
  update (customerToken, addressData) {
    return this.api.address.update(customerToken, addressData);
  }
  get (customerToken, addressId) {
    return this.api.address.get(customerToken, addressId)
  }
  delete (customerToken, addressData) {
    return this.api.address.delete(customerToken, addressData)
  }
}

module.exports = AddressProxy
