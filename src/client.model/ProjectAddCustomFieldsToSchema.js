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
    root.RakamClient.ProjectAddCustomFieldsToSchema = factory(root.RakamClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProjectAddCustomFieldsToSchema model module.
   * @module client.model/ProjectAddCustomFieldsToSchema
   * @version 0.5
   */

  /**
   * Constructs a new <code>ProjectAddCustomFieldsToSchema</code>.
   * @alias module:client.model/ProjectAddCustomFieldsToSchema
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ProjectAddCustomFieldsToSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:client.model/ProjectAddCustomFieldsToSchema} obj Optional instance to populate.
   * @return {module:client.model/ProjectAddCustomFieldsToSchema} The populated <code>ProjectAddCustomFieldsToSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('collection')) {
        obj['collection'] = ApiClient.convertToType(data['collection'], 'String');
      }
      if (data.hasOwnProperty('schema_type')) {
        obj['schema_type'] = ApiClient.convertToType(data['schema_type'], 'String');
      }
      if (data.hasOwnProperty('schema')) {
        obj['schema'] = ApiClient.convertToType(data['schema'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} collection
   */
  exports.prototype['collection'] = undefined;
  /**
   * @member {module:client.model/ProjectAddCustomFieldsToSchema.SchemaTypeEnum} schema_type
   */
  exports.prototype['schema_type'] = undefined;
  /**
   * @member {String} schema
   */
  exports.prototype['schema'] = undefined;


  /**
   * Allowed values for the <code>schema_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SchemaTypeEnum = {
    /**
     * value: "AVRO"
     * @const
     */
    "AVRO": "AVRO"  };


  return exports;
}));


