import React from "react";

const VideoCard = (props) => {
  console.log(props);
  const { thumbnails, title, channelTitle, publishTime } = props;
  const today = new Date();
  const time = new Date(publishTime);
  const diffMsec = today.getTime() - time.getTime();
  const diffDate = diffMsec / (24 * 60 * 60 * 1000);
  const diffHour = diffMsec / (60 * 60 * 1000);
  console.log(diffDate, diffHour);

  return (
    <div className={`w-[250px]`}>
      <img src={thumbnails.url}></img>
      <div className="pt-[5px] box-border">
        <p className="text-sm pb-[5px] box-border font-semibold">{title}</p>
        <p className="text-xs pb-[2px] box-border text-[#908E92]">
          {channelTitle}
        </p>
        <p className="text-xs pb-[5px] box-border text-[#908E92]">
          {publishTime}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
