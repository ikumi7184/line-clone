import './App.css';
import SignIn from './components/SignIn';
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from './firebase';
import Line from './components/Line';

function App() {
  const [user] = useAuthState(auth)
  return (
    <div>
      {user ? <Line /> : <SignIn />}

    </div>
  );
}

export default App;
