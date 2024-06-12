function callOnTarget(func, obj1, obj2) {
  let result = func.bind(obj1, obj2)
  return result()
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
