import React from './react.js';

// const reactElement = React.createElement(
//     'div',
//     { className: 'site-header' },
//     React.createElement('h1', null, 'My first React naive app'),
//     React.createElement('h2', null, 'Awesome Simple'),
//     React.createElement('p', {}, 'Lorem ipsum dolor...'),
//     React.createElement('div', {}, 
//         React.createElement('p', {}, 'Nested Paragraph'),
//         React.createElement('p', {}, 'Nested Paragraph 2')
//     ),
// );


const reactElement = (
    <header class="site-header">
        <h1>My Custom React Naive JSX</h1>
        <h2>Awesome!!!</h2>
    </header>
);

// Setup React
const rootDomElement = document.getElementById('root');
React.render(reactElement, rootDomElement);