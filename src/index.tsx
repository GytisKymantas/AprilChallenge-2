import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store/store';
import { Toaster } from 'react-hot-toast';

render(
  <Provider store={store}>
    <App />
    <Toaster position='top-center' reverseOrder={false} />{' '}
  </Provider>,
  document.getElementById('root')
);
