'use strict';

require('chromedriver');
const { Builder, By } = require('selenium-webdriver');
const { ConsoleLogHandler, RectangleSize } = require('@applitools/eyes.sdk.core');
const { Eyes, Target } = require('../../index');

let /** @type {WebDriver} */ driver, /** @type {Eyes} */ eyes;
describe('DynamicPagesTest', function () {
  this.timeout(5 * 60 * 1000);

  before(function () {
    driver = new Builder().forBrowser('chrome').build();

    eyes = new Eyes();
    eyes.setApiKey(process.env.APPLITOOLS_API_KEY);
    eyes.setLogHandler(new ConsoleLogHandler(true));
    eyes.setSendDom(true);
    // eyes.setProxy('http://localhost:8888');
  });

  beforeEach(async function () {
    driver = await eyes.open(driver, this.test.parent.title, this.currentTest.title, new RectangleSize(1200, 800));
  });

  it('TestNbcNews', async function () {
    await driver.get('https://www.nbcnews.com/');
    await eyes.check('NBC News Test', Target.window().fully().sendDom());
    await eyes.close();
  });

  it('TestEbay', async function () {
    await driver.get('https://www.ebay.com/');
    await eyes.check('ebay Test', Target.window().fully().sendDom());
    await await driver.findElement(By.linkText('Electronics')).click();
    await eyes.check('ebay Test - Electroincs', Target.window().fully().sendDom());
    await await driver.findElement(By.linkText('Smart Home')).click();
    await eyes.check('ebay Test - Electroincs > Smart Home', Target.window().fully().sendDom());
    await eyes.close();
  });

  it('TestAliExpress', async function () {
    await driver.get('https://www.aliexpress.com/');
    await eyes.check('AliExpress Test', Target.window().fully().sendDom());
    await eyes.close();
  });

  it('TestBestBuy', async function () {
    await driver.get('https://www.bestbuy.com/site/apple-macbook-pro-13-display-intel-core-i5-8-gb-memory-256gb-flash-storage-silver/6936477.p?skuId=6936477');
    await await driver.findElement(By.css('.us-link')).click();
    await eyes.check('BestBuy Test', Target.window().fully().sendDom());
    await eyes.close();
  });

  after(function () {
    return driver.quit().then(() => eyes.abortIfNotClosed());
  });
});
