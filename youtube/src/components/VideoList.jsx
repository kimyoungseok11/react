import React from "react";
import VideoCard from "../components/VideoCard";
import { useNavigate } from "react-router-dom";

const VideoList = (props) => {
  const { videoList } = props;
  const navigater = useNavigate();
  const handleClick = (id, videoInfo) => {
    navigater(`/videoplay/${id}`, { state: { video: videoInfo } });
  };
  console.log(videoList);
  return (
    <div className="pt-[20px] border-box box-border">
      <div className="text-[#fff] mx-auto flex">
        <div className="w-[100%] max-w-[1400px] mx-auto flex justify-center flex-wrap">
          {videoList.items.map((video, index) => (
            <div
              key={index}
              className="p-[3px] hover:cursor-pointer"
              onClick={() => {
                video.id.videoId
                  ? handleClick(video.id.videoId, video.snippet)
                  : handleClick(video.id, video.snippet);
              }}
            >
              <VideoCard
                thumbnails={video.snippet.thumbnails.medium}
                title={video.snippet.title}
                channelTitle={video.snippet.channelTitle}
                publishTime={
                  video.snippet.publishTime
                    ? video.snippet.publishTime
                    : video.snippet.publishedAt
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
