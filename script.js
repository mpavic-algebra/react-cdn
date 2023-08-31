const rootNode = document.getElementById("root");

const root = ReactDOM.createRoot(rootNode)

function App() {
    // return React.createElement("h1", null, "Hello React")
    return React.createElement("div", null, 
        React.createElement("h1", null, "Hello React"),
        //ovdje ubaciti paragraf
        React.createElement("p", null, "Nekakav Paragraf"),
        React.createElement("ul", null, 
            React.createElement("li", null, "Subtitle 1"),
            React.createElement("li", null, "Subtitle 2"),
            React.createElement("li", null, "Subtitle 3"),
        )
    )
}
// const virtualDOM = App()
// console.log(virtualDOM)
root.render(App())

// const VD = {
//     type: "h1",
//     children: "Hello React"
// }