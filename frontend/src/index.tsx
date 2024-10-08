//import 'dotenv/config';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import App from './components/app/app';
import { store } from './store';
import { checkAuthAction } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(checkAuthAction());

root.render(
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
);
