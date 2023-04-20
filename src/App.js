import { GlobalStyle } from './GlobalStyle';
import RoutesApp from "./routes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <RoutesApp />
    </Provider>
  );
}

export default App;
