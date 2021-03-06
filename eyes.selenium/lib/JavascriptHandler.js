'use strict';

/**
 * @interface
 */
class JavascriptHandler {
  /**
   * @param {PromiseFactory} promiseFactory
   */
  constructor(promiseFactory) {
    this._promiseFactory = promiseFactory;
  }

  /**
   * @param {!string} script
   * @param {object...} args
   * @return {Promise<void>}
   */
  handle(script, ...args) {
    return this._promiseFactory.resolve();
  }
}

exports.JavascriptHandler = JavascriptHandler;
