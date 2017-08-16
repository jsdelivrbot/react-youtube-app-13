import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAIXAsNU6krntvN4YyfQKsWt30lXa3lsMY';

// Create a new component
// Component will create html
const App = () => {
    return (
            <div >
                Hi
                <div><SearchBar /></div>
            </div>
        );
};

ReactDOM.render( < App / > , document.querySelector('.container'));
