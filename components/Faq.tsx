import sanityClient from "../Client";
import { useEffect, useState } from "react";

import FaqDetails from "./FaqDetails";

export default function Faq() {
    const [blockContent, setBlockContent] = useState(null);
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "contentBlock" && title == "Frequently Asked Questions"]{
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
      <div className="faq-container container">
        {blockContent &&
            blockContent.map((content, i) => (
                <div className="text-content" key={i}>
                    <h2 className="heading-01">{content.title}</h2>
                    <p className="paragraph-01"> {content.description}</p>
               </div>
            ))}

        <FaqDetails/>

        <a className="btn btn--more-info">More info</a>
      </div>
  );
}
