import API from "./index";

const userSubmitReviewAPI = (body) => API.post('/user/review_submit', body)

export {
    userSubmitReviewAPI,
}