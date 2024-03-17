import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getApiKey } from "../api/youtube_api";
import VideoList from "../components/VideoList";

const Home = () => {
  const apiKey = getApiKey();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      return fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${apiKey}`
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

export default Home;
