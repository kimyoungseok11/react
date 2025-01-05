import axios from "axios";

const baseUrl = "http://localhost:8084";

export const callData = async (item, page) => {
  const param = { ...item, currentPage: page };
  try {
    const response = await axios.post(
      `${baseUrl}/healthcare/recommend/search.do`,
      param
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const callDetailData = async (plantId) => {
  const param = { id: plantId };
  console.log(param);
  try {
    const response = await axios.post(
      `${baseUrl}/healthcare/recommend/detailSearch.do`,
      param
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const callSurveyList = async () => {
  try {
    const response = await axios.post(
      `${baseUrl}/healthcare/personal/surveyList.do`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

//설문 제출 api
export const submitSurveyList = async (param) => {
  try {
    const response = await axios.post(
      `${baseUrl}/healthcare/personal/newSubmit.do`,
      param
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

//설문 결과 return
export const returnSubmitResult = async (param) => {
  try {
    const response = await axios.post(
      `${baseUrl}/healthcare/personal/result.do`,
      param
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
