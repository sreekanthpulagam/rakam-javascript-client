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
    root.RakamClient.Execute = factory(root.RakamClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Execute model module.
   * @module client.model/Execute
   * @version 0.5
   */

  /**
   * Constructs a new <code>Execute</code>.
   * @alias module:client.model/Execute
   * @class
   * @param query {String} 
   * @param exportType {module:client.model/Execute.ExportTypeEnum} 
   */
  var exports = function(query, exportType) {
    var _this = this;

    _this['query'] = query;
    _this['export_type'] = exportType;

  };

  /**
   * Constructs a <code>Execute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:client.model/Execute} obj Optional instance to populate.
   * @return {module:client.model/Execute} The populated <code>Execute</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], 'String');
      }
      if (data.hasOwnProperty('export_type')) {
        obj['export_type'] = ApiClient.convertToType(data['export_type'], 'String');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} query
   * @default ''
   */
  exports.prototype['query'] = '';
  /**
   * 
   * @member {module:client.model/Execute.ExportTypeEnum} export_type
   * @default ''
   */
  exports.prototype['export_type'] = '';
  /**
   * 
   * @member {Integer} limit
   */
  exports.prototype['limit'] = undefined;


  /**
   * Allowed values for the <code>export_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ExportTypeEnum = {
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


  return exports;
}));

