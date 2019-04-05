function App() {
  const setHidden = hidden => {
    answerText.hidden = hidden;
    image.hidden = hidden;
  };

  const loadAnswer = () => {
    fetch("https://yesno.wtf/api")
      .then(res => res.json())
      .then(res => {
        answerText.innerText = res.answer;
        image.src = res.image;
        setHidden(false);
      });
  };

  let input = document.createElement("input");
  input.placeholder = "Ask me something...";
  input.onkeypress = event => {
    if (event.key === "Enter") {
      setHidden(true);
      loadAnswer();
    }
  };

  let answerElement = document.createElement("div");
  answerElement.className = "col";

  let answerText = document.createElement("span");
  let image = document.createElement("img");

  answerElement.append(answerText, image);

  let root = document.createDocumentFragment();
  root.append(input, answerElement);
  return root;
}

export default App();
