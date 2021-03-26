cleancss = require 'clean-css'
path     = require 'path'
fs       = require 'fs'

module.exports = (wintersmith, callback) ->

  logger = wintersmith.logger

  class SlateCssPlugin extends wintersmith.ContentPlugin

    constructor: (@_filename, @_text) ->
        
    getFilename: ->
      @_filename.relative

    getView: -> (env, locals, contents, templates, callback) ->
        callback null, new Buffer @_text
                                                                                
  SlateCssPlugin.fromFile = (filename, callback) ->
    fs.readFile filename.full, (error, buffer) ->
      if error
        callback error
      else
        callback null, new SlateCssPlugin filename, buffer.toString()

  wintersmith.registerContentPlugin 'style', '**/*.css', SlateCssPlugin
  callback() # tell the plugin manager we are done