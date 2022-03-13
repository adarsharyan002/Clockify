
import './App.css';
import Nav from './Components/Nav'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SideBar from './Components/Sidebar'
import { BrowserRouter, Routes, Route } from "react-router-dom";




const theme = createTheme({
  palette: {
    secondary: {
      main: "#FFFF00",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
       <BrowserRouter>
    <div>

      <Nav/>
    
      <Routes>
      
      <Route exact path="/*" element={<SideBar />} />

      </Routes>
      
    </div>
    </BrowserRouter>
    </ThemeProvider>

   

  );
}

export default App;
