const releases = require('./releases.json');

const variables = {
  releaseTitle: 'v3.14.4',
  prodname: 'Calico Enterprise',
  prodnamedash: 'calico-enterprise',
  version: 'v3.14',
  baseUrl: '/calico-enterprise/3.14',
  filesUrl: 'https://downloads.tigera.io/ee/v3.14.4',
  tutorialFilesURL: 'https://unified-docs.tigera.io/files',
  prodnameWindows: 'Calico Enterprise for Windows',
  downloadsurl: 'https://downloads.tigera.io',
  nodecontainer: 'cnx-node',
  noderunning: 'calico-node',
  rootDirWindows: 'C:\\TigeraCalico',
  registry: 'quay.io/',
  chart_version_name: 'v3.14.4-0',
  tigeraOperator: releases[0]['tigera-operator'],
  manifestsUrl: 'https://docs.tigera.io',
  releases,
  imageNames: {
    node: 'tigera/cnx-node',
    kubeControllers: 'tigera/kube-controllers',
  },
};

module.exports = variables;
