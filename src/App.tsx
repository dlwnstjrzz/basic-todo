import { SignIn, SignUp, Todo } from 'pages';
import { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const { pathname } = useLocation();
  useEffect(() => {
    if (!token && pathname === '/todo') {
      navigate('/signin');
    }
  });

  return (
    <Routes>
      <Route path="/" element={token ? <Navigate to="/todo" /> : <Navigate to="/signin" />} />
      <Route path="/signin" element={token ? <Navigate to="/todo" /> : <SignIn />} />
      <Route path="/signup" element={token ? <Navigate to="/todo" /> : <SignUp />} />
      <Route path="/todo" element={token ? <Todo /> : <Navigate to="/signin" />} />
    </Routes>
  );
}

export default App;
