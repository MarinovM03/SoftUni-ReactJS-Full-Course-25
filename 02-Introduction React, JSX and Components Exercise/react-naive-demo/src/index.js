import React from "./react.js";

const reactElement = React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'My first React naive app'),
    React.createElement('h2', null, 'Awesome Simple'),
);

console.log(reactElement);