import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div>
      <h1>home</h1>
      <Image src="/penguine.jpg" width={200} height={200} alt="test"/>
    </div>
  );
}

export default Home;
