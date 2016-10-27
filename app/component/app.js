import $ from 'jquery';
import NewsList from './NewsList'
import React from 'react';
import { render } from 'react-dom';
import '../src/css/app.css';
render(<NewsList/>,$('#app')[0]);