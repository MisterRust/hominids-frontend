import { BrowserRouter } from "react-router-dom";

import Globalstyles from "styles/Global-Styles";
import Router from "routes";

function App() {
  return (
    <>
      <Globalstyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
