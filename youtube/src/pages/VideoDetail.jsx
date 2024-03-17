import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getApiKey } from "../api/youtube_api";
import { useParams } from "react-router-dom";
import VideoList from "../components/VideoList";

const VideoDetail = () => {
  const apiKey = getApiKey();
  const { videoId } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videosDetail"],
    queryFn: async () => {
      return fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${videoId}&key=${apiKey}`
      ).then((res) => res.json());
    },
    staleTime: 5000,
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
