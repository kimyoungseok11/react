import axios from "axios";

export const callData = async (item, page) => {
  const param = { ...item, currentPage: page };
  try {
    const response = await axios.post(
      "http://localhost:8084/healthcare_war/recommend/search.do",
      param
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
