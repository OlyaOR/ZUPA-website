import './App.css';
import React from 'react';
import { Main } from './components/main/Main';
import { Case } from './components/case/Case';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Main/>} />
                    <Route exact path="/branding/campaign" element={<Case/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

