import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <Provider> */}
    <App />
    <h1>dd</h1>
    {/* </Provider> */}
  </BrowserRouter>
);
