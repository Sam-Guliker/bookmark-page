
import Image from 'next/image';
import { useEffect, useState } from "react";
import { client } from "../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
	return builder.image(source);
}

export default function FeatureDetails() {
  const [id, setId] = useState(0)
  const [blockContent, setBlockContent] = useState(null);

  useEffect(() => {
      client
          .fetch(
              `*[_type == "featureBlock"]{
      title,
      tab,
      slug,
      id,
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
      <div className="details-container">
        <div className="feature-nav">
          {blockContent &&
            blockContent.map((content, i) => (
              <a className={`nav-item ${id === i ? 'js-is-active' : ''}`} key={i} onClick={() => {setId(i)}}> {content.tab}</a>
            ))}
        </div>
              
      {blockContent &&
            <div className='content-wrapper'>
              <div className="image-wrapper"> 
                <Image layout="responsive" width={500} height={440} src={urlFor(blockContent[id].image.asset).url()} alt={blockContent[id].title} />
              </div>
            <div className="text-content">
              <h2 className="heading-01">{blockContent[id].title}</h2>
              <p className="paragraph-01">{blockContent[id].description}</p>
            </div>
          </div>
          
      }
      </div>
  );
}