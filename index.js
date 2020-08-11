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

      for (let i = 0; i < collectionValues.length; i++) {
        let newValue = collectionValues[i] * 3
        callback(collectionValues[i], i, collectionValues)
      }
      return collection
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
