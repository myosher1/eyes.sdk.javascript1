'use strict';

const GeneralUtils = require('../GeneralUtils');
const ArgumentGuard = require('../ArgumentGuard');

/**
 * Encapsulates data required to start session using the Session API.
 */
class SessionStartInfo {

    /**
     * @param {String} agentId
     * @param {SessionType} sessionType
     * @param {String} appIdOrName
     * @param {String} verId
     * @param {String} scenarioIdOrName
     * @param {BatchInfo} batchInfo
     * @param {String} baselineEnvName
     * @param {String} environmentName
     * @param {AppEnvironment} environment
     * @param {ImageMatchSettings} defaultMatchSettings
     * @param {String} branchName
     * @param {String} parentBranchName
     * @param {PropertyData[]} properties
     */
    constructor(agentId, sessionType, appIdOrName, verId, scenarioIdOrName, batchInfo, baselineEnvName, environmentName,
                environment, defaultMatchSettings, branchName, parentBranchName, properties) {
        ArgumentGuard.notNullOrEmpty(agentId, "agentId");
        ArgumentGuard.notNullOrEmpty(appIdOrName, "appIdOrName");
        ArgumentGuard.notNullOrEmpty(scenarioIdOrName, "scenarioIdOrName");
        ArgumentGuard.notNull(batchInfo, "batchInfo");
        ArgumentGuard.notNull(environment, "environment");
        ArgumentGuard.notNull(defaultMatchSettings, "defaultMatchSettings");

        this._agentId = agentId;
        this._sessionType = sessionType;
        this._appIdOrName = appIdOrName;
        this._verId = verId;
        this._scenarioIdOrName = scenarioIdOrName;
        this._batchInfo = batchInfo;
        this._baselineEnvName = baselineEnvName;
        this._environmentName = environmentName;
        this._environment = environment;
        this._defaultMatchSettings = defaultMatchSettings;
        this._branchName = branchName;
        this._parentBranchName = parentBranchName;
        this._properties = properties;
    }

    // noinspection JSUnusedGlobalSymbols
    /** @return {String} */
    getAgentId() {
        return this._agentId;
    }

    // noinspection JSUnusedGlobalSymbols
    /** @return {SessionType} */
    getSessionType() {
        return this._sessionType;
    }

    // noinspection JSUnusedGlobalSymbols
    /** @return {String} */
    getAppIdOrName() {
        return this._appIdOrName;
    }

    // noinspection JSUnusedGlobalSymbols
    /** @return {String} */
    getVerId() {
        return this._verId;
    }

    // noinspection JSUnusedGlobalSymbols
    /** @return {String} */
    getScenarioIdOrName() {
        return this._scenarioIdOrName;
    }

    // noinspection JSUnusedGlobalSymbols
    /** @return {BatchInfo} */
    getBatchInfo() {
        return this._batchInfo;
    }

    // noinspection JSUnusedGlobalSymbols
    /** @return {String} */
    getBaselineEnvName() {
        return this._baselineEnvName;
    }

    // noinspection JSUnusedGlobalSymbols
    /** @return {String} */
    getEnvironmentName() {
        return this._environmentName;
    }

    // noinspection JSUnusedGlobalSymbols
    /** @return {AppEnvironment} */
    getEnvironment() {
        return this._environment;
    }

    // noinspection JSUnusedGlobalSymbols
    /** @return {ImageMatchSettings} */
    getDefaultMatchSettings() {
        return this._defaultMatchSettings;
    }

    // noinspection JSUnusedGlobalSymbols
    /** @return {String} */
    getBranchName() {
        return this._branchName;
    }

    // noinspection JSUnusedGlobalSymbols
    /** @return {String} */
    getParentBranchName() {
        return this._parentBranchName;
    }

    // noinspection JSUnusedGlobalSymbols
    /** @return {PropertyData[]} */
    getProperties() {
        return this._properties;
    }

    toJSON() {
        return {
            agentId: this._agentId,
            sessionType: this._sessionType,
            appIdOrName: this._appIdOrName,
            verId: this._verId,
            scenarioIdOrName: this._scenarioIdOrName,
            batchInfo: this._batchInfo,
            baselineEnvName: this._baselineEnvName,
            environmentName: this._environmentName,
            environment: this._environment,
            defaultMatchSettings: this._defaultMatchSettings,
            branchName: this._branchName,
            parentBranchName: this._parentBranchName,
            properties: this._properties
        };
    }

    /** @override */
    toString() {
        return `SessionStartInfo { ${GeneralUtils.toJson(this)} }`;
    }
}

module.exports = SessionStartInfo;