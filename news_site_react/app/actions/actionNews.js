export const selectNews = (news) => {
    return {
        type: "NEWS_SELECTED",
        payload: news
    }
}