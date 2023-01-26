
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Firends from './components/Firends/Firends';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Main from './layout/Main';
import Posts from './components/Posts/Posts';
import SinglePost from './components/SinglePost/SinglePost';

function App() {
  const router = createBrowserRouter([
    {
      path :'/',
      element:<Main/>,
      children:[
      {path :'/',element:<Home/>},
      {path :'/home',element:<Home/>},
      {path :'/about',element:<About/>},
      {path :'/products',element:<Products/>},
      {
        path :'/friends',
        loader: async () => {
          return fetch('https://jsonplaceholder.typicode.com/users');
        },
       element:<Firends/>
      },
      {
          path:'/friend/:friendId',
          // loader: async({params})=>{
          //   console.log(params);
          // },
          loader: async ({params}) => {
            //  console.log(params.friendId)
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`);
           },
           element:<FriendDetails/>
      },
      { 
        path:'/posts',
        loader: async () => {
          return fetch('https://jsonplaceholder.typicode.com/posts');
        },
        element:<Posts/>
      },
      {
        path:'post/:postId',
        loader: async({params})=>{
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        },
        element: <SinglePost/>
      }
  
    ]
  },

  {path :'*',element: <div>This route not fount 4o4</div>},


   
  ])
  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
