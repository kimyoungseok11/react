import { useQuery } from "@tanstack/react-query";

const useApiCall = ({ keys, url }) => {
  const apiKey = "AIzaSyBHgy2ATq9ZELy6VxcG75Swzew-IBQpB_8";
  const baseurl = "https://youtube.googleapis.com/youtube/v3/";
  const { isLoading, error, data } = useQuery({
    queryKey: keys,
    queryFn: async () => {
      return fetch(`${baseurl}${url}&key=${apiKey}`).then((res) => res.json());
    },
    staleTime: 5000,
  });

  return [isLoading, error, data];
};

export default useApiCall;
