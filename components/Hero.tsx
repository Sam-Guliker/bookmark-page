import {client} from "../Client";
import { useEffect, useState } from "react";

import Link  from "next/link"
import Image from 'next/image';

import heroImage from '../assets/illustration-hero.svg'
import React from "react";

export default function Hero() {
    const [blockContent, setBlockContent] = useState(null);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "contentBlock" && title == "A Simple Bookmark Manager"]{
        title,
        slug,
        description,
        image{
        asset->{
            _id,
            url
        },
        },
        hexCode,
    }`
            )
            .then((data) => setBlockContent(data))
            .catch(console.error);
    }, []);

  return (
      <div className="hero-container container">

        {blockContent &&
            blockContent.map((content, i) => (
                <div className="text-content" key={i}>
                    <h1 className="heading-01">{content.title}</h1>
                    <p className="paragraph-01"> {content.description}</p>
                    <div className="button-container">
                        <Link href="www.firefox.com">
                            <a className="btn btn--call-to-action">Get it on Chrome</a>
                        </Link>
                        <Link href="www.firefox.com">
                            <a className="btn">Get it on Firefox</a>
                        </Link>
                    </div>
               </div>
            ))}

        <div className="image-container">
            <Image src={heroImage} className="img img--hero" alt='splash-image'/>
        </div>
            
        
          <div className="hero-image-bg"></div>
      </div>
  );
}