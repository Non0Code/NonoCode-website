import React from "react";

const Services = () => {
    return (
        <div id="Services" className="bg-neutral-900">
            <div className="bg-gradient-to-b from-[#050505] to-neutral-900 pt-32"></div>
            <div className="flex h-full flex-wrap justify-center">
              <div id="card-1" className="card w-[30%]">
                  <h2 className="card-title">C++ course</h2>
                  <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus ea exercitationem numquam! Consequatur minus dignissimos commodi. Harum, iste. Laudantium exercitationem ducimus sapiente beatae, repudiandae tenetur eos quas qui dolore!</p>
                  <button className="card-button">find out more</button>
              </div>
              <div id="card-2" className="card w-[30%]">
                  <h2 className="card-title">C course</h2>
                  <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus ea exercitationem numquam! Consequatur minus dignissimos commodi. Harum, iste. Laudantium exercitationem ducimus sapiente beatae, repudiandae tenetur eos quas qui dolore!</p>
                  <button className="card-button">find out more</button>
              </div>
              <div id="card-3" className="card w-[30%]">
                  <h2 className="card-title">JAVASCRIPT course</h2>
                  <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus ea exercitationem numquam! Consequatur minus dignissimos commodi. Harum, iste. Laudantium exercitationem ducimus sapiente beatae, repudiandae tenetur eos quas qui dolore!</p>
                  <button className="card-button">find out more</button>
              </div>
              <div id="card-4" className="card w-[45%]">
                  <h2 className="card-title">REACT.JS course</h2>
                  <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus ea exercitationem numquam! Consequatur minus dignissimos commodi. Harum, iste. Laudantium exercitationem ducimus sapiente beatae, repudiandae tenetur eos quas qui dolore!</p>
                  <button className="card-button">find out more</button>
              </div>
              <div id="card-5" className="card w-[45%]">
                  <h2 className="card-title">JAVA course</h2>
                  <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus ea exercitationem numquam! Consequatur minus dignissimos commodi. Harum, iste. Laudantium exercitationem ducimus sapiente beatae, repudiandae tenetur eos quas qui dolore!</p>
                  <button className="card-button">find out more</button>
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
        </div>
    );
};

export default Services;
