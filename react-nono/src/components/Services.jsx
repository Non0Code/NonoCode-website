import React from "react";

const Services = () => {
    return (
        <div id="Services" className="bg-neutral-900">
            <div className="bg-gradient-to-b from-[#050505] to-neutral-900 pt-32"></div>
            <div className="text-center p-5">
                <h1 className="md:text-5xl sm:text-4xl text-3xl text-white font-bold">My Services</h1>
            </div>
            <div className="flex h-full flex-wrap justify-center">
              <div id="card-1" className="card md:w-[30%] sm:w-[40%] w-[80%]">
                  <h2 className="card-title">C++ course</h2>
                  <p className="card-description">Découvrez les bases de la programmation en C++, un langage de programmation puissant et largement utilisé, et lancez-vous dans la programmation orientée objet pour créer des applications performantes et sophistiquées !</p>
                  <button className="card-button">Let's Learn</button>
              </div>
              <div id="card-2" className="card md:w-[30%] sm:w-[40%] w-[80%]">
                  <h2 className="card-title">C course</h2>
                  <p className="card-description">Le langage C est plutôt complexe mais si vous le maîtrisez ? vous aurez des bases de programmation très solides!</p>
                  <button className="card-button">Let's Learn</button>
              </div>
              <div id="card-3" className="card md:w-[30%] sm:w-[40%] w-[80%]">
                  <h2 className="card-title">JAVASCRIPT course</h2>
                  <p className="card-description">Établissez une base solide en développement web en apprenant et en pratiquant JavaScript, l'un des principaux langages de programmation sur le web, et créez une application simple!</p>
                  <button className="card-button">Let's Learn</button>
              </div>
              <div id="card-4" className="card md:w-[45%] sm:w-[45%] md:block sm:block hidden">
                  <h2 className="card-title">REACT.JS course</h2>
                  <p className="card-description">Découvrez les bases de la programmation en React.js, une bibliothèque JavaScript populaire pour la création d'interfaces utilisateur, et lancez-vous dans la création d'applications web dynamiques et réactives !</p>
                  <button className="card-button">Let's Learn</button>
              </div>
              <div id="card-5" className="card md:w-[45%] sm:w-[45%] md:block sm:block hidden">
                  <h2 className="card-title">JAVA course</h2>
                  <p className="card-description">Découvrez les bases de la programmation en Java, un langage de programmation populaire et polyvalent, et lancez-vous dans la programmation orientée objet pour créer des applications complexes et interactives !</p>
                  <button className="card-button">Let's Learn</button>
              </div>
              {/* <div id="card-6" className="card w-[30%]">
                  <h2 className="text-white">PYTHON course</h2>
              </div>
              <div id="card-7" className="card w-[30%]">
                  <h2 className="text-white">HTML course</h2>
              </div>
              <div id="card-8" className="card w-[30%]">
                  <h2 className="text-white">CSS course</h2>
              </div> */}
            </div>
            <div className="flex justify-center"> 
                <button className="bg-[#00df9a] w-[275px] rounded-md text-xl font-medium my-6 mx-auto py-7 text-black transition-all ease-linear duration-[500ms] hover:bg-[#6effd1] hover:w-[325px] hover:after:content-['_↗']">Find out more</button>
            </div>
        </div>
    );
};

export default Services;
