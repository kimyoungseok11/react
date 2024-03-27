import React from "react";

const VideoCard = (props) => {
  const { thumbnails, title, channelTitle, publishTime } = props;
  const today = new Date();
  const time = new Date(publishTime);
  const diffMsec = today.getTime() - time.getTime();
  const diffDate = diffMsec / (24 * 60 * 60 * 1000);
  const diffHour = diffMsec / (60 * 60 * 1000);
  const diffYear = diffDate / 365;
  const diffMonth = diffDate / 30;
  let pbTime;

  if (diffDate >= 1) {
    pbTime = `${diffDate.toString().split(".")[0]} Day ago`;
  }
  if (diffHour < 24) {
    pbTime = `${diffHour.toString().split(".")[0]} Hour ago`;
  }
  if (diffMonth >= 1) {
    pbTime = `${diffMonth.toString().split(".")[0]} Month ago`;
  }
  if (diffYear >= 1) {
    pbTime = `${diffYear.toString().split(".")[0]} Year ago`;
  }

  return (
    <div className={`w-[250px]`}>
      <img src={thumbnails.url}></img>
      <div className="pt-[5px] box-border">
        <p className="text-sm pb-[5px] box-border font-semibold">{title}</p>
        <p className="text-xs pb-[2px] box-border text-[#908E92]">
          {channelTitle}
        </p>
        <p className="text-xs pb-[5px] box-border text-[#908E92]">{pbTime}</p>
      </div>
    </div>
  );
};

export default VideoCard;
