import { GlobalStyle } from './GlobalStyle';
import RoutesApp from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer pauseOnHover={false} autoClose={1500} />
      <GlobalStyle/>
      <RoutesApp />
    </Provider>
  );
}

export default App;
