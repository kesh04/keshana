import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
const Exprerience = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className=" my-20 text-center text-4xl "
      >
        Exprerience
      </motion.h1>
      <div>
        {" "}
        {EXPERIENCES.map((experinences, index) => (
          <div key={index} className=" mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className=" w-full lg:w-1/4  "
            >
              <p className=" mb-2 text-sm text-neutral-400 ">
                {experinences.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className=" w-full max-w-xl lg:w-3/4"
            >
              <h6 className=" mb-2 font-semibold ">
                {experinences.role}-{" "}
                <span className=" text-sm">{experinences.company}</span>
              </h6>
              <p className=" mb-4 text-neutral-400">
                {" "}
                {experinences.description}
              </p>
              {experinences.technologies.map((tech, index) => (
                <span
                  key={index}
                  className=" mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium  text-purple-700"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exprerience;
