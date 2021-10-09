// defining variable
let side1;
let side2;
let side3;
let x = side1 + side2;
let y = side2 + side3;
let z = side3 + side1;

function triangle() {
  if (side1 === side2 && side2 === side3) {
    console.log("Equilateral");
  } else if (side1 != side2 && side2 != side3 && side3 != side1) {
    console.log("scalene");
  } else {
    console.log("isosceles");
  }
  return;
}

//lets define if it is a triangle

if (side1 && side2 && side3 > 0 && x > side3 && y > side1 && z > side2) {
  triangle();
} else {
  console.log("Its not a triangle");
}
