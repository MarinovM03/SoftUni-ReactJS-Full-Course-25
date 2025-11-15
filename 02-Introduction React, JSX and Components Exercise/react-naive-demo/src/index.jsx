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

function Article({
    title,
    content
}) {
    return (
        <article>
            <h3>{title}</h3>
            <p>{content}</p>
        </article>
    );
}

function App() {
    return (
        <div>
        <header class="site-header">
            <h1>My Custom React Naive JSX</h1>
            <h2>Awesome!!!</h2>
        </header>

            <main>
                <Article title="My first article" content="Lorem ipsum dolor"/>
            </main>
        </div>
    );
}

// Setup React
const rootDomElement = document.getElementById('root');

React.render(<App />, rootDomElement);