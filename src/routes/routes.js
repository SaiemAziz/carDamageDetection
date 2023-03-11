import App from "../App";
import FormDamage from "../components/FormDamage";
import FormPlate from "../components/FormPlate";
import Error from "../components/pages/Error";
import Main from "../components/pages/Main";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/check-damage',
                element: <FormDamage />
            },
            {
                index: true,
                element: <FormPlate />
            },
            {
                path: '/check-plate',
                element: <FormPlate />
            },
        ]
    }
])