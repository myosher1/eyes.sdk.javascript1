'use strict';

const { SessionEventHandler } = require('./SessionEventHandler');

class SessionEventHandlers extends SessionEventHandler {
  /** @inheritDoc */
  constructor(promiseFactory) {
    super(promiseFactory);

    /** @type {SessionEventHandler[]} */
    this._eventHandlers = [];
  }

  /**
   * @param {SessionEventHandler} handler
   */
  addEventHandler(handler) {
    if (handler === this) { return; }
    this._eventHandlers.push(handler);
  }

  /**
   * @param {SessionEventHandler} handler
   */
  removeEventHandler(handler) {
    if (handler === this) { return; }
    const index = this._eventHandlers.indexOf(handler);
    this._eventHandlers.splice(index, 1);
  }

  clearEventHandlers() {
    this._eventHandlers.length = 0;
  }

  /** @inheritDoc */
  initStarted() {
    return this._promiseFactory.all(this._eventHandlers.map(eventHandler => eventHandler.initStarted()));
  }

  /** @inheritDoc */
  initEnded() {
    return this._promiseFactory.all(this._eventHandlers.map(eventHandler => eventHandler.initEnded()));
  }

  /** @inheritDoc */
  setSizeWillStart(sizeToSet) {
    return this._promiseFactory.all(this._eventHandlers.map(eventHandler => eventHandler.setSizeWillStart(sizeToSet)));
  }

  /** @inheritDoc */
  setSizeEnded() {
    return this._promiseFactory.all(this._eventHandlers.map(eventHandler => eventHandler.setSizeEnded()));
  }

  /** @inheritDoc */
  testStarted(autSessionId) {
    return this._promiseFactory.all(this._eventHandlers.map(eventHandler => eventHandler.testStarted(autSessionId)));
  }

  /** @inheritDoc */
  testEnded(autSessionId, testResults) {
    return this._promiseFactory.all(this._eventHandlers.map(eventHandler => eventHandler.testEnded(autSessionId, testResults)));
  }

  /** @inheritDoc */
  validationWillStart(autSessionId, validationInfo) {
    return this._promiseFactory.all(this._eventHandlers.map(eventHandler => eventHandler.validationWillStart(autSessionId, validationInfo)));
  }

  /** @inheritDoc */
  validationEnded(autSessionId, validationId, validationResult) {
    return this._promiseFactory.all(this._eventHandlers.map(eventHandler => eventHandler.validationEnded(autSessionId, validationId, validationResult)));
  }
}

exports.SessionEventHandlers = SessionEventHandlers;
