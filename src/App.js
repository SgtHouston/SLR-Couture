import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// npm install bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          {/* Page 1  */}
          <Route exact path="/">
            <Home /> 
          </Route>

          {/* Page 2  */}
          <Route exact path="/about">
            <About />
          </Route>

          {/* Page 3  */}
          <Route exact path="/gallery">
            <Gallery />
          </Route>

          {/* Page 3:  */}
          <Route exact path="/gallery/:galleryId">
            
          </Route>

          {/* Page 3  */}
          <Route exact path="/contact">
            <Contact />
          </Route>

          {/* Redirect */}
          <Route exact path="*">
            <Redirect to="/">{/* Redirect to homepage */}</Redirect>
          </Route>


          


        </Switch>
      </Router>
    </div>
  );
}

export default App;
