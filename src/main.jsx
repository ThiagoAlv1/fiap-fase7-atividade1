import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Error from './routes/Error.jsx'
import App from './App.jsx'
import Sobre from './routes/Sobre.jsx'
import Formacao from "./routes/Formacao.jsx";
import Experiencia from "./routes/Experiencia.jsx";
import Hobbies from "./routes/Hobbies.jsx";

const router = createBrowserRouter([
    {
        path:'/', element:<App />,
        errorElement:<Error/>,

        children:[
            {path:'/sobre', element:<Sobre/>},
            {path:'/formacao', element:<Formacao/>},
            {path:'/experiencia', element:<Experiencia/>},
            {path:'/hobbies', element:<Hobbies/>}
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
