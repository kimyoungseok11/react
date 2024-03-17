import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Youtube from "react-youtube";
import { getApiKey } from "../api/youtube_api";
import { useQuery } from "@tanstack/react-query";

const VideoPlay = () => {
  const { id } = useParams();
  const location = useLocation();
  const videoInfo = location.state;
  const opts = {
    height: "500px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const apiKey = getApiKey();
  const {
    isLoading,
    error,
    data: channelInfo,
  } = useQuery({
    queryKey: ["channelInfo"],
    queryFn: async () => {
      return fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${videoInfo.video.channelId}&key=${apiKey}`
      ).then((res) => res.json());
    },
    staleTime: 5000,
  });

  console.log(channelInfo);
  if (isLoading) {
    return <div className="w-[100%] h-[100%]">loading...</div>;
  }
  if (error) {
    return <div className="w-[100%] h-[100%]">error...</div>;
  }
  return (
    <div className="pt-[20px] border-box box-border">
      <div className="text-[#fff] mx-auto">
        <div className="w-[100%] max-w-[1250px] mx-auto flex">
          <div className="w-[800px]">
            <Youtube videoId={id} opts={opts} />
            <div className="mt-[20px] ml-[20px]">
              <div>
                <div className="font-bold mb-[15px]">
                  {videoInfo.video.title}
                </div>
                <div className="flex items-center mb-[15px]">
                  <div className="w-[30px] h-[30px] mr-[10px]">
                    <img
                      src={channelInfo.items[0].snippet.thumbnails.default.url}
                      className="rounded-full"
                    />
                  </div>
                  <div className="font-bold">
                    {videoInfo.video.channelTitle}
                  </div>
                </div>
                <div>{videoInfo.video.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlay;
