const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "suggar mommy"),
    React.createElement("h2", {}, "suggar daddy"),
    React.createElement("h1", {}, "suggar mommy"),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
