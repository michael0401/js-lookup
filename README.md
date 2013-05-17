#JS-Hash.js

##Overview

js-hash.js is a utility module which provide functions for operating with hash-table. It can be used both in the [node.js](http://nodejs.org) and browser.

##Example

[Link]()

##Methods

* [hashUtils.Hash](#hashUtils.Hash)
* [set](#set)
* [get](#get)
* [contains](#contains)
* [post](#post)
* [getLength](#getLength)
* [remove](#remove)
* [each](#each)
* [keys](#keys)
* [first](#first)
* [update](#update)
* [pick](#pick)
* [restore](#restore)
* [empty](#empty)

<a name="hashUtils.Hash" />
### hashUtils.Hash(object)

Initialize and return a hash table with the given values object.

__Example:__

    var hash = hashUtils.Hash({'a': 'yes!', 'b': 'no!'});
    
__Result:__

<table>
  <caption>Hash Table</caption>
  <tr>
    <th>Key</th><th>Value</th>
  </tr>
  <tr>
    <td>a</td><td>yes!</td>
  </tr>
  <tr>
    <td>b</td><td>no!</td>
  </tr>
</table>

<a name="set" />
### set(key, value)

Set the new value to the given key. If the given key does not exist in the hash table, add this new key-value pair to the hash table.

__Alias:__ store


__Example:__

    hash.set('c', '123');
    hash.set('a', '1');
      
__Result:__

<table>
  <caption>Hash Table</caption>
  <tr>
    <th>Key</th><th>Value</th>
  </tr>
  <tr>
    <td>a</td><td>1</td>
  </tr>
  <tr>
    <td>b</td><td>no!</td>
  </tr>
  <tr>
    <td>c</td><td>123</td>
  </tr>
</table>
<a name="get" />
### get(key)

Return the value based on the given key. If the given key does not exist in the hash table, return undefined.

__Alias:__ lookup; find


__Example:__

    hash.get('c');
    
__Result:__

    123
    
<a name="contains" />
### contains(key)

If the key exists in the hash table, return true; if the key does not exist in the hash table, return false.

__Example:__

    hash.contains('c');
    
__Result:__

    true
    
<a name="post" />
### post(argument)

If there is no argument, return the values object of the hash table; if the argument is an object, replace the old values object with the new one and return the new values object.

__Example:__

    hash.post({'a':1, 'b':2, 'd':3 });
    
__Result:__

<table>
  <caption>Hash Table</caption>
  <tr>
    <th>Key</th><th>Value</th>
  </tr>
  <tr>
    <td>a</td><td>1</td>
  </tr>
  <tr>
    <td>b</td><td>2</td>
  </tr>
  <tr>
    <td>d</td><td>3</td>
  </tr>
</table>
<a name="getLength" />
### getLength()

Return the total number of the items in the hash table.

__Example:__

    hash.getLength();
    
__Result:__

    3  
    
<a name="remove" />
### remove(key)

If the given key exists in the hash table, delete the items from the hash table based on the given key and return the hash table. If the given key does not exist in the hash table, return the hash table.

__Example:__

    hash.remove('a');
  
__Result:__

<table>
  <caption>Hash Table</caption>
  <tr>
    <th>Key</th><th>Value</th>
  </tr>
  <tr>
    <td>b</td><td>2</td>
  </tr>
  <tr>
    <td>d</td><td>3</td>
  </tr>
</table>
<a name="each" />
### each()

Return the values of the hash table as an array.

__Example:__

    hash.each();

__Result:__

    {2,3}   
    
<a name="keys" />
### keys()

Return the keys of the hash table as an array.

__Example:__

    hash.keys();  
    
__Result:__

    {b,d} 
    
<a name="first" />
### first()

Return the value of the first item in the hash table.

__Example:__

    hash.first();  
   
__Result:__

    2

<a name="update" />
### update(object)

Bulk update the values object of the hast table.

__Example:__

    hash.update({'a':100, 'd':900 });  

__Result:__

<table>
  <caption>Hash Table</caption>
  <tr>
    <th>Key</th><th>Value</th>
  </tr>
  <tr>
    <td>b</td><td>2</td>
  </tr>
  <tr>
    <td>d</td><td>900</td>
  </tr>
  <tr>
    <td>a</td><td>100</td>
  </tr>
</table>
<a name="pick" />
### pick(argument)

Returns an object containing only the selected keys. Argument can be an array of strings or separate argument strings.

__Example:__

    hash.pick(['a','b']);
    hase.pick('a','b');
    
__Result:__
    {'a': 100, 'b': 2}    
    
<a name="restore" />
### restore()

Returns the object values to its original state.

__Example:__

    hash.restore();
 
__Result:__

<table>
  <caption>Hash Table</caption>
  <tr>
    <th>Key</th><th>Value</th>
  </tr>
  <tr>
    <td>a</td><td>yes!</td>
  </tr>
  <tr>
    <td>b</td><td>no!</td>
  </tr>
</table>
<a name="empty" />
### empty()

Empty the hast table.

__Example:__

    hash.empty();
    
__Result:__
<table>
  <caption>Hash Table</caption>
  <tr>
    <th>Key</th><th>Value</th>
  </tr>
</table>

##Install

The source code is available for download from [GitHub](https://github.com/rranauro/js-hash). Besides that, you can also install using Node Package Manager [npm](https://npmjs.org):

    npm install js-hash

##License


