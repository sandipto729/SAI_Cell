import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home/Home';
import Team from '../Pages/Team/Team';
import About from '../Pages/About/About';
import Initiaves from './../Pages/Initiaves/Initiaves'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/team',
                element: <Team />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/initiaves',
                element: <Initiaves />
            }
        ]
    },
]);

export default router