/* ===================================================
 * JS-Hash.js v0.01
 * https://github.com/rranauro/boxspringjs
 * ===================================================
 * Copyright 2013 Incite Advisors, Inc.
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
 * ========================================================== */

/*jslint newcap: false, node: true, vars: true, white: true, nomen: true  */
/*global Hash: true */

if ( typeof(Hash) === 'undefined' ) {
	Hash = function() {};

	Hash.Table = function(init) {
		this.values = init || {};
		return this;
	};

	Hash.Table.prototype.set = function (name, value) {
		this.values[name] = value;
		return this;
	};
	Hash.Table.prototype.store = Hash.Table.prototype.set;

	Hash.Table.prototype.get = function (name) {			
		return this.values[name];
	};
	Hash.Table.prototype.lookup = Hash.Table.prototype.get;
	Hash.Table.prototype.find = Hash.Table.prototype.get;

	Hash.Table.prototype.contains = function (name) {
		return (typeof this.get(name) !== 'undefined');
	};

	Hash.Table.prototype.post = function (v) {
		if (v) {
			this.values = v;
		}
		return this.values;
	};

	Hash.Table.prototype.length = function () {
		var k
		, count = 0;

		for (k in this.values) {
			count += 1;
		}
		return count;
	};

	Hash.Table.prototype.remove = function (name) {
		if (this.values[name]) {
			delete this.values[name];
		}
		return this;
	};

	Hash.Table.prototype.each = function () {
		var objectArray = []
		, obj;

		for (obj in this.values) {
			objectArray.push(this.values[obj]);
		}
		return objectArray;
	};

	Hash.Table.prototype.keys = function () {
		var keyArray = []
		, obj;

		for (obj in this.values) {
			keyArray.push(obj);
		}
		return keyArray;
	};

	Hash.Table.prototype.first = function () {
		return(this.get(this.keys()[0]));		
	};
		
} else {
	throw new Error('[ Hash ] name collision');	
}


