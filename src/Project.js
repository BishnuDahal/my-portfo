import React, { useState, useEffect } from 'react'

import sanityClient from "./client.js";

import { Link } from 'react-router-dom';

export default function Blog() {

    const [projectData, setProjectData] = useState(null);
    useEffect(() => {
     sanityClient.fetch(` *[_type == "project"]{
        title,
        date,
        slug,
        place,
        description,
        tags,
        projectType,
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        },
     }
     `)
     .then((data) => setProjectData(data))
     .catch(console.error);
    }, []);
    return (
<>
<h2>Projects</h2>
<div className="blog">
{projectData && projectData.map((project, index) => (
<div className="blog_cards" key={index}>
<Link to={"/project" + project.slug.current} key={project.slug.current} className="link">
        <div className="blog_card">
            <div className="blog_container">
                <img src={project.mainImage.asset.url} alt={project.mainImage.alt}/>
            </div>
            <div className="blog_details">
                <h3> {project.title} </h3>
        <div className="author_details">
          <span>
          <strong>Finished on</strong>:{" "} 
         {new Date(project.date).toLocaleDateString()}
          </span> <br/>
          <span>
          <strong>Language</strong>:{" "} 
         {project.tags}
          </span><br/>
          <span>
          <strong>place</strong>:{" "} 
         {project.place}
          </span> <br/>
          <span>
          <strong>ProjectType</strong>:{" "} 
         {project.projectType}
          </span> 
        </div> 
                <p> {project.description} </p>
            </div>
    </div>
    </Link>
    </div>
))}
</div>
    </>
    )
    }
