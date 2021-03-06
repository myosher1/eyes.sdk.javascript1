'use strict';

const { GeneralUtils } = require('./utils/GeneralUtils');

/**
 * Argument validation utilities.
 */
class ArgumentGuard {
  // noinspection JSUnusedGlobalSymbols
  /**
   * Fails if the input parameter equals the input value.
   *
   * @param {object} param The input parameter.
   * @param {object} value The input value.
   * @param {string} paramName The input parameter name.
   */
  static notEqual(param, value, paramName) {
    if (param === value) {
      throw new Error(`IllegalArgument: ${paramName} === ${value}`);
    }
  }

  // noinspection JSUnusedGlobalSymbols
  /**
   * Fails if the input parameter contains some special characters or punctuation
   *
   * @param {object} param The input parameter.
   * @param {string} paramName The input parameter name.
   */
  static alphanumeric(param, paramName) {
    if (!param.match(/^[a-z0-9]+$/i)) {
      throw new Error(`IllegalArgument: ${paramName} is not alphanumeric`);
    }
  }

  // noinspection JSUnusedGlobalSymbols
  /**
   * Fails if the input parameter is null.
   *
   * @param {object} param The input parameter.
   * @param {string} paramName The input parameter name.
   */
  static notNull(param, paramName) {
    if (param === null || param === undefined) {
      throw new Error(`IllegalArgument: ${paramName} is null or undefined`);
    }
  }

  // noinspection JSUnusedGlobalSymbols
  /**
   * Fails if the input parameter is not null.
   *
   * @param {object} param The input parameter.
   * @param {string} paramName The input parameter name.
   */
  static isNull(param, paramName) {
    if (param !== null && param !== undefined) {
      throw new Error(`IllegalArgument: ${paramName} is not null or undefined`);
    }
  }

  // noinspection JSUnusedGlobalSymbols
  /**
   * Fails if the input parameter string is null or empty.
   *
   * @param {object} param The input parameter.
   * @param {string} paramName The input parameter name.
   */
  static notNullOrEmpty(param, paramName) {
    if (!param) {
      throw new Error(`IllegalArgument: ${paramName} is null or empty`);
    }
  }

  // noinspection JSUnusedGlobalSymbols
  /**
   * Fails if the input integer parameter is negative.
   *
   * @param {number} param The input parameter.
   * @param {string} paramName The input parameter name.
   * @param {boolean} isInteger Whether or not, the number should be en integer
   */
  static greaterThanOrEqualToZero(param, paramName, isInteger = false) {
    if (isInteger) {
      ArgumentGuard.isInteger(param, paramName);
    }

    if (param < 0) {
      throw new Error(`IllegalArgument: ${paramName} < 0`);
    }
  }

  // noinspection JSUnusedGlobalSymbols
  /**
   * Fails if the input integer parameter is smaller than 1.
   *
   * @param {number} param The input parameter.
   * @param {string} paramName The input parameter name.
   * @param {boolean} isInteger Whether or not, the number should be en integer
   */
  static greaterThanZero(param, paramName, isInteger = false) {
    if (isInteger) {
      ArgumentGuard.isInteger(param, paramName);
    }

    if (param <= 0) {
      throw new Error(`IllegalArgument: ${paramName} < 1`);
    }
  }

  // noinspection JSUnusedGlobalSymbols
  /**
   * Fails if the input integer parameter is equal to 0.
   * @param param The input parameter.
   * @param paramName The input parameter name.
   * @param {boolean} isInteger Whether or not, the number should be en integer
   */
  static notZero(param, paramName, isInteger = false) {
    if (isInteger) {
      ArgumentGuard.isInteger(param, paramName);
    }

    if (param === 0) {
      throw new Error(`IllegalArgument: ${paramName} === 0`);
    }
  }

  // noinspection JSUnusedGlobalSymbols
  /**
   * Fails if the input number is not integer
   *
   * @param {number} param The input parameter.
   * @param {string} paramName The input parameter name.
   */
  static isInteger(param, paramName) {
    if (!Number.isInteger(param)) {
      throw new Error(`IllegalArgument: ${paramName} is not integer`);
    }
  }

  // noinspection JSUnusedGlobalSymbols
  /**
   * Fails if param is not a string.
   *
   * @param {object} param The input parameter.
   */
  static isString(param) {
    if (!GeneralUtils.isString(param)) {
      throw new Error(`IllegalType: \`${param}\` is not a string`);
    }
  }

  // noinspection JSUnusedGlobalSymbols
  /**
   * Fails if param is not a buffer.
   *
   * @param {object} param The input parameter.
   */
  static isBuffer(param) {
    if (!GeneralUtils.isBuffer(param)) {
      throw new Error(`IllegalType: \`${param}\` is not a buffer`);
    }
  }

  // noinspection JSUnusedGlobalSymbols
  /**
   * Fails if param is not a base64 string.
   *
   * @param {object} param The input parameter.
   */
  static isBase64(param) {
    if (!GeneralUtils.isBase64(param)) {
      throw new Error(`IllegalType: \`${param}\` is not a base64 string`);
    }
  }

  // noinspection JSUnusedGlobalSymbols
  /**
   * Fails if isValid is false.
   *
   * @param {boolean} isValid Whether the current state is valid.
   * @param {string} errMsg A description of the error.
   */
  static isValidState(isValid, errMsg) {
    if (!isValid) {
      throw new Error(`IllegalState: ${errMsg}`);
    }
  }

  // noinspection JSUnusedGlobalSymbols
  /**
   * Fails if isValid is false.
   *
   * @param {object} param The input parameter.
   * @param {object} type The expected param type
   */
  static isValidType(param, type) {
    if (!(param instanceof type)) {
      throw new Error(`IllegalType: ${param} is not instance of ${type.constructor.name}`);
    }
  }

  // noinspection JSUnusedGlobalSymbols
  /**
   * Fails if isValid is false.
   *
   * @param {*} value The input value.
   * @param {object} enumObject The required enum object
   */
  static isValidEnumValue(value, enumObject) {
    if (!Object.prototype.hasOwnProperty.call(enumObject, value)) {
      throw new Error(`IllegalType: ${value} is not member of ${enumObject}`);
    }
  }

  // noinspection JSUnusedGlobalSymbols
  /**
   * Check if object contains all required properties
   *
   * @param {object} object The input object.
   * @param {string|string[]} properties The array of properties to test
   * @param {string} paramName The input parameter name.
   */
  static hasProperties(object, properties, paramName) {
    if (!Array.isArray(properties)) {
      properties = [properties];
    }

    properties.forEach(property => {
      if (!Object.prototype.hasOwnProperty.call(object, property)) {
        throw new Error(`IllegalArgument: ${paramName} don't have '${property}' property`);
      }
    });
  }
}

exports.ArgumentGuard = ArgumentGuard;
