import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NewClock from './components/clock'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NewClock clockImg="https://i.pinimg.com/736x/d8/50/44/d85044d952ad76e5563552a035b1d5fd--rolex-watches.jpg" clockImgName = "rolex" > </NewClock>
      {/*<App />*/}
  </React.StrictMode>
);


