# 🎥 YouTube Clone

A full-featured YouTube clone built with **React**, **Redux Toolkit**, and the **YouTube Data API v3** — replicating core YouTube functionality including live search suggestions, video browsing, a watch page with comments, and recommended videos.

---

## ✨ Features

- 🔍 **Live Search Suggestions** — debounced, cached search suggestions as you type, powered by Google's autosuggest API
- 📺 **Dynamic Video Feed** — fetches real YouTube videos based on search queries via the YouTube Data API
- 👁️ **Formatted View Counts** — large numbers displayed YouTube-style (1.2K, 4.5M) using `Intl.NumberFormat`
- ▶️ **Watch Page** — embedded YouTube player with a responsive 16:9 aspect ratio
- 💬 **Nested Comments** — two-level comment threads (comments + replies) fetched live from the YouTube Data API
- 🎯 **Suggested Videos** — recommended videos sidebar on the watch page, reusing already-fetched search results to minimize API calls
- 🍔 **Collapsible Sidebar** — toggleable navigation drawer with subscriptions, watch later, and explore sections
- ⚡ **Smart Caching** — search suggestions are cached in Redux to avoid redundant API calls for repeated queries
- 📱 **Responsive Layout** — built with Tailwind CSS for a clean, YouTube-inspired UI across screen sizes

---

## 🛠️ Tech Stack

| Category | Technology | |
| **Frontend** | React (Vite) |
| **State Management** | Redux Toolkit |
| **Routing** | React Router DOM |
| **Styling** | Tailwind CSS |
| **API** | YouTube Data API v3 |
| **Suggestions** | Google Autosuggest API |

---

## 🧠 What I Learned / Implemented

This project was built to deepen my understanding of real-world React + Redux architecture, including:

- Structuring Redux state across multiple slices (`app`, `search`, `searchResult`) for clean separation of concerns
- Debouncing user input to optimize API calls during live search
- Managing nested/async data fetching (search → fetch stats → merge results)
- Avoiding redundant network requests by sharing already-fetched data across components via Redux instead of duplicating API calls
- Handling YouTube API quota limits and building defensive checks around failed/malformed API responses
- Securing API keys using environment variables instead of hardcoding secrets
- Solving real UI bugs: flex layout conflicts, dropdown click-vs-blur race conditions, CORS issues with third-party APIs, and consistent card sizing across dynamic content

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- A YouTube Data API v3 key from [Google Cloud Console](https://console.cloud.google.com/)

### Installation

1. Clone the repo

   git clone <your-repo-url>
   cd <repo-folder>

2. Install dependencies

   npm install

3. Set up environment variables

   Create a `.env` file in the project root:

   VITE_YOUTUBE_API_KEY=your_api_key_here

4. Run the development server

   npm run dev

5. Open `http://localhost:5173` in your browser

---

## ⚠️ API Quota Note

The YouTube Data API has a daily quota limit on the free tier. If search results stop loading, you may have hit the quota — it resets every 24 hours (midnight Pacific Time).

---

## 📄 License

This project is for educational purposes and is not affiliated with YouTube or Google.

---

### 👤 Author

Built by Lohit connect with me on [https://www.linkedin.com/in/lohit-kumar-237155186/]
