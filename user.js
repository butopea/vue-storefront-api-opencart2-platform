import AbstractUserProxy from '../abstract/user'
import { multiStoreConfig } from './util'

class UserProxy extends AbstractUserProxy {
  constructor (config, req){
    const OpenCart2Client = require('./opencart-vsbridge-client').OpenCart2Client;
    super(config, req)
    this.api = OpenCart2Client(multiStoreConfig(config.opencart2.api, req));
  }
  register (userData) {
    return this.api.user.create(userData)
  }
  login (userData) {
    return this.api.user.login(userData)
  }
  me (customerToken) {
    return this.api.user.me(customerToken)
  }
  getWishlistItems (customerToken) {
    return this.api.user.getWishlistItems(customerToken)
  }
  addWishlistItem (productId, customerToken) {
    return this.api.user.addWishlistItem(productId, customerToken)
  }
  deleteWishlistItem (productId, customerToken) {
    return this.api.user.deleteWishlistItem(productId, customerToken)
  }
  orderHistory (customerToken, page, pageSize) {
    return this.api.user.orderHistory(customerToken, page, pageSize)
  }
  creditValue (customerToken) {
    return this.api.user.creditValue(customerToken)
  }
  refillCredit (customerToken, creditCode) {
    return this.api.user.refillCredit(customerToken, creditCode)
  }
  resetPassword (emailData) {
    return this.api.user.resetPassword(emailData)
  }
  update (userData) {
    return this.api.user.update(userData)
  }
  changePassword (passwordData) {
    return this.api.user.changePassword(passwordData)
  }
}

module.exports = UserProxy
