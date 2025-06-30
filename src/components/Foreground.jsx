import React, { useRef, useState } from 'react'
import Card from './Card'


function Foreground() {

  const ref = useRef(null);

  const data = [ 
    {
      desc: "JavaScript is the world's most popular programming language.",
      filesize: ".9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
     {
      desc: "Well organized and easy to understand Web building  of how to use HTML, CSS.",
      filesize: ".9mb",
      close: true,
      tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green"},
    },
    {
      desc: "Motion for React is an animation library that's simple to start and fun to master.",
      filesize: ".9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Upload", tagColor: "blue"},
    },
    {
      desc: "Include popular icons in your React projects easily with react-icons, which utilizes ES6",
      filesize: ".9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
   
  ];

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
      {data.map((item, index)=>(
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground
