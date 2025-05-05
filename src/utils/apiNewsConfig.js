const API_KEY_NEWS = import.meta.env.VITE_API_KEY_NEWS;

const API_URL_NEWS = 'https://gnews.io/api/v4/top-headlines?category=health&q="ВИЧ" OR "СПИД"&lang=ru&apikey='

export {
    API_KEY_NEWS,
    API_URL_NEWS
}