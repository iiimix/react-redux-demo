

import React from 'react';

class App extends React.Component {

    render() {
        return (
        <div>
            <h1>hot hot hot replacement hello world {Math.random().toString(16).slice(2).toUpperCase()}</h1>
            <input type='text' />
        </div>)
    }
}

export default App;