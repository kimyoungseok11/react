import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getApiKey } from "../api/youtube_api";
import VideoCard from "../components/VideoCard";

const Home = () => {
  const apiKey = getApiKey();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      console.log("fetching....");
      return fetch(
        `https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}&maxResults=25&part=snippet&q=surfing`
      ).then((res) => res.json());
    },
    staleTime: 5000,
  });

  console.log(videos);

  if (isLoading) {
    return <div className="w-[100%] h-[100%]">loading...</div>;
  }
  if (error) {
    return <div className="w-[100%] h-[100%]">error...</div>;
  }
  return (
    <div className="pt-[20px] border-box box-border">
      <div className="text-[#fff] mx-auto flex">
        <div className="w-[100%] max-w-[1400px] mx-auto flex justify-center flex-wrap">
          {videos.items.map((video, index) => (
            <div key={index} className="p-[3px]">
              <VideoCard
                thumbnails={video.snippet.thumbnails.medium}
                title={video.snippet.title}
                channelTitle={video.snippet.channelTitle}
                publishTime={video.snippet.publishTime}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
