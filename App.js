const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!"
); // {id:"heading", xyz: "abc"} => attributes, "Hello World from React!" => children , and they both conbinely becomes "props"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

const heading1 = document.createElement("h1");
console.log(heading); //  Object (An React element)
console.log(heading1); // This is also an object
