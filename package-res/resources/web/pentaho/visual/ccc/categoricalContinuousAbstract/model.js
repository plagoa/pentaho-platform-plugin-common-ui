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
define([
  "module",
  "../cartesianAbstract/model",
  "pentaho/i18n-legacy!../abstract/i18n/model"
], function(module, cartesianAbstractModelFactory, bundle) {

  "use strict";

  return function(context) {

    var CartesianAbstract = context.get(cartesianAbstractModelFactory);

    return CartesianAbstract.extend({
      type: {
        sourceId: module.id,
        id: module.id.replace(/.\w+$/, ""),
        isAbstract: true,

        props: [
          {
            name: "columns", //VISUAL_ROLE
            type: "pentaho/visual/role/ordinal",
            ordinal: 6
          },
          {
            name: "multi", // VISUAL_ROLE
            type: "pentaho/visual/role/ordinal",
            ordinal: 10
          },
          {
            name: "measures", //VISUAL_ROLE
            ordinal: 7,
            type: {
              base: "pentaho/visual/role/quantitative",
              dataType: "number"
            }
          }
        ]
      }
    })
    .implement({type: bundle.structured["categoricalContinuousAbstract"]});
  };
});
