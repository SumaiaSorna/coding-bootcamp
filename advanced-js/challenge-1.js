// function to create initials for a full name

// const createInitials = (fullName) => {
//   // remove white spaces and convert to uppercase and convert str to arr
//   const fullNameArray = fullName.trim().toUpperCase().split(" ");
//   console.log(fullNameArray);

//   // get first name from the array
//   const firstName = fullNameArray[0];

//   // get last name from the array
//   const lastName = fullNameArray.pop();

//   const firstNameChar = firstName.charAt(0);
//   const lastNameChar = lastName.charAt(0);

//   console.log(firstNameChar);
//   console.log(lastNameChar);

//   return `${firstNameChar}.${lastNameChar}`;
// };

const createInitials = (fullName) =>
  fullName
    .trim()
    .toUpperCase()
    .split(" ")
    .map((each) => each.charAt(0))
    .join(".");

// Happy path test 1
console.log(createInitials("Bob Smith"));

// Happy path test 2
console.log(createInitials("patrick feeney"));

// Happy path test 3
console.log(createInitials("    patrick feeney  "));
