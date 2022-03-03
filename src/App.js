import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIcon from "./components/AboutIcon";
import { FeedbackProvider } from './context/FeedbackContext'

function App(){
    const [nightMode, setNightMode] = useState(false);

    return(
        <FeedbackProvider>
            <Router>
                <Header/>
                <div className="container">
                <button className="btn" onClick={() => setNightMode(true)} style={{backgroundColor: '#000', color: '#fff'}}>Night Mode</button>
                <button className="btn" onClick={() => setNightMode(false)} style={{backgroundColor: '#fff', color: '#000'}}>Light Mode</button>
                
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <FeedbackForm reverse={nightMode} />
                                <FeedbackStats />
                                <FeedbackList reverse={nightMode} />
                            </>
                        }>
                        </Route>

                        <Route path="/about" element={<AboutPage reverse={nightMode}/>} />
                    </Routes>

                </div>
                <AboutIcon/>
            </Router>
        </FeedbackProvider>
    );
}

export default App;
