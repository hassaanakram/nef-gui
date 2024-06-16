import AuthProvider from "./providers/authProvider";
import APIProvider from "./providers/apiProvider";
import Routes from "./routes";

function App() {
  return (
    <AuthProvider>
      <APIProvider>
        <Routes />
      </APIProvider>
    </AuthProvider>
  );
}

export default App;
