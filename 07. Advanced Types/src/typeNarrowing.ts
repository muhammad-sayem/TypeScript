const logValue = (value: string | number) => {
  if(typeof value === "string"){
    console.log(value.toUpperCase());
    console.log(`The value is ${value} this is a string value`);
  }
  else{
    console.log(`The value is ${value} and this is a number value`);
  }
}
logValue("Hello World");
logValue(87);