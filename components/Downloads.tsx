import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';


// @ts-ignore
import {client} from "../Client";
import imageUrlBuilder from "@sanity/image-url";
import React from "react";

const builder = imageUrlBuilder(client);

function urlFor(source) {
	return builder.image(source);
}

export default function Downloads() {
    const [blockContent, setBlockContent] = useState(null);

    useEffect(() => {
        client
            .fetch(
                `{'downloads': *[_type == 'contentBlock' && title == 'Download the extension'][0], 'cards': *[_type == 'card']}`
            )
            .then((data) => setBlockContent(data))
            .catch(console.error);
    }, []);

  return (
      <div className="download-container container">
        {blockContent?.downloads && 
            <div className="text-content">
            <h2 className="heading-01">{blockContent?.downloads.title}</h2>
            <p className="paragraph-01"> {blockContent?.downloads.description}</p>
        </div>}

        <ul className="card-container">
            {blockContent?.cards &&
                blockContent.cards.map((content, i) => (
                    <li className="card-item" key={i}>
                        <Image width={96} height={100} src={urlFor(content.Image.asset._ref).url()} alt={content.title} />
                        <h2 className="heading-01">{content.title}</h2>
                        <p className="paragraph-01"> {content.description}</p>
                        <Link href={content.url}>
                            <a className="btn btn--card">Add &amp; Install Extension</a>
                        </Link>
                </li>
                ))} 
        </ul>
      </div>
  );
}