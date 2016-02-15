'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * ConfigAbstract Schema
 */
var ConfigAbstractSchema = new Schema({
  name: {
    type: String,
    unique: 'Config already exists',
    trim: true,
    required: 'Please give the config a name'
    validate: [validateLocalStrategyProperty, 'Please fill in your first name']
  },
  type: {}, // TODO: enum, include types "object" and "array"
  trim: {}, // TODO: bool
  default: {}, // TODO: any
  validate: {}, // TODO: function name
  required: {} // TODO: string
});

mongoose.model('ConfigAbstract', ConfigAbstractSchema);
