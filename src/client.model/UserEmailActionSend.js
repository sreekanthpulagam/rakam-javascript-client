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
    define(['ApiClient', 'client.model/EmailActionConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EmailActionConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.RakamClient) {
      root.RakamClient = {};
    }
    root.RakamClient.UserEmailActionSend = factory(root.RakamClient.ApiClient, root.RakamClient.EmailActionConfig);
  }
}(this, function(ApiClient, EmailActionConfig) {
  'use strict';




  /**
   * The UserEmailActionSend model module.
   * @module client.model/UserEmailActionSend
   * @version 0.5
   */

  /**
   * Constructs a new <code>UserEmailActionSend</code>.
   * @alias module:client.model/UserEmailActionSend
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>UserEmailActionSend</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:client.model/UserEmailActionSend} obj Optional instance to populate.
   * @return {module:client.model/UserEmailActionSend} The populated <code>UserEmailActionSend</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], 'String');
      }
      if (data.hasOwnProperty('config')) {
        obj['config'] = EmailActionConfig.constructFromObject(data['config']);
      }
    }
    return obj;
  }

  /**
   * @member {String} user
   */
  exports.prototype['user'] = undefined;
  /**
   * @member {module:client.model/EmailActionConfig} config
   */
  exports.prototype['config'] = undefined;



  return exports;
}));


