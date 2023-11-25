/*
   if we want to make like this

   <div id="parent">
        <div id= "child">
            <h1>I'm h1 tag</h1>
            <h2>I'm h1 tag</h2>
        </div>
        <div id= "child2">
            <h1>I'm h1 tag</h1>
            <h2>I'm h1 tag</h2>
        </div>
   </div>
  
*/ // parent is a js object which is react element
// ReactElement(object) => HTML(Browser Understands)
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag"),
        React.createElement("p", {}, "I'm p tag")
    ]),
    React.createElement("div", {
        id: "chil2"
    }, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag"),
        React.createElement("p", {}, "I'm p tag")
    ])
]);
console.log(typeof parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // Here parent(react element is an object) and when we render the object it becomes HTML

//# sourceMappingURL=index.6bd02f5a.js.map
