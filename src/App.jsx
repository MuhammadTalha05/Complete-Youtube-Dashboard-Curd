import React, { useState } from 'react'
import {videoDB} from './Database/db'
import AddVideo from './Components/AddVideo/AddVideo';
import VideoList from './Components/VideoList/VideoList';

const App = () => {

  const [video, setVideo] = useState(videoDB)

  const [updatingVideo, setUpdatingVideo] = useState(null)

  const onPassingFunc = (videoData)=>{
    setVideo([...video, {...videoData, id: video.length+1} ])
  }

  ////// Delete Video .....
  const deleteVideo = (id)=>{
    setVideo(video.filter((val)=>{
      return(
        val.id !== id
      );
    }))
  }


  /////// Editing Video .....

  const editVideo=(id)=>{
    setUpdatingVideo(video.find((val)=>{
      return(
        val.id===id
      );
    }))
  }



  /// This Function Is Responsible To Lifting Up state From Form and we replace it
  const onGettingFucntion = (obj)=>{
    const index = video.findIndex((val)=>{
      return(
        val.id===obj.id
      )
    })

    const updates = [...video]
    updates.splice(index, 1, obj)
    setVideo(updates);
  }

  return (
    <>
    <h2 style={{textAlign:"center", backgroundColor:'#000', color:'#fff', paddingBlock:'18px', fontSize:30}}>YOUTUBE VIDEOS DASHBOARD</h2>
    <div>
      <AddVideo onPassingFunc={onPassingFunc} updatingVideo={updatingVideo} onGettingFucntion={onGettingFucntion}></AddVideo>
    </div>
    <VideoList video={video} deleteVideo={deleteVideo} editVideo={editVideo}/>
    </>
  )
}

export default App