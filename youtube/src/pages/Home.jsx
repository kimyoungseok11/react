import React from "react";
import VideoList from "../components/VideoList";
import useApiCall from "../hooks/use-apiCall";

const Home = () => {
  const urlParam = `videos?part=snippet&chart=mostPopular&maxResults=25`;
  const [isLoading, error, videos] = useApiCall({
    keys: ["videos"],
    url: urlParam,
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
