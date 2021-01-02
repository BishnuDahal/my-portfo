import React, { useState, useEffect } from 'react'
import './Blog.css'

import sanityClient from "./client.js";

import { Link } from 'react-router-dom';
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Blog() {

    const [podata, setPodata] = useState(null);
    useEffect(() => {
     sanityClient.fetch(` *[_type == "post"]{
        title,
        publishedAt,
        slug,
        description,
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        },
        "name": author->name,
        "authorImage": author->image,
       
     }
     `)
     .then((data) => setPodata(data))
     .catch(console.error);
    }, []);
    console.log(podata, 'slg');
    return (
<>
<h2>Blogs</h2>
<div className="blog">
{podata && podata.map((post, index) => (
<div className="blog_cards" key={index}>
<Link to={"/blog" + post.slug.current} key={post.slug.current} className="link">
        <div className="blog_card">
            <div className="blog_container">
                <img src={post.mainImage.asset.url} alt={post.mainImage.alt}/>
            </div>
            <div className="blog_details">
                <h3> {post.title} </h3>
            
                <div className="author_details">
           <img
           className="author_image"
            src={urlFor(post.authorImage).url()}
            alt="Author is Bishnu"
          />
          <span>
          <strong>Published by {post.name} on</strong>:{" "} 
         {new Date(post.publishedAt).toLocaleDateString()}
          </span>
          <span>
          <strong>Tags</strong>:{" "} 
         {post.tags}
          </span><br/>
          <span>
          <strong>Place</strong>:{" "} 
         {post.place}
          </span> <br/>
          <span></span>
      
        </div> 
                <p> {post.description} </p>
            </div>
            <Link to={"/blog" + post.slug.current} key={post.slug.current} className="blog_button">Learn more</Link>
        </div>
        </Link>
    </div>
))}
</div>
    </>
    )
    }
