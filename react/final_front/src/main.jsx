import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <Provider> */}
    <App />
    {/* </Provider> */}
  </BrowserRouter>
);
