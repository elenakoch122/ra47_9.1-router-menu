import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Card from './components/Card';
import { list } from './data/list';
import Page404 from './components/Page404';

export default function App() {
  return (
    <div>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" exact element={<Card item={list.home} />} />
          <Route path="/drift" element={<Card item={list.drift} />} />
          <Route path="/timeattack" element={<Card item={list.timeAttack} />} />
          <Route path="/forza" element={<Card item={list.forza} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
}
