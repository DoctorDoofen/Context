function allTheArgs(func, ...args) {
  let result = func.bind(null, ...args)
  return result
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
