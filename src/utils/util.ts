export interface timeData {
  time: string,
  name: string | number,
  [propsName: string]: string | number
}

export function sortByTime<T extends timeData>(arr: T[]): T[] {
  let _arr: T[] = [];
  _arr = arr.sort((a: T, b: T) => {
    //  变成想要的类型，获取时间戳 
    // return new Date(a.time).getTime() - new Date(b.time).getTime();
    // 强制断言为 any
    return <any>new Date(a.time) - <any>new Date(b.time);
  })
  return _arr;
}
