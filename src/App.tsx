
import { Provider } from "react-redux";
import { store } from './Redux/store'
import RepositoriesList from "./Events/RepositoriesList";

function App() {
  return (
    <>
      <Provider store={store}>
        <RepositoriesList />
      </Provider>
    </>
  );
}

export default App;
