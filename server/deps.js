var deps = deps || {};

deps.fs = require('fs');
deps.path = require('path');
deps.express = require('express')();
deps.http = require('http').Server(deps.express);

module.exports = deps;