const farenheitToCelsius = (temperature) => {
  return ((temperature - 32) * 5) / 9;
};

console.log(`${farenheitToCelsius(108)} Celsius`);
