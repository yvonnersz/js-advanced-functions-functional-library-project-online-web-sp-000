const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let collectionValues = Object.values(collection)

      for (let i = 0; i < collectionValues.length; i++) {
        callback(collectionValues[i], i, collectionValues)
      }
      return collection
    },

    map: function(collection, callback) {
      let collectionValues = Object.values(collection)
      let newValues = [];

      for (let i = 0; i < collectionValues.length; i++) {
        newValues.push(callback(collectionValues[i]))
      }
      return newValues;
    },

    reduce: function(collection, callback, acc) {
      for (let i = 0; i < collection.length < i++) {
        let total = total + collection[i];
        callback(acc, i, collection)
      }
      return
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
