import ReactDOM from "../ReactDOM.js";
import React from "./react.js";

const reactElement = React.createElement(
    'div',
    { className: 'site-header' },
    React.createElement('h1', null, 'My first React naive app'),
    React.createElement('h2', null, 'Awesome Simple'),
    React.createElement('p', {}, 'Lorem ipsum dolor...'),
    React.createElement('div', {}, 
        React.createElement('p', {}, 'Nested Paragraph'),
        React.createElement('p', {}, 'Nested Paragraph 2')
    ),
);

// Setup React
const rootDomElement = document.getElementById('root');
ReactDOM.render(reactElement, rootDomElement);