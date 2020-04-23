/** ========================================================================
Copyright 2019 T-Mobile, USA

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
See the LICENSE file for additional language around disclaimer of warranties.

Trademark Disclaimer: Neither the name of “T-Mobile, USA” nor the names of
its contributors may be used to endorse or promote products derived from this
software without specific prior written permission.
===========================================================================
*/

import { TreeNode } from "./tree-node";

/**
 * Interface that describes the config property for add/edit
 */
export interface ConfigProperty {
  editMode: boolean;
  envFileMode?: boolean;
  keyOptions: { key: string; type: string }[];
  node: TreeNode; // When in edit mode, this is node being edited; when in add mode, this is the parent node being added to
  defaultTree: TreeNode; // The 'default' root tree
}