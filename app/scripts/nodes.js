'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    EGEM: "EGEM",
    EGEMCUSTOM: "CUSTOM EGEM",
    ETH: "ETH",
    ETC: "ETC",
    MUS: "MUSIC",
    Ropsten: "ROPSTEN ETH",
    Kovan: "KOVAN ETH",
    Rinkeby: "RINKEBY ETH",
    RSK: "RSK",
    EXP: "EXP",
    UBQ: "UBQ",
    Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
  'egem': {
    'name': 'EGEM',
    'blockExplorerTX': 'https://explorer.egem.io/tx/[[txHash]]',
    'blockExplorerAddr': 'https://explorer.egem.io/addr/[[address]]',
    'type': nodes.nodeTypes.EGEM,
    'eip155': true,
    'chainId': 1987,
    'tokenList': require('./tokens/egemTokens.json'),
    'abiList': require('./abiDefinitions/egemAbi.json'),
    'service': 'egem.io',
    'lib': new nodes.customNode('https://jsonrpc.egem.io/custom', '')
  },
  'egem-custom': {
    'name': 'EGEM Custom',
    'blockExplorerTX': 'https://explorer.egem.io/tx/[[txHash]]',
    'blockExplorerAddr': 'https://explorer.egem.io/addr/[[address]]',
    'type': nodes.nodeTypes.EGEMCUSTOM,
    'eip155': true,
    'chainId': 6464,
    'tokenList': require('./tokens/egemCustomTokens.json'),
    'abiList': require('./abiDefinitions/egemCustomAbi.json'),
    'service': 'custom.egem.io',
    'lib': new nodes.customNode('https://jsonrpc.custom.egem.io/custom', '')
  }
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;