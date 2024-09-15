import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { ItemsPage } from "./pages/ItemsPage";
import { StockItemsInd } from "./components/StockItemsInd";
import { UpdateForm } from "./components/UpdateForm";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/items',
        element: <ItemsPage />,
    },
    {
        path: '/item/:id',
        element: <StockItemsInd />
    },
    {
        path: '/update/item/:id',
        element: <UpdateForm />
    }
]);