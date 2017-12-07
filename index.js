var recipes = { }

/*
function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object, {[key]: value})
  return newObject
} 

*/
function updateObjectWithKeyAndValue(object, key, value) {
  var newPair = {[key]: value}
  var newObject = Object.assign({}, object, newPair)
  return newObject
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value 
  return object
}
function deleteFromObjectByKey(object, key) {
  var objectClone = object
  delete objectClone.key
  return objectClone
}