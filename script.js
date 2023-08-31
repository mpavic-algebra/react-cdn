const rootNode = document.getElementById("root");

const root = ReactDOM.createRoot(rootNode)

function App() {
    return (
        <>
            <h1>Pozdrav Algebra iz JSX-a</h1>
            <Paragraf />
        </>
    )
}

function Paragraf() {
    return (
        <>
            <p>Nekakav paragraf</p>
        </>
    )
}
// const virtualDOM = App()
// console.log(virtualDOM)
root.render(App())

// const VD = {
//     type: "h1",
//     children: "Hello React"
// }