import React from "react";
import {
  SlSocialYoutube,
  SlSocialFacebook,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";
import { motion } from "framer-motion";

type Props = {};

const Footer = (props: Props) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-center items-center mt-10"
    >
      <div className="flex flex-row  justify-center gap-3">
        <div className="h-12 w-12 border-black border-2 rounded-full items-center justify-center flex cursor-pointer">
          <SlSocialFacebook className="h-5 w-5" />
        </div>
        <div className="h-12 w-12 border-black border-2 rounded-full items-center justify-center flex cursor-pointer">
          <SlSocialTwitter className="h-5 w-5" />
        </div>
        <div className="h-12 w-12 border-black border-2 rounded-full items-center justify-center flex cursor-pointer">
          <SlSocialLinkedin className="h-5 w-5" />
        </div>
        <div className="h-12 w-12 border-black border-2 rounded-full items-center justify-center flex cursor-pointer">
          <SlSocialYoutube className="h-5 w-5" />
        </div>
      </div>
      <div className="my-4">
        <p className="text-center m-0">Example@email.com</p>
        <p className="text-center m-0">
          Copyright © 2020 Name. All rights reserved.
        </p>
      </div>
    </motion.div>
  );
};

export default Footer;
