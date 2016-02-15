'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Template Schema
 */
var TemplateSchema = new Schema({
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
  // TODO: schema: {}, // define hooks for plugs
  configs: [{}]
});

mongoose.model('Template', TemplateSchema);
