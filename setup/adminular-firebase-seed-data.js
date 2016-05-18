/**
 * Created by Brumkorn on 17.05.2016.
 */
"use strict";
var Firebase = require('firebase'),
  categoriesData = require("./data-categories.json"),
  postsData = require("./data-posts.json"),
  q = require('q');


var url = 'https://adminular.firebaseio.com/';


uploadData(url + '/categories', categoriesData).then(function(){
  return uploadData(url + '/posts', postsData);
});

function uploadData(url, data) {
  var ref = new Firebase(url);
  var promises = [];

  for (var i = 0; i < data.length; i++) {
    addRecord(data[i]);
  }


  function addRecord(itemToAdd) {
    var deferred = q.defer();
    promises.push(deferred.promise);


    ref.push(itemToAdd, function(error) {
      console.log("Request Complete.");
      deferred.resolve();
    });
  }

  return q.all(promises);
}
