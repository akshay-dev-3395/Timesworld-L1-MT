import React from "react";
import { motion } from "framer-motion";

type Props = {};

const WelcomeTitle = (props: Props) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col lg:flex-row gap-4 mt-10 justify-between"
    >
      <div className="h-1 bg-black  lg:flex-1 lg:flex" />
      <h1 className="text-5xl font-bold text-center">WELCOME</h1>
      <div className="h-1 bg-black  lg:flex-1 lg:flex lg:self-end" />
    </motion.div>
  );
};

export default WelcomeTitle;
