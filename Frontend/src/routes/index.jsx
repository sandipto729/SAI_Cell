import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home/Home';
import Team from '../Pages/Team/Team';

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
            }
        ]
    },
]);

export default router