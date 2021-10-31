// add an event listener on the form submit

const formElement = $("#my-form");
const handleSubmit = function (event) {
  event.preventDefault();
  console.log("submit");
  // get data from local storage
  const localStorageData = JSON.parse(localStorage.getItem("activities")) ?? [];
  console.log(localStorageData);

  // [] / data

  // get value from the input
  const activity = $("#form-input").val();
  console.log(activity);

  // insert user value into the data from local storage
  localStorageData.push(activity);
  console.log(localStorageData);
  // set data into local storage
  localStorage.setItem("activities", JSON.stringify(localStorageData));
};
formElement.on("submit", handleSubmit);
