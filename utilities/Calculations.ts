type MenuItem = {
    course: string;
    price: number;
  };
  
  export const calculateTotalItems = (menu: MenuItem[]) => menu.length;
  
  export const calculateAveragePricePerCourse = (menu: MenuItem[]) => {
    const courses: { [key: string]: number[] } = {};
  
    menu.forEach(item => {
      if (!courses[item.course]) {
        courses[item.course] = [];
      }
      courses[item.course].push(item.price);
    });
  
    const averages: { [key: string]: number } = {};
    for (const course in courses) {
      const prices = courses[course];
      const average = prices.reduce((sum, price) => sum + price, 0) / prices.length;
      averages[course] = average;
    }
  
    return averages;
  };
  