

import React from 'react';

class App extends React.Component {

    render() {
        return <h1>hello world {Math.random().toString(16).slice(2).toUpperCase()}</h1>
    }
}

export default App;