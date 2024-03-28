import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Youtube from "react-youtube";
import Linkify from "linkify-react";
import useApiCall from "../hooks/use-apiCall";

const VideoPlay = () => {
  const { id } = useParams();
  const location = useLocation();
  const videoInfo = location.state;
  const urlParam = `search?part=snippet&maxResults=25&q=${id}`;
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
    url: urlParam,
  });

  const descriptions = videoInfo.video.description.split("\n");

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
                    />
                  </div>
                  <div className="font-bold">
                    {videoInfo.video.channelTitle}
                  </div>
                </div>
                <div>
                  {descriptions.map((description, idx) => (
                    // <span key={idx}>
                    //   {description}
                    //   <br />
                    // </span>
                    <Linkify key={idx} as="p" options={opts.linkifyOption}>
                      {description}
                      <br />
                    </Linkify>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlay;
