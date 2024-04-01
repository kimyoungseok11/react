import React from "react";
import VideoCard from "../components/VideoCard";
import { useNavigate } from "react-router-dom";
import RelateVideoCard from "./RelateVideoCard";

const VideoList = (props) => {
  const { videoList, relateVideo } = props;
  const navigater = useNavigate();
  const handleClick = (id, videoInfo) => {
    navigater(`/videoplay/${id}`, { state: { video: videoInfo } });
  };

  return (
    <div className="border-box box-border">
      <div className="text-[#fff] mx-auto flex">
        <div className="w-[100%] mx-auto flex justify-center flex-wrap">
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
              {!relateVideo ? (
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
              ) : (
                <RelateVideoCard
                  thumbnails={video.snippet.thumbnails.default}
                  title={video.snippet.title}
                  channelTitle={video.snippet.channelTitle}
                  publishTime={
                    video.snippet.publishTime
                      ? video.snippet.publishTime
                      : video.snippet.publishedAt
                  }
                ></RelateVideoCard>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
