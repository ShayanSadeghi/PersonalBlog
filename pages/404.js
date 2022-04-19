import React from "react";
import Image from "next/image";
import image404 from "/img/404 error with person looking for-bro.svg";

export default function Custom404() {
  return <Image src={image404} width={500} height={500} alt="404" />;
}
