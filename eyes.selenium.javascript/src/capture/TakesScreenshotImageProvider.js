'use strict';

const {ImageProvider, MutableImage} = require('eyes.sdk');

/**
 * An image provider based on WebDriver's interface.
 */
class TakesScreenshotImageProvider extends ImageProvider {

    /**
     * @param {Logger} logger A Logger instance.
     * @param {EyesWebDriver} driver
     * @param {PromiseFactory} promiseFactory
     */
    constructor(logger, driver, promiseFactory) {
        super();

        this._logger = logger;
        this._executor = driver;
        this._promiseFactory = promiseFactory;
    }

    /**
     * @override
     * @return {Promise.<MutableImage>}
     */
    getImage() {
        this._logger.verbose("Getting screenshot as base64...");

        const that = this;
        return this._executor.takeScreenshot().then(screenshot64 => {
            that._logger.verbose("Done getting base64! Creating MutableImage...");
            return new MutableImage(screenshot64, that._promiseFactory);
        });
    }
}

module.exports = TakesScreenshotImageProvider;