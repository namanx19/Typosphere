/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

import {
  FaSquareWhatsapp,
  FaSquareXTwitter,
  FaSquareReddit,
  FaSquareFacebook,
  FaTelegram,
} from "react-icons/fa6";

const SocialShareButtons = ({url, title}) => {
  return (
    <div className="w-full flex gap-x-3">
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://api.whatsapp.com/send/?text=${url}`}
      >
        <FaSquareWhatsapp className="text-[#25D366] w-8 h-auto" />
      </a>

      <a
        target="_blank"
        rel="noreferrer"
        href={`https://x.com/intent/tweet?url=${url}`}
      >
        <FaSquareXTwitter className="text-black w-8 h-auto" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.reddit.com/submit?url=${url}&title=${title}`}
      >
        <FaSquareReddit className="text-[#FF4500] w-8 h-auto" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.facebook.com/dialog/share?app_id=APP_ID&display=popup&href=${url}`}
      >
        <FaSquareFacebook className="text-[#3B5998] w-8 h-auto" />
      </a>
      <a target="_blank" rel="noreferrer" href="/">
        <FaTelegram className="text-[#0088CC] w-8 h-auto" />
      </a>
    </div>
  );
}

export default SocialShareButtons