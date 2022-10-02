import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import ChatPage from "./Pages/ChatPage/ChatPage";
import HomePage from "./Pages/HomePage/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} exact/>
      <Route path="/chats" element={<ChatPage />} />
    </Routes>
  );
};

export default App;
