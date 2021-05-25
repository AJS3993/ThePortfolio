import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import * as serviceWorker from "./serviceWorker";
import Landing from "./Landing/Landing";
import Projects from "./Projects/Projects";
import Blog from './Blog/Blog';
import LabLife from './Posts/LabLife';
import AfterBootcamp from './Posts/AfterBootcamp';
import GeneralAssembly from './Posts/GeneralAssembly';
import MyFirstPost from './Posts/MyFirstPost';

import { BrowserRouter as Router,Route, Switch } from "react-router-dom";


ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/portfolio" component={Projects} />
      <Route exact path="/Blog" component={Blog} />
      <Route exact path="/LabLife" component={LabLife} />
      <Route exact path="/AfterBootcamp" component={AfterBootcamp} />
      <Route exact path="/GeneralAssembly" component={GeneralAssembly} />
      <Route exact path="/myfirstpost" component={MyFirstPost} />
      </Switch>
    </Router>,
    document.getElementById('root')
  );

  // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();