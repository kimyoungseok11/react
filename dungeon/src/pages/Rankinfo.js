import React, { useEffect, useState } from "react";
import { baseURL, apiKey, imgURL, fetchApi } from "../lib/api";
import axios from "axios";

const Rankinfo = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = `https://api.neople.co.kr/df/jobs?apikey=xBtWvgOBSAyCLVeLK714Ufn4qL1kHxh7`;
        const response = await axios.get(url);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  });
  return <div></div>;
};

export default Rankinfo;
