import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import GlitchImage from "../../components/GlitchImage/GlitchImage"; 

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        
        <div className="container">
          {/* AQUÍ ESTÁ EL CAMBIO: Se añade "justify-content-between" a la fila */}
          <div className="row align-items-center justify-content-between">
            
            {/* --- Columna de Texto --- */}
            {/* Se quitan las clases de padding, ya no son necesarias */}
            <div className="col-lg-5 order-2 order-lg-1">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x typewriter-text">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                        introdata.animated.fourth,
                        introdata.animated.fifth,
                        introdata.animated.sixth,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_h" className="ac_btn btn ">
                      Projects
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/about">
                    <div id="button_h" className="ac_btn btn">
                      About Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* --- Columna de la Imagen --- */}
            {/* También reducimos ligeramente el tamaño de la columna para dar más espacio */}
            <div className="col-lg-5 order-1 order-lg-2 d-flex justify-content-center">
                <GlitchImage imageUrl={introdata.your_img_url} altText="Joan Garcés Portfolio" />
            </div>

          </div>
        </div>

      </section>
    </HelmetProvider>
  );
};