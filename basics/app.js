const h1 = React.createElement("div", { class: "parent" }, [
  React.createElement("h1", { class: "child" }, "child one"),
  React.createElement("h1", { class: "child" }, "child two"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);
