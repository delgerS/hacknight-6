function App() {
  var setHidden = function(hidden) {
    answerText.hidden = hidden;
    image.hidden = hidden;
  };

  var loadAnswer = function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var res = JSON.parse(request.response);
        answerText.innerText = res.answer;
        image.src = res.image;
        setHidden(false);
      }
    };
    request.open("GET", "https://yesno.wtf/api");
    request.send();
  };

  var input = document.createElement("input");
  input.placeholder = "Ask me something...";
  input.onkeypress = function(event) {
    if (event.key === "Enter") {
      setHidden(true);
      loadAnswer();
    }
  };

  var answerElement = document.createElement("div");
  answerElement.className = "col";

  var answerText = document.createElement("span");
  var image = document.createElement("img");

  answerElement.append(answerText, image);

  var root = document.createDocumentFragment();
  root.append(input, answerElement);
  return root;
}

export default App();
