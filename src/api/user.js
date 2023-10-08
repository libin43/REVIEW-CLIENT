import API from "./index";

const userSubmitReviewAPI = (body) => API.post('/user/review_submit', body)
const userReviewResultAPI = () => API.get('/user/review_result')

export {
    userSubmitReviewAPI,
    userReviewResultAPI,
}