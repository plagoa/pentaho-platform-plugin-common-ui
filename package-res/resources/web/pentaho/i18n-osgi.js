/*!
 * Copyright 2010 - 2016 Pentaho Corporation. All rights reserved.
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

 /**
 * RequireJS loader plugin for loading localized messages via the OSGI i18n web service.
 */
 define(["pentaho/util/MessageBundle", "dojo/request", "dojo/dom", "dojo/on", "dojo/domReady!"], 
  function (MessageBundle, request, dom, on) { 
  "use strict";

  return {

    load: function(bundlePath, require, onLoad, config) {
      if(config.isBuild) {
        // Indicate that the optimizer should not wait for this resource and complete optimization.
        // This resource will be resolved dynamically during run time in the web browser.
        onload();
      } else {
        var bundleInfo = getBundleInfo(require, bundlePath);
        console.log(bundleInfo);

        var url = "/pentaho/osgi/cxf/i18n/" + bundleInfo.region + "/" + bundleInfo.bundle + "/" + SESSION_LOCALE;
        
        request(url, {sync : true}).then(function (data) {
          onLoad(new MessageBundle(JSON.parse(data)));
        }, function (err) {

        }, function (evt) {
        });
        
      }
    }
  };

  /**
   * Gets a bundle info object with the plugin id and bundle name,
   * for a given bundle module id.
   *
   * @param {string} bundlePath The specified bundle path argument.
   * @return {Object} A bundle info object.
   *
   * @throws {Error} If the specified module id cannot be resolved
   *   to a plugin id and bundle name.
   */
  function getBundleInfo(require, bundlePath) {   

    var i = bundlePath.indexOf("/");

    if(i > 0 || i < bundlePath.length - 1)
      return {
        region: bundlePath.substr(0, i),
        bundle: bundlePath.substr(i + 1)
      };

    throw new Error("Bundle path argument is invalid: '" + bundlePath + "'.");
  }
});