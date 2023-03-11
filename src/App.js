
import { routes } from './routes/routes';
import { RouterProvider } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className='min-h-screen' data-theme="luxury">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
