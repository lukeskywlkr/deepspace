module.exports = {};
const pkgcloud = require('pkgcloud');

module.exports.swift = pkgcloud.storage.createClient({
  provider: 'openstack',
  username: 'Sle_demo',
  password: 'passw',
  tenantId: 'ID', //ID of the App's tenant
  region: 'regionOne', //Cloud Region
  authUrl: 'http://localhost:2000/', //IP Address of the Authentication Service Server
  basePath: 'v3.0/tokens' //standard path for authentication service
});
