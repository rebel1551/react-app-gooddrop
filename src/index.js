import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Part1 from './Part1';
import Part2 from './Part2';
import Footer from './Footer';
ReactDOM.render(<Header />, document.getElementById('react-header'));
ReactDOM.render(<Part1/>, document.getElementById('react-part1'));
ReactDOM.render(<Part2/>, document.getElementById('react-part2'));
ReactDOM.render(<Footer/>, document.getElementById('react-footer'));
// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );
