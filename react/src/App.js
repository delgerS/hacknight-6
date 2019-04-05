import React, { useState } from "react";

function Answer({ data: {answer, image} }) {
  if (!answer || !image) return null;
  return (
    <div className="col">
      <span>{answer}</span>
      <img src={image} />
    </div>
  );
}

function App() {
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadAnswer = () => {
    fetch("https://yesno.wtf/api")
      .then(res => res.json())
      .then(res => {
        setLoading(false);
        setAnswer(res);
      });
  };

  return (
    <>
      <input
        disabled={loading}
        placeholder="Ask me something..."
        onKeyPress={event => {
          if (event.key === "Enter") {
            setAnswer(null);
            loadAnswer();
          }
        }}
      />
      {answer && <Answer data={answer} />}
    </>
  );
}

export default App;
