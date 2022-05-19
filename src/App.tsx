import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import { AuthContextProvider } from "./contexts/AuthContext";
import ChatRoom from "./pages/ChatRoom";
import Home from "./pages/Home/Index";

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms/id/:id" element={<ChatRoom />} />
          </Routes>
        </AuthContextProvider>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
