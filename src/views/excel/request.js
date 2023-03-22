import $http from "../../utils/http";

export const getStudentSource = async () => {
  const res = await $http.request({
    method: 'post',
    url: '/getStudentSource', 
    responseType: 'blob'
  });
  return res.data;
}