module.exports = {};
const pkgcloud = require('pkgcloud');

module.exports.swift = pkgcloud.storage.createClient({
  provider: 'openstack',
  username: 'username',
  password: 'passw',
  tenantId: 'ID', //ID of the App's tenant
  region: 'regionOne', //Cloud Region
  authUrl: 'http://127.0.0.1:5000/', //IP Address of the Authentication Service Server
  basePath: 'v3.0/tokens' //standard path for authentication service
});
