import React from "react";
import { useParams } from "react-router-dom";
import VideoList from "../components/VideoList";
import useApiCall from "../hooks/use-apiCall";

const VideoDetail = () => {
  const { videoId } = useParams();
  const urlParam = `search?part=snippet&maxResults=25&q=${videoId}`;
  const [isLoading, error, videos] = useApiCall({
    keys: ["videosDetail", videoId],
    url: urlParam,
  });

  if (isLoading) {
    return <div className="w-[100%] h-[100%]">loading...</div>;
  }
  if (error) {
    return <div className="w-[100%] h-[100%]">error...</div>;
  }
  return <VideoList videoList={videos}></VideoList>;
};

export default VideoDetail;
