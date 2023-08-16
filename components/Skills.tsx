import React from "react";
import { motion } from "framer-motion";
import SkillsCards from "./SkillsCards";

type Props = {};

function Skills({}: Props) {
  return (
    <div

    className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24  uppercase tracking-[20px] text-[#66fcf1] text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[4px] text-sm">
        Hover over a skill for current profieciency
      </h3>
      <div className="grid grid-cols-3 gap-7">
          <div className="group relative flex cursor-pointer">
              <img

                  src="https://abrudz.github.io/logos/TypeScript.svg"
                  className="rounded-full border border-[#66fcf1] object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
              />
              <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 ">
                  <div className="flex items-center justify-center h-full">
                      <p className="text-3xl font-bold text-black opacity-100">100%</p>
                  </div>
              </div>
          </div>
          <div className="group relative flex cursor-pointer">
              <img

                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                  className="rounded-full border border-[#66fcf1] object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
              />
              <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 ">
                  <div className="flex items-center justify-center h-full">
                      <p className="text-3xl font-bold text-black opacity-100">100%</p>
                  </div>
              </div>
          </div>
          <div className="group relative flex cursor-pointer">
              <img

                  src="https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn"
                  className="rounded-full border border-[#66fcf1] object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
              />
              <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 ">
                  <div className="flex items-center justify-center h-full">
                      <p className="text-3xl font-bold text-black opacity-100">100%</p>
                  </div>
              </div>
          </div>
          <div className="group relative flex cursor-pointer">
              <img

                  src="https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo"
                  className="rounded-full border border-[#66fcf1] object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
              />
              <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 ">
                  <div className="flex items-center justify-center h-full">
                      <p className="text-3xl font-bold text-black opacity-100">100%</p>
                  </div>
              </div>
          </div>
          <div className="group relative flex cursor-pointer">
              <img

                  src="https://yt3.googleusercontent.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj"
                  className="rounded-full border border-[#66fcf1] object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
              />
              <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 ">
                  <div className="flex items-center justify-center h-full">
                      <p className="text-3xl font-bold text-black opacity-100">100%</p>
                  </div>
              </div>
          </div>
          <div className="group relative flex cursor-pointer">
              <img

                  src="data:image/png;base64,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"
                  className="rounded-full border border-[#66fcf1] object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
              />
              <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 ">
                  <div className="flex items-center justify-center h-full">
                      <p className="text-3xl font-bold text-black opacity-100">100%</p>
                  </div>
              </div>
          </div>
          <div className="group relative flex cursor-pointer">
              <img
                  src="https://kinsta.com/wp-content/uploads/2022/06/angular-logo.png"

                  className="rounded-full border border-[#66fcf1] object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
              />
              <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 ">
                  <div className="flex items-center justify-center h-full">
                      <p className="text-3xl font-bold text-black opacity-100">100%</p>
                  </div>
              </div>
          </div>
          <div className="group relative flex cursor-pointer">
              <img
                  src="https://www.sketchappsources.com/resources/source-image/python-logo.png"

                  className="rounded-full border border-[#66fcf1] object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
              />
              <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 ">
                  <div className="flex items-center justify-center h-full">
                      <p className="text-3xl font-bold text-black opacity-100">100%</p>
                  </div>
              </div>
          </div>
          <div className="group relative flex cursor-pointer">
              <img
                  src="data:image/jpeg;base64,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"

                  className="rounded-full border border-[#66fcf1] object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
              />
              <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 ">
                  <div className="flex items-center justify-center h-full">
                      <p className="text-3xl font-bold text-black opacity-100">100%</p>
                  </div>
              </div>
          </div>

      </div>
    </div>
  );
}

export default Skills;
