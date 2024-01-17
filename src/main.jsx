import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'

import MainPage from "pages/MainPage";
import DetailPage from 'pages/DetailPage';
import MainLayout from 'layout/MainLayout';
import NotFound from 'components/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: (
          <MainPage />
        ),
      },
      {
        path: `/country/:id`,
        element: (
          <DetailPage />
        ),
      }
    ],
    errorElement: <NotFound />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
