import "./App.css";

// Lessons
import Lesson02 from "./lessons/Lesson02/Lesson02";
import Lesson03 from "./lessons/Lesson03/Lesson03";
import Lesson04 from "./lessons/Lesson04/Lesson04";
import Lesson05 from "./lessons/Lesson05/Lesson05";
// Homeworks
import Homework02 from "./homeworks/Homework02/Homework02";
import Homework03 from "./homeworks/Homework03/Homework03";
import Homework04 from "./homeworks/Homework04/Homework04";
// Consultations
import Consultation01 from "./consultations/Consultation01/Consultation01";

function App() {
  return (
    <div className="App">
      {/* <p>This is first react-app</p> */}
      {/* <Lesson02 /> */}
      {/* <Homework02 /> */}
      {/* <Consultation01 /> */}
      {/* <Lesson03 /> */}
      {/* <Homework03 /> */}
      {/* <Lesson04 /> */}
      {/* <Homework04 /> */}
      <Lesson05 />
    </div>
  );
}

export default App;
