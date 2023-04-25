import { useState, useEffect } from "react";
import { getDocs , collection, query } from "@firebase/firestore";
import db from '../Firebase';

const Video = (props) => {

  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState('');

  useEffect(() => {

    async function fetchVideos(){
    try {
      const querySnap = await getDocs(query(collection(db, 'videos')));
      const videos = querySnap.docs.map((d) => ({
        id: d.id,
        ...d.data()
      }));
      if(videos.length > 0) {
      setVideos(videos);
      setCurrentVideo(videos[0].videoUrl);
      }
    } catch(err) {
        console.log(err)
    }
  }

  fetchVideos();
  },[]);

    return (

      <div>
            <div className="row">
              <div className="col-9">
              { currentVideo && (
              <video 
                style={{width: '98%'}}
                src={currentVideo}
                controls loop autoPlay="autoplay">Your browser not support video tag</video>
              )
              }
            </div>

            <div className="col-3 mt-5">
              <ul className="row text-center" style={
                { width: '90%',  height:'80vh', 'overflow-y': 'scroll', 'list-style-type' :'none'}}>
                {videos.map((item, index) => (
                <li key={index}>
                  <img src={item.videoUrl?.replace('mp4', 'png')}
                  style={{ cursor: 'pointer'}}
                    onClick={(e)=> { 
                      debugger; 
                      const imageSrc = e.target.src;
                      const videoSrc = imageSrc.replace('png','mp4');
                      setCurrentVideo(videoSrc);
                      }}
                      width='200' />
                </li>
                    ))}
          </ul>
          </div>
          </div>
      </div>
    )
  };
  
  export default Video;