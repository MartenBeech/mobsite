import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Home} from './pages/home.tsx';
import {Incrementer} from './pages/incrementer.tsx';
import {Sidebar} from './components/sidebar.tsx';
import {CurrentTime} from './pages/currentTime.tsx';
import {TableData} from './pages/tableData.tsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TableData />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
