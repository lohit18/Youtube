const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
const YOUTUBE_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${API_KEY}&q=`
const YOUTUBE_SEARCH_API = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`
const VIDEOS_API = `https://www.googleapis.com/youtube/v3/videos?part=statistics&key=${API_KEY}&id=`
const COMMENTS_API = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&maxResults=20&key=${API_KEY}&videoId=`

export {YOUTUBE_API, YOUTUBE_SEARCH_API, VIDEOS_API, COMMENTS_API}
