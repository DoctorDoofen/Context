function bindToAnArg(func, arg) {
  let newFunc = func.bind(arg)
  return newFunc(arg)
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
