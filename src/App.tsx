import TextArea from "./components/TextArea";
import { useState } from "react";

function App() {
  const [userText, setUserText] = useState<string>("");

  const handleTextChange = (newText: string) => {
    setUserText(newText);
  };

  return (
    <div>
      {/* <ListGroup />  */}
      <TextArea onChange={handleTextChange} />
      <div>
        <h2>Text you typed (hmmmm)</h2>
        <p>{userText}</p>
      </div>
    </div>
  );
}

export default App;
