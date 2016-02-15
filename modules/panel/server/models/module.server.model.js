'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Module Schema
 */
var ModuleSchema = new Schema({
  name: {
    type: String,
    unique: true
    trim: true,
    required: "Please give your module a name"
  },
  version: {
    type: String,
    trim: true
  },
  website: {
    type: String,
    trim: true
  },
  configs: [{}]
});

mongoose.model('Module', ModuleSchema);
