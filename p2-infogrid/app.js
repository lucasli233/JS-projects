let data = [
  {
    name: "Lucas",
    age: "21",
  },
  {
    name: "John",
    age: "24",
  },
  {
    name: "Mike",
    age: "26",
  },
  {
    name: "Bob",
    age: "22",
  },
  {
    name: "Mike",
    age: "26",
  },
  {
    name: "Bob",
    age: "22",
  },
];

const info = document.querySelector("#info");

let details = data.map(function (item) {
  return "<div>" + item.name + " is " + item.age + " years old" + "</div>";
});

info.innerHTML = details.join("\n");
