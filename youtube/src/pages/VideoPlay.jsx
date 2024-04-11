import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Youtube from "react-youtube";
import Linkify from "linkify-react";
import useApiCall from "../hooks/use-apiCall";
import VideoList from "../components/VideoList";

const VideoPlay = () => {
  const { id } = useParams();
  const location = useLocation();
  const videoInfo = location.state;
  const channelId = videoInfo.video.channelId;
  const videoListUrlParam = `search?part=snippet&maxResults=25&q=${id}`;
  const relateVideoUrlParam = `search?part=snippet&maxResults=10&channelId=${channelId}`;
  const opts = {
    youtubeOption: {
      height: "500px",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    },
    linkifyOption: {
      tagName: "a",
      target: "_blank",
      className: "description-url",
    },
  };

  const [isLoading, error, channelInfo] = useApiCall({
    keys: ["channelInfo"],
    url: videoListUrlParam,
  });

  const [relateIsLoading, relateError, relateVideoInfo] = useApiCall({
    keys: ["relateInfo", channelId],
    url: relateVideoUrlParam,
  });

  const descriptions = videoInfo.video.description.split("\n");

  if (isLoading || relateIsLoading) {
    return <div className="w-[100%] h-[100%]">loading...</div>;
  }
  if (error || relateError) {
    return <div className="w-[100%] h-[100%]">error...</div>;
  }
  return (
    <div>
      <div className="text-[#fff] mx-auto">
        <div className="w-[100%] max-w-[1250px] mx-auto flex flex-wrap sm:justify-center">
          <div className="w-[60%] mr-[40px]">
            <Youtube videoId={id} opts={opts.youtubeOption} />
            <div className="mt-[20px] ml-[20px]">
              <div>
                <div className="font-bold mb-[15px]">
                  {videoInfo.video.title}
                </div>
                <div className="flex items-center mb-[30px]">
                  <div className="w-[30px] h-[30px] mr-[10px]">
                    <img
                      src={channelInfo.items[0].snippet.thumbnails.default.url}
                      className="rounded-full"
                      alt="channelImg"
                    />
                  </div>
                  <div className="font-bold">
                    {videoInfo.video.channelTitle}
                  </div>
                </div>
                <div className="text-overflow: ellipsis mb-[30px]">
                  {descriptions.map((description, idx) => (
                    <Linkify key={idx} options={opts.linkifyOption}>
                      {description}
                      <br />
                    </Linkify>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[35%] sm:w-[400px]">
            <VideoList
              videoList={relateVideoInfo}
              relateVideo={true}
            ></VideoList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlay;
