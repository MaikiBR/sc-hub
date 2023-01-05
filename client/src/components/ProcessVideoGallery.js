import { Badge } from "@mui/material";
import React, { useState, createRef } from "react";
import { videoPData } from "../data/videogallery_data";

// Video player
// import { DefaultPlayer as Video } from 'react-html5video';
// import 'react-html5video/dist/styles.css';

const VideoGallery = () => {
    const [model, setModel] = useState(false);
    return (
        <>
            <div className="title" style={{textAlign: 'center'}}>Procesos</div>
            <div className="gallery">
                {videoPData.map((item, index)=>{
                    let divRef = createRef(null);
                    const openModel = () => {
                        divRef.current.classList.remove('video');
                        divRef.current.classList.add('model');
                        setModel(true);
                    }
                    const closeModel = () => {
                        divRef.current.classList.add('video');
                        divRef.current.classList.remove('model');
                        setModel(false);
                    }
                    return (
                        <div ref={divRef} className="video" key={index}>
                            {model && <button className="model-close-btn" onClick={() => closeModel()}></button>}
                            <Badge 
                                badgeContent="" 
                                sx={{
                                    "& .MuiBadge-badge": {
                                        backgroundColor: "#DD0C1C"
                                    }
                            }}>
                                <div className="video-container" onClick={() => openModel()}>
                                    <video
                                        style={{width: '100%'}}
                                        autoPlay={model}
                                        controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                                        poster={item.thumbnail}
                                        controlsList="nodownload"
                                    >
                                        <source src={item.video} type="video/mp4"></source>
                                    </video>
                                </div>
                            </Badge>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default VideoGallery;