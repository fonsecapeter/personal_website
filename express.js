if (process.env.NODE_ENV === 'production') require('newrelic');
const express = require('express');
const compression = require('compression'); // gzip
const path = require('path');

const app = express();
const portNumber = process.env.PORT || 3000;
const prerenderToken = process.env.PRERENDER_TOKEN || "not_a_real_token";
const sourceDir = 'dist';

app.use(compression());
app.use(express.static(sourceDir));
app.use(
  // so crawlers can find helmet meta tags
  require("prerender-node").set("prerenderToken", [prerenderToken])
);

app.get('/_status', (req, res) => {
  res.send('Status: OK');
});

app.get('/wakemydyno.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'wakemydyno.txt'));
});

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
