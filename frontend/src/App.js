import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import ChatPage from "./Pages/ChatPage/ChatPage";
import HomePage from "./Pages/HomePage/HomePage";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
};

export default App;
