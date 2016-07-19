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
    define(['ApiClient', 'client.model/Measure'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Measure'));
  } else {
    // Browser globals (root is window)
    if (!root.RakamClient) {
      root.RakamClient = {};
    }
    root.RakamClient.RealTimeReport = factory(root.RakamClient.ApiClient, root.RakamClient.Measure);
  }
}(this, function(ApiClient, Measure) {
  'use strict';




  /**
   * The RealTimeReport model module.
   * @module client.model/RealTimeReport
   * @version 0.5
   */

  /**
   * Constructs a new <code>RealTimeReport</code>.
   * @alias module:client.model/RealTimeReport
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>RealTimeReport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:client.model/RealTimeReport} obj Optional instance to populate.
   * @return {module:client.model/RealTimeReport} The populated <code>RealTimeReport</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('measures')) {
        obj['measures'] = ApiClient.convertToType(data['measures'], [Measure]);
      }
      if (data.hasOwnProperty('table_name')) {
        obj['table_name'] = ApiClient.convertToType(data['table_name'], 'String');
      }
      if (data.hasOwnProperty('collections')) {
        obj['collections'] = ApiClient.convertToType(data['collections'], ['String']);
      }
      if (data.hasOwnProperty('filter')) {
        obj['filter'] = ApiClient.convertToType(data['filter'], 'String');
      }
      if (data.hasOwnProperty('dimensions')) {
        obj['dimensions'] = ApiClient.convertToType(data['dimensions'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:client.model/Measure>} measures
   */
  exports.prototype['measures'] = undefined;
  /**
   * @member {String} table_name
   */
  exports.prototype['table_name'] = undefined;
  /**
   * @member {Array.<String>} collections
   */
  exports.prototype['collections'] = undefined;
  /**
   * @member {String} filter
   */
  exports.prototype['filter'] = undefined;
  /**
   * @member {Array.<String>} dimensions
   */
  exports.prototype['dimensions'] = undefined;



  return exports;
}));

