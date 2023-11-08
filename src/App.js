import './App.css';
import Category from './components/Category';
import Search from './components/Search';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
function App() {
  return (
    <motion.div className="App" animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <BrowserRouter>
      <Search/>
      <Category/>
      <Pages/>
      </BrowserRouter>
    </motion.div>
  );
}

export default App;
