require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()


var appData = require('../mockData.json');
var list = appData.devices;
var communities = appData.communities;
var netWork = appData.netWork;

var apiRoutes = express.Router();

apiRoutes.get('/devices', function (req, res) {
  let type = req.query.type;
  let size = req.query.size;
  let current = req.query.current;
  let total;
  let begin = ((current-1)*size);
  let end = (current*size); // <end
  let data = [];
  let pageDate = [];
  if(type == 0){
    data = list;
  }else{
    list.map(function (item) {
      if(item.type == type)
        data.push(item);
    });
  }
  total = data.length;
  end > total ? end = total : end;
  while(begin < end){
    pageDate.push(data[begin]);
    begin++;
  }

  res.json({
    errno: 0,
    data: pageDate,
    type: type,
    size: size,
    current: current,
    total: total
  });
});
apiRoutes.get('/communities', function (req, res) {
  res.json({
    errno: 0,
    data: communities
  });
});
apiRoutes.get('/netWork', function (req, res) {
  res.json({
    errno: 0,
    data: netWork
  });
});


app.use('/api', apiRoutes);

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
