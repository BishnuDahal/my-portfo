import React from 'react'
import './Project.css'



import { Button } from '@material-ui/core'

export default function Project() {
    return (
        <>
        <h1>Projects</h1>
        <div  className="work" >
            <div className="project">
            <img src="assets/amzonhome.jpg" alt="amazonhome" className="amazon__home"/>
           <a href="/aboutproject"><Button>About Project</Button></a>
            <a href= "/"><Button>Live Demo</Button></a>
            <a href= "/"><Button>Github</Button></a>
            </div>
            <div className="project">
            <img src="assets/amzonhome.jpg" alt="amazonhome" className="amazon__home"/>
           <a href="/aboutproject"><Button>About Project</Button></a>
            <a href= "/"><Button>Live Demo</Button></a>
            <a href= "/"><Button>Github</Button></a>
            </div>
        </div>
        </>
    )
}
