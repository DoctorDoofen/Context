function boundFuncTimer(obj, func, delay) {
  let result = func.bind(obj)
  return setTimeout(() => result(), delay);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;
