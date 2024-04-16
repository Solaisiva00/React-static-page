import Navbar from "./component/Navbar";
import Content from "./component/Content";
import { useState } from "react";

const Page = () => {
  const [isDark,setIsdark]=useState(true)
  function toggle(){
    setIsdark(prev=>!prev)
  }
  return (
    <>
      <Navbar mode={isDark} handleToggle={toggle}/>
      <Content mode={isDark} />
    </>
  );
};

export default Page;
