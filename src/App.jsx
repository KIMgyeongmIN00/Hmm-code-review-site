import Routes from './app/Router';
import AuthContext from './contexts/auth/auth.context';
import AuthProvider from './contexts/auth/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
