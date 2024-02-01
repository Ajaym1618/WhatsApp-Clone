import logo from './logo.svg';
import './App.css';
import Header from './components/Headers/Header';
import Sidebar from './components/Sidebar/Sidebar'
import Setting from './components/settings/settings';
function App() {
  return (
    <div className="w-full h-[100vh] bg-[#202020]">
      <Header/>
      <Sidebar/>
    </div>
  );
}

export default App;
