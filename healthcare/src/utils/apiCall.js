import axios from "axios";

export const callData = async (item) => {
  try {
    const response = await axios.post(
      "http://localhost:8084/healthcare_war/recommend/search.do",
      item
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
