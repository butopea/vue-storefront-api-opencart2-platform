import AbstractNewsletterProxy from '../abstract/newsletter';
import { multiStoreConfig } from './util';

class NewsletterProxy extends AbstractNewsletterProxy {
  constructor (config, req){
    const OpenCart2Client = require('./opencart-vsbridge-client').OpenCart2Client;
    super(config, req)
    this.api = OpenCart2Client(multiStoreConfig(config.opencart2.api, req));
  }
  subscribe (emailAddress) {
    return this.api.newsletter.subscribe(emailAddress);
  }
  unsubscribe (customerToken) {
    return this.api.newsletter.unsubscribe(customerToken);
  }
}

module.exports = NewsletterProxy;
