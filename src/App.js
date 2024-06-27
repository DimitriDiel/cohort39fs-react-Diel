import "./App.css";

// Lessons
import Lesson02 from "./lessons/Lesson02/Lesson02";
//Homeworks
import Homework02 from "./homeworks/Homework02/Homework02";

function App() {
  return (
    <div className="App">
      <p>This is first react-app</p>
      <Lesson02 />
      <Homework02 />
    </div>
  );
}

export default App;
