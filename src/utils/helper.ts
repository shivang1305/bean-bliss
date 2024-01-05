/* eslint-disable curly */
export const getCategoryFromData = (data: any) => {
  let temp: any = {};

  data.map((ele: any) => {
    if (temp[ele.name] === undefined) {
      temp[ele.name] = 1;
    } else {
      temp[ele.name]++;
    }
  });

  // for(let i = 0; i < data.length; i++) {
  //   if (temp[ele.name] === undefined) {
  //     temp[ele] = 1;
  //   } else {
  //     temp[ele]++;
  //   }
  // }

  let categories = Object.keys(temp);
  categories.unshift('All');

  return categories;
};

export const getCoffeeList = (category: string, data: any) => {
  if (category === 'All') {
    return data;
  } else {
    let coffeeList = data.filter((item: any) => item.name === category);
    return coffeeList;
  }
};

export const sortArray = (data: any) => {
  data.sort((a: any, b: any) => {
    if (a.size > b.size) return -1;
    if (a.size < b.size) return 1;
    return 0;
  });
};
