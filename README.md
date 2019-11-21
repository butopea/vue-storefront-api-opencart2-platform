# OpenCart2 Vue Storefront API Platform

This package is a Vue Storefront API platform that enables Vue Storefront to communicate with the OpenCart by acting as a proxy to the PHP OpenCart VS Bridge on your server.

Based on https://github.com/DivanteLtd/magento1-vsbridge-client and modified to work with OpenCart.

This module is built for the [Vue Storefront - first Progressive Web App for eCommerce](https://github.com/DivanteLtd/vue-storefront).

## Installation

* Add the repository contents into the `Vue Storefront API` / `src` / `platform` / `opencart2` by importing it as a git submodule:

```shell script
git submodule add git@github.com:butopea/vue-storefront-api-opencart2-platform.git src/platform/opencart2
```

* Add the following to your Vue Storefront API config file (`config` / `local.json`)
```json
...
"opencart2": {
    "imgUrl": "http://YOUR_OPENCART_SERVER/image",
    "assetPath": "",
    "httpUserName": "",
    "httpUserPassword": "",
    "baseUrl": "http://YOUR_OPENCART_SERVER",
    "api": {
      "url": "http://YOUR_OPENCART_SERVER/vsbridge",
      "username": "OPENCART_API_NAME",
      "password": "OPENCART_API_KEY",
      "secret": "OPENCART_VSBRIDGE_EXTENSION_SECRET"
    }
  }
...
```
* Set the `platform` option in your config to `opencart2`

```json
...
"platform": "opencart2",
...
```
# Requirements
Requires the [Vue Storefront Connector Extension for OpenCart](https://github.com/butopea/vue-storefront-opencart-vsbridge) to function.
