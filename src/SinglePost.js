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

export default function OnePost( ) {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          publishedAt,
          slug,
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
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);
  console.log(postData, "pd");
  if (!postData) return <div>Loading...</div>;

  return (
    <>
    <h2>{postData.title}</h2>
    <div className="singlepost">
      <div>
      </div>
      <div className="singlepost_blog_container">
      <img src={urlFor(postData.mainImage).url()} alt="" />
      </div>
      <div className="singlepost_blog_details">
        
        <div className="author_details">
           <img
           className="author_image"
            src={urlFor(postData.authorImage).url()}
            alt="Author is Bishnu"
          />
          <span>
          <strong>Published by {postData.name} on</strong>:{" "} 
         {new Date(postData.publishedAt).toLocaleDateString()}
          </span>
          <span>
          <strong>Tags</strong>:{" "} 
         {postData.tags}
          </span><br/>
          <span>
          <strong>place</strong>:{" "} 
         {postData.place}
          </span> <br/>
          <span></span>
        </div>
                <div class="addthis_inline_share_toolbox_15sz"></div>
            
            
        <BlockContent
          blocks= {postData.body}
          projectId= "xyb9vdii"
          dataset= "production"
        />
      </div>
    </div>
    </>
  );
}