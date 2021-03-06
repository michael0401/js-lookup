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


(function(global) {
	"use strict";
	var hashUtils;
	
	if (typeof exports !== 'undefined') {
		hashUtils = exports;
	} else {
		hashUtils = global.hashUtils = {};
	}
	
	var Hash = function() {};

	Hash._Table = function(init) {
		var item;
		this.values = init || {};
		this.original = {};
		this.defaults = defaults;
		
		for (item in init) {
			if (init.hasOwnProperty(item)) {
				this.original[item] = init[item];
			}
		}
		return this;
	};

	Hash._Table.prototype.set = function (name, value) {
		this.values[name] = value;
		return this;
	};
	Hash._Table.prototype.store = Hash._Table.prototype.set;

	Hash._Table.prototype.get = function (name) {			
		return this.values[name];
	};
	Hash._Table.prototype.lookup = Hash._Table.prototype.get;
	Hash._Table.prototype.find = Hash._Table.prototype.get;

	Hash._Table.prototype.contains = function (name) {
		return (typeof this.get(name) !== 'undefined');
	};

	Hash._Table.prototype.post = function (v) {
		if (v) {
			this.values = v;
		}
		return this.values;
	};

	Hash._Table.prototype.getLength = function () {
		var k
		, count = 0;

		for (k in this.values) {
			count += 1;
		}
		return count;
	};

	// What it does: Remove an item from the Hash
	Hash._Table.prototype.remove = function (name) {
		if (this.values[name]) {
			delete this.values[name];
		}
		return this;
	};
	// What it does: Return the Hash as an array so it can be used as an argument to map/reduce
	Hash._Table.prototype.each = function () {
		var objectArray = []
		, obj;

		for (obj in this.values) {
			objectArray.push(this.values[obj]);
		}
		return objectArray;
	};

	Hash._Table.prototype.keys = function () {
		var keyArray = []
		, obj;

		for (obj in this.values) {
			keyArray.push(obj);
		}
		return keyArray;
	};

	Hash._Table.prototype.first = function () {
		return(this.get(this.keys()[0]));		
	};
	
	// What it does: Bulk update the properties of the Hash
	Hash._Table.prototype.update = function (properties) {
		var property;
		
		for (property in properties) {
			if (properties.hasOwnProperty(property)) {
				this.set(property, properties[property]);
			}
		}
		return this;		
	};
	
	// What it does: Returns an object containing only the selected items. args can be an Array of strings
	// or separate argument strings
	Hash._Table.prototype.pick = function (args) {
		var i
		, list = []
		, target = {};
		
		// accepts arguments as either array of items to pick, or argument list of items
		if (typeof arguments[0] === 'string') {
			// convert the arguments list to an array
			for (i=0; i < arguments.length; i += 1) {
				list.push(arguments[i]);
			}
		} else {
			// or, just use as is
			list = args;
		}
		// iterate over the arguments to pick up the items requested
		for (i=0; i < list.length; i += 1) {
			target[list[i]] = this.get(list[i]);
		}
		return target;
	};
	// What it does: Returns the object values to its original state
	Hash._Table.prototype.restore = function () {
		var item;
		
		this.values = {};
		for (item in this.original) {
			if (this.original.hasOwnProperty(item)) {
				this.values[item] = this.original[item];
			}
		}
		return this;
	};
	
	Hash._Table.prototype.empty = function () {
		return this.post({});
	};
	
	hashUtils.Hash = function (obj) {
		return new Hash._Table(obj);
	};

	
}(this));
	