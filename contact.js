import AbstractContactProxy from '../abstract/contact';
import { multiStoreConfig } from './util';

class ContactProxy extends AbstractContactProxy {
  constructor (config, req){
    const OpenCart2Client = require('./opencart-vsbridge-client').OpenCart2Client;
    super(config, req)
    this.api = OpenCart2Client(multiStoreConfig(config.opencart2.api, req));
  }
  submit (form) {
    return this.api.contact.submit(form);
  }
}

module.exports = ContactProxy;
