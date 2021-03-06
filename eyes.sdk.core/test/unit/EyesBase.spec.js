'use strict';

const assert = require('assert');

const { EyesBase } = require('../../index');

describe('EyesBase', () => {
  /** @type {EyesBase} */ let eyes;

  before(() => {
    eyes = new EyesBase();
  });

  describe('setBatch()', () => {
    it('should create an default batch', () => {
      const batch = eyes.getBatch();
      assert.strictEqual(typeof batch.getId(), 'string');
      assert.strictEqual(typeof batch.getName(), 'undefined');
      assert.strictEqual(typeof batch.getStartedAt(), 'object');
    });

    it('should create batch with name', () => {
      eyes.setBatch('batch name');

      const batch = eyes.getBatch();
      assert.strictEqual(typeof batch.getId(), 'string');
      assert.strictEqual(batch.getName(), 'batch name');
      assert.strictEqual(typeof batch.getStartedAt(), 'object');
    });

    it('should create batch with name, id', () => {
      eyes.setBatch('batch name', 'fake batch id');

      const batch = eyes.getBatch();
      assert.strictEqual(batch.getId(), 'fake batch id');
      assert.strictEqual(batch.getName(), 'batch name');
      assert.strictEqual(typeof batch.getStartedAt(), 'object');
    });

    it('should create batch with name, id, time', () => {
      const time = new Date();
      time.setMilliseconds(0);

      eyes.setBatch('batch name2', 'fake batch id2', time);

      const batch = eyes.getBatch();
      assert.strictEqual(batch.getId(), 'fake batch id2');
      assert.strictEqual(batch.getName(), 'batch name2');
      assert.equal(batch.getStartedAt().getTime(), time.getTime());
    });

    it('should create batch from BatchInfo', () => {
      const defaultBatch = eyes.getBatch();

      eyes.setBatch('batch name', 'fake batch id');

      const batch = eyes.getBatch();
      assert.strictEqual(batch.getId(), 'fake batch id');
      assert.strictEqual(batch.getName(), 'batch name');
      assert.notDeepEqual(batch, defaultBatch);
      assert.deepEqual(eyes.getBatch(), batch);

      eyes.setBatch(defaultBatch);
      assert.deepEqual(eyes.getBatch(), defaultBatch);
    });

    it('should create batch by default using values from env', () => {
      process.env.APPLITOOLS_BATCH_ID = 'fake id in env';
      process.env.APPLITOOLS_BATCH_NAME = 'fake batch name in env';

      const batch = eyes.getBatch();
      assert.strictEqual(batch.getId(), 'fake id in env');
      assert.strictEqual(batch.getName(), 'fake batch name in env');
    });

    afterEach(() => {
      eyes._batch = undefined;
    });
  });
});
