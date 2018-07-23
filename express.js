if (process.env.NODE_ENV === 'production') require('newrelic');
const express = require('express');
const compression = require('compression'); // gzip

const app = express();
app.use(compression());
const portNumber = process.env.PORT || 3000;
const sourceDir = 'dist';

app.use(express.static(sourceDir));

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
