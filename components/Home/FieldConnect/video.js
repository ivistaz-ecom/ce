"use client"
import React, { useRef, useEffect } from "react"
import VideoJS from "./VideoPlayer"
export default function Page() {
  const playerRef = React.useRef(null)

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ce/Untitled-10.mp4",
        type: "video/mp4",
      },
    ],
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player

    // You can handle player events here, for example:
    player.on("waiting", () => {
      //videojs.log("player is waiting")
    })

    player.on("dispose", () => {
      //videojs.log("player will dispose")
    })
  }

  return (
    <>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </>
  )
}
