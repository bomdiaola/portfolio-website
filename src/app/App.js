import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import "./App.css";

import MatrixRain from '../components/Matrix/Matrix';

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* Añadimos la animación aquí. 
        Como usa posicionamiento fijo y z-index negativo,
        se quedará de fondo en toda la aplicación.
      */}
      <MatrixRain color="#00FF00" />

      {/* El resto de tu aplicación se renderiza por encima del fondo */}
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}