/* eslint-disable */

export function deepClone(obj: any): any {
  if (obj === null) return null;
  if (typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);

  // 有可能是数组或对象
  let innerObj = new obj.constructor;

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      innerObj[key] = deepClone(obj[key]);
    }
  }

  return innerObj;
}
