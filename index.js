var recipes = { }

/*
function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = object.assign({ }, object, {key: value})
  return newObject
} */
function updateObjectWithKeyAndValue(object, key, value) {
  var newPair = {[key]: value}
  var newObject = Object.assign(object, newPair)
  return newObject
}