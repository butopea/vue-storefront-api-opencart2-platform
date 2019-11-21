module.exports = function (restClient) {
  let module = {};
  const urlPrefix = 'product/';
  let url = urlPrefix;
  function getResponse(data){
    if(data.code === 200){
      return data.result;
    }
    return false;
  }

  module.renderList = (skus, currencyCode, storeId = 0) => {
    url += `render-list?skus=${skus}&currencyCode=${currencyCode}&storeId=${storeId}`;
    return restClient.get(url).then((data)=> {
      return getResponse(data);
    });
  };

  module.list = (skus) => {
    url += `list?skus=${skus}`;
    return restClient.get(url).then((data)=> {
      return getResponse(data);
    });
  };

  return module;
};
