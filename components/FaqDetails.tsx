import sanityClient from "../Client";
import { useEffect, useState } from "react";

export default function FaqDetails() {
  const [blockContent, setBlockContent] = useState(null);

  useEffect(() => {
      sanityClient
          .fetch(
              `*[_type == "faqBlock"]{
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
      <div className="faq-detail-container">
        { blockContent && 
            blockContent.map((content, i) => {
                return (
                        <details className="details" key={i}>
                            <summary className="summary">{content.title}</summary>
                           {content.description}
                        </details>
                )    
            })
        }
      </div>
  );
}