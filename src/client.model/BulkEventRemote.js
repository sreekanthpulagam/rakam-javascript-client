/**
 * Rakam API Documentation
 * An analytics platform API that lets you create your own analytics services.
 *
 * OpenAPI spec version: 0.5
 * Contact: contact@rakam.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RakamClient) {
      root.RakamClient = {};
    }
    root.RakamClient.BulkEventRemote = factory(root.RakamClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BulkEventRemote model module.
   * @module client.model/BulkEventRemote
   * @version 0.5
   */

  /**
   * Constructs a new <code>BulkEventRemote</code>.
   * @alias module:client.model/BulkEventRemote
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>BulkEventRemote</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:client.model/BulkEventRemote} obj Optional instance to populate.
   * @return {module:client.model/BulkEventRemote} The populated <code>BulkEventRemote</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('collection')) {
        obj['collection'] = ApiClient.convertToType(data['collection'], 'String');
      }
      if (data.hasOwnProperty('urls')) {
        obj['urls'] = ApiClient.convertToType(data['urls'], ['String']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('compression')) {
        obj['compression'] = ApiClient.convertToType(data['compression'], 'String');
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = ApiClient.convertToType(data['options'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * @member {String} collection
   */
  exports.prototype['collection'] = undefined;
  /**
   * @member {Array.<String>} urls
   */
  exports.prototype['urls'] = undefined;
  /**
   * @member {module:client.model/BulkEventRemote.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:client.model/BulkEventRemote.CompressionEnum} compression
   */
  exports.prototype['compression'] = undefined;
  /**
   * @member {Object.<String, String>} options
   */
  exports.prototype['options'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "AVRO"
     * @const
     */
    "AVRO": "AVRO",
    /**
     * value: "CSV"
     * @const
     */
    "CSV": "CSV",
    /**
     * value: "JSON"
     * @const
     */
    "JSON": "JSON"  };

  /**
   * Allowed values for the <code>compression</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CompressionEnum = {
    /**
     * value: "GZIP"
     * @const
     */
    "GZIP": "GZIP"  };


  return exports;
}));


