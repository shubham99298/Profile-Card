import React from "react";
import Card from "./Card";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";


const Foreground = () => {
  const ref=useRef(null);
  const data = [
   
    {
      icon:<FaGithub className='bg-black-600  w-5 h-6  rounded-lg' />,
      desc: "Github",
      
      close: true,
      link:"https://github.com/shubham99298",
      tag: { isOpen: true, tagTitle: "Visit Github", tagColor:"blue" },
    },
    {
      icon:<SiLeetcode className='bg-orange-400 w-5 h-6  rounded-lg '/>,
      desc: "LeetCode",
     
      close: true,
      link:"https://leetcode.com/shubhamlata2002/",
      tag: { isOpen: true, tagTitle: "Visit Leetcode", tagColor:"green" },
    }, {
      icon:<FaLinkedin className='bg-blue-600  w-5 h-6  rounded-lg' />,
      desc: "Linkedin",
      
      close: true,
      link:"https://www.linkedin.com/in/shubham-kumar-sharma-5244a6274/",
      tag: { isOpen: true, tagTitle: "Visit Linkedin", tagColor:"blue" },
    },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
      {data.map((item,index)=> (
         <Card key={index} data={item} reference={ref}/>
      ))}
    </div>
  );
};

export default Foreground;
