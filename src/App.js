import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';


function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <div>
          <Navbar />
          <Search />
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
