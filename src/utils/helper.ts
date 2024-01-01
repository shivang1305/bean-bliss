export const getCategoryData = (data: any) => {
  let temp: any = {};

  data.map((ele: any) => {
    if (temp[ele.name] === undefined) {
      temp[ele] = 1;
    } else {
      temp[ele]++;
    }
  });

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
