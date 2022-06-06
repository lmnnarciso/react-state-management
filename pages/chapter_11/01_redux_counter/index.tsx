import { Provider } from "react-redux";
import { store } from "../../../components/01_redux_counter/app/store";
import { Counter } from "../../../components/01_redux_counter/features/counter/Counter";

const App = () => (
  <Provider store={store}>
    <div>
      <Counter />
      <Counter />
    </div>
  </Provider>
);

export default App;
