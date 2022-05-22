import {client} from "../client";
import { useEffect, useState } from "react";
import  FeatureDetails from './FeatureDetails'
import React from "react";

export default function Features() {
    const [blockContent, setBlockContent] = useState(null);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "contentBlock" && title == "Features"]{
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
      <div className="feature-container container">
        {blockContent &&
            blockContent.map((content, i) => (
                <div className="text-content" key={i}>
                    <h2 className="heading-01">{content.title}</h2>
                    <p className="paragraph-01"> {content.description}</p>
               </div>
            ))}
        <FeatureDetails />
      </div>
  );
}