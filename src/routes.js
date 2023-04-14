import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import WishList from './pages/WishList';
import GameDescription from './pages/GameDescription';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/wishlist" element={<WishList/>}/>
                <Route path="/description" element={<GameDescription/>}/>
            </Routes>
        </BrowserRouter>
    )
}