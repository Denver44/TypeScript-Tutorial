const add = (a: number, b: number): number => {
  return a + b;
};

// Why we should we use type annotations

// 1.
const sub = (a: number, b: number) => {
  a + b;
};

//FIXME 2. Here the type actually Save Us and tell us we have forget to return the value from function
// const sub2 = (a: number, b: number): number => {
//   a + b;
// };

// 3.
const sub3 = (a: number, b: number): number => {
  return a + b;
};

// Annotations for Anonymous Function

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function divide(a: number, b: number): number {
  return a / b;
};

const logger = (a: number): void => {
  console.log(a);
};

// Never going to reach end of this function that's why we used never but don't use always return or either make it void.
const logMyData = (a: string): never => {
  throw new Error(a);
};

// Destructuring with Annotations

const todayWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};
