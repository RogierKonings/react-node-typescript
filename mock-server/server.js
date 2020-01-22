const express = require('express');
const ngApiMock = require('ng-apimock')();
const path = require('path');
const cors = require('cors');

const mocksSourceDirectory = path.resolve(`${__dirname}/mocks`);
const mocksOutputDirectory = path.resolve(`${__dirname}/../dist/ngApimock`);

const ngApiMockConfig = {
  outputDir: mocksOutputDirectory,
  src: mocksSourceDirectory
}

const port = 3000;

const app = express();

ngApiMock.run(ngApiMockConfig);
ngApiMock.watch(ngApiMockConfig.src);

app
  .use(cors())
  .use('/mocking', express.static(mocksOutputDirectory))
  .use(require('ng-apimock/lib/utils').ngApimockRequest)

app.listen(port, 'localhost', () => {
  console.log(`Server running at port: ${port}`);
})
