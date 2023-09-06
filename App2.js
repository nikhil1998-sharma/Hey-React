/*
How to render Nested HTML code in React ?

<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>    
    </div>
</div>

How can we create above code structure using React.createElement() ?

*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"), // In case of sibblings we can create an array and pass those sibblings to the array
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
