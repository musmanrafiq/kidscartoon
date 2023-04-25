import React from "react";
import db from "../Firebase";
import { addDoc, collection } from "@firebase/firestore"

class AddVideo extends React.Component
 {
  constructor(){
    super();

    this.state = {
        videoUrl: '',
        videoTitle: ''
    }
  }

  setVideoUrl = (evnt) => {
    const videoUrl = evnt.target.value;
    this.setState({ videoUrl });
  }
  setVideoTitle = (evnt) => {
    const videoTitle = evnt.target.value;
    this.setState({ videoTitle });
  }

  addVideo = () => {
    debugger
    const { videoTitle, videoUrl } = this.state;
    const colRef = collection(db, "videos") // Firebase creates this automatically
    const data = {
        videoTitle, videoUrl
    }
    try {
        addDoc(colRef, data).then((res) => {
            debugger
        }, (rej)=> {debugger})
    } catch(err) {
        console.log(err)
    }
  };
  
  render(){

  return (
    <div className="m-5">
        <div className="form-group">
        <label>Video Url</label>
        <input type="url" className="form-control"  aria-describedby="video url" 
        placeholder="video url here" value={this.state.videoUrl}
        onChange={this.setVideoUrl} />
        </div>
    <div className="form-group">
      <label>Title</label>
      <input type="text" className="form-control" placeholder="video title here" 
      value={this.state.videoTitle}
      onChange={this.setVideoTitle} />
    </div>
    <button className="btn btn-primary mt-1" onClick={this.addVideo}>Add</button>
  </div>
    );
  }
}

export default AddVideo;