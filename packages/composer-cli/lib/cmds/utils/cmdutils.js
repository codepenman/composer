/*
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

'use strict';

const prompt = require('prompt');
const Admin = require('composer-admin');
const Client = require('composer-client');
const BusinessNetworkConnection = Client.BusinessNetworkConnection;

/**
 * Internal Utility Class
 * <p><a href="diagrams/util.svg"><img src="diagrams/util.svg" style="width:100%;"/></a></p>
 * @private
 */
class CmdUtil {

      /**
       * Promise based wrapper for a call to the prompt module.
       * @param {Object} options The options for the prompt module.
       * @return {Promise} A promise that will be resolved with the value returned
       * from the call to the prompt module.
       */
    static prompt(options) {
        return new Promise((resolve, reject) => {
            prompt.get([options], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    /**
      * Creates an admin connection. Included in deploy class to facilitate unit testing
      * @returns {AdminConnection} adminConnection
      */
    static createAdminConnection() {
        let adminConnection = new Admin.AdminConnection();
        return adminConnection;
    }

    /**
      * Creates an Business Network connection.
      * @returns {BusinessNetworkConnection} businessNetworkConnection
      */
    static createBusinessNetworkConnection() {
        let businessNetworkConnection = new BusinessNetworkConnection();
        return businessNetworkConnection;
    }
}

module.exports = CmdUtil;
