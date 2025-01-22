import React from "react";
import {
  SlSocialGoogle,
  SlSocialFacebook,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";

type Props = {};

const SocialMediaSection = (props: Props) => {
  return (
    <div className="flex flex-row  justify-center gap-3">
      <div className="h-12 w-12 border-black border-2 rounded-full items-center justify-center flex cursor-pointer">
        <SlSocialGoogle className="h-5 w-5" />
      </div>
      <div className="h-12 w-12 border-black border-2 rounded-full items-center justify-center flex cursor-pointer">
        <SlSocialFacebook className="h-5 w-5" />
      </div>
      <div className="h-12 w-12 border-black border-2 rounded-full items-center justify-center flex cursor-pointer">
        <SlSocialLinkedin className="h-5 w-5" />
      </div>
      <div className="h-12 w-12 border-black border-2 rounded-full items-center justify-center flex cursor-pointer">
        <SlSocialTwitter className="h-5 w-5" />
      </div>
    </div>
  );
};

export default SocialMediaSection;
