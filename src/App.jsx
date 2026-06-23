import { useState } from 'react'
import './App.css'
import Head from './components/Head'
import Body from './components/Body'
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const appRouter = createBrowserRouter([
  { path: "/",
    element: <Body />,
    children: [
      {path: "/",
        element: <MainContainer />
      },
      {path: "/watch",
        element: <WatchPage />
      }
    ] 
      }
  
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Head />
      <RouterProvider router={appRouter} />
    </div>
    </>
  )
}

export default App
