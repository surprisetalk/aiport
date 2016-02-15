'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Config Schema
 */
var ConfigSchema = new Schema({
  // TODO: this object is saved in config-abstract
  // Config model fields   
  // ...
});

mongoose.model('Config', ConfigSchema);
