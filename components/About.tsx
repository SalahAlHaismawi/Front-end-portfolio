import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className=" absolute top-24 mt uppercase tracking-[20px] text-[#66fcf1] text-2xl">
        About
      </h3>

     

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold text-[#eee2dc]">
          Here is a{" "}
          <span className="underline decoration-[#66fcf1]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base text-[#eee2dc]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quod
          saepe exercitationem ex delectus, perspiciatis sit placeat esse
          cupiditate distinctio rerum ratione corrupti amet animi porro nam
          voluptatibus dignissimos necessitatibus. Enim quaerat praesentium
          officia nulla illum impedit ea! Magni dolores voluptas hic temporibus
          quae maiores cum, odio autem vitae quis, beatae omnis dolorum
          assumenda sequi corrupti labore accusamus sapiente fuga nam
          consequuntur earum. Nulla fuga, voluptatem vel quasi iusto hic libero
          architecto minima ad, molestiae quaerat debitis est iure tenetur
          sapiente suscipit delectus nihil laudantium! Repellat tenetur
          repudiandae voluptatibus laudantium iste? Itaque, quod harum nemo odio
          fugiat sequi minima eius.
        </p>
      </div>
    </motion.div>
  );
}
