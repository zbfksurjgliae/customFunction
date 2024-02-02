/**
 * 柯里化函数
 * @author 陈年水墨
 * @param {Function} fn 原始函数
 * @return {Function} 柯里化后的函数
 */
export const curry = (fn) => {
 // 定义一个内部函数，用于接收部分参数并调用原始函数
 function curried(...args) {
   // 如果参数数量等于原始函数的参数数量，则直接调用原始函数
   if (args.length === fn.length) {
     return fn(...args);
   }
   // 否则返回柯里化后的函数，以便继续接受参数
   return function (...args2) {
     return curried(...args.concat(args2));
   };
 }
 return curried;
}


/**
 * 求子集函数
 * @author 陈年水墨
 * @param {Array} 需要求子集的数组
 * @returns {Array} 返回一个数组包数组
 */
export const getPowerSet = (originalSet) => {
  // 定义一个空数组，用于存放子集
  const subSets = []
  // originalSet中元素子集个数，计算原集合中元素子集个数
  const numberOfCombinations = 2 ** originalSet.length
  // 按照后面(combinationIndex & (1 << setElementIndex)这里的逻辑，第0个是空数组，所以去掉
  for (let combinationIndex = 1; combinationIndex < numberOfCombinations; combinationIndex++) {
    // 定义一个空数组，用于存放子集
    const subSet = []
    // 遍历原集合，如果combinationIndex二进制中第setElementIndex位为1，则将该元素添加到子集中
    for (let setElementIndex = 0; setElementIndex < originalSet.length; setElementIndex++) {
      if (combinationIndex & (1 << setElementIndex)) {
        subSet.push(originalSet[setElementIndex])
      }
    }
    // 如果子集不为空，则添加到子集数组中
    if (subSet.length > 0) {
      subSets.push(subSet)
    }
    // 添加一个空数组，用于存放子集
    subSets.push(subSet)
  }
  // 返回子集数组
  return subSets
}


/**
 * 求URL参数
 * @author 陈年水墨
 * @param {String} stringUrl 需要解析的URL
 * @return {Object} map 返回URL中的参数键值对象
 */
function getUrlParam(stringUrl) {
	var map = {};
	var parts = stringUrl.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		map[key] = value;
	});
	return map;
}