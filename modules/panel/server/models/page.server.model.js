'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Page Schema
 */
//- { endpoint: "/", template: "product", modules: [ user, product ], plugins: { title: "welcome", aside: "paypal" } }
var PageSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: 'Please name your page',
    unique: 'Page with that name already exists'
  },
  endpoint: {
    type: String,
    trim: true,
    // TODO: validation: can't be the same as any other endpoints
    required: 'Please give your page an endpoint',
    unique: 'Page with that endpoint already exists'
  },
  template: {
    // TODO: type: Template
  },
  // TODO: modules: [ Module ],
  plugins: {} // TODO: how to inherit the "plugs" from the template?
});

mongoose.model('Page', PageSchema);
