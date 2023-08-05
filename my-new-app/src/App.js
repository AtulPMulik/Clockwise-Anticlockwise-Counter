import { BrowserRouter, Route, Routes } from "react-router-dom";
import TimerApp from "./components/TimerApp";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/timer" Component={TimerApp} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
