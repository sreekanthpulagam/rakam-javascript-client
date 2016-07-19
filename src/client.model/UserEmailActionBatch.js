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
    define(['ApiClient', 'client.model/EmailActionConfig', 'client.model/EventFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EmailActionConfig'), require('./EventFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.RakamClient) {
      root.RakamClient = {};
    }
    root.RakamClient.UserEmailActionBatch = factory(root.RakamClient.ApiClient, root.RakamClient.EmailActionConfig, root.RakamClient.EventFilter);
  }
}(this, function(ApiClient, EmailActionConfig, EventFilter) {
  'use strict';




  /**
   * The UserEmailActionBatch model module.
   * @module client.model/UserEmailActionBatch
   * @version 0.5
   */

  /**
   * Constructs a new <code>UserEmailActionBatch</code>.
   * @alias module:client.model/UserEmailActionBatch
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>UserEmailActionBatch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:client.model/UserEmailActionBatch} obj Optional instance to populate.
   * @return {module:client.model/UserEmailActionBatch} The populated <code>UserEmailActionBatch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('filter')) {
        obj['filter'] = ApiClient.convertToType(data['filter'], 'String');
      }
      if (data.hasOwnProperty('event_filters')) {
        obj['event_filters'] = ApiClient.convertToType(data['event_filters'], [EventFilter]);
      }
      if (data.hasOwnProperty('config')) {
        obj['config'] = EmailActionConfig.constructFromObject(data['config']);
      }
    }
    return obj;
  }

  /**
   * @member {String} filter
   */
  exports.prototype['filter'] = undefined;
  /**
   * @member {Array.<module:client.model/EventFilter>} event_filters
   */
  exports.prototype['event_filters'] = undefined;
  /**
   * @member {module:client.model/EmailActionConfig} config
   */
  exports.prototype['config'] = undefined;



  return exports;
}));

