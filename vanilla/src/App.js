function App() {
    let input = document.createElement("input");
    input.placeholder = "Ask me something...";

    let image = document.createElement("img");
    image.hidden = true;

    let root = document.createDocumentFragment();
    root.append(input, image);
    return root;
}

export default App();
