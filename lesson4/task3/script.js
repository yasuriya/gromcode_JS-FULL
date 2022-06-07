let result = 0;
for (let i = 1; i <= 5; i++) {
  console.log("=> " + i + " <=");
  for (let x = 1; x <= 10; x++) {
    result = i * x;
    console.log(i + " x " + x + " = " + result);
  }
}
