
import React, { useEffect, useState } from "react";
import './SinglePost.css';
import { useParams } from "react-router-dom";
import sanityClient from "./client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OneProject( ) {
  const [projectData, setprojectData] = useState(null);
  const { slug } = useParams();
  
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          date,
          slug,
          tags,
          place,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }` )
      .then((data) => setprojectData(data[0]))
      .catch(console.error);
  }, [slug]);
  if (!projectData) return <div>Loading...</div>;
  return (
    <>
    <h2>{projectData.title}</h2>
    <div className="singlepost">
      <div>
      </div>
      <div className="singlepost_blog_container">
      <img src={urlFor(projectData.mainImage).url()} alt="" />
      </div>
      <div className="singlepost_blog_details">
        <div className="author_details">
          <span>
          <strong>Finished {projectData.name} on</strong>:{" "} 
         {new Date(projectData.date).toLocaleDateString()}
          </span><br/>
          <span>
          <strong>Language</strong>:{" "} 
         {projectData.tags}
          </span><br/>
          <span>
          <strong>place</strong>:{" "} 
         {projectData.place}
          </span> <br/>
          <span>
          <strong>ProjectType</strong>:{" "} 
         {projectData.projectType}
          </span> 
        </div> 
        <BlockContent
          blocks= {projectData.body}
          projectId= "xyb9vdii"
          dataset= "production"
        />
      </div>
    </div>
    </>
  );
}