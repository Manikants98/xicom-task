import { BrowserRouter, Routes, Route } from "react-router-dom";
import Candidates from "./Candidates";
import ManageCandidates from "./ManageCandidates";
import { ThemeProvider, createTheme } from "@mui/material";
import Layout from "Layout";
const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Candidates />} />
            <Route path="/manage-candidates" element={<ManageCandidates />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
