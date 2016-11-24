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
  "pentaho/i18n-legacy!messages",
  "./mapping"
], function(module, bundle, mappingFactory) {

  "use strict";

  return function(context) {

    var Mapping = context.get(mappingFactory);

    /**
     * @name pentaho.visual.role.NominalMapping
     * @class
     * @extends pentaho.visual.role.Mapping
     * @abstract
     *
     * @amd {pentaho.type.Factory<pentaho.visual.role.NominalMapping>} pentaho/visual/role/nominal
     *
     * @classDesc An optional base class for nominal visual role mappings.
     *
     * This visual role mapping has a [levels]{@link pentaho.visual.role.Mapping.Type#levels}
     * with a single value, `"nominal"`.
     */
    var NominalMapping = Mapping.extend("pentaho.visual.role.NominalMapping", {
      type: {
        id: module.id,
        levels: ["nominal"]
      }
    })
    .implement({type: bundle.structured.nominal});

    return NominalMapping;
  };
});
