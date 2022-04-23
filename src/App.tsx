import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import Home from './pages/Home';
import NewRoom from './pages/NewRoom';
import { AuthContextProvider } from './contexts/AuthContext';
import CreateUser from './pages/CreateUser';
import SelectChatRoom from './pages/SelectChatRoom';

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms/new" element={<NewRoom />} />
            <Route path="/rooms/create-user" element={<CreateUser />} />
            <Route path="/rooms/select-chat" element={<SelectChatRoom />} />
          </Routes>
        </AuthContextProvider>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
