import { RouterProvider } from "react-router-dom"
import { router } from "./routers"
import { DataContext } from "./contexts/DataContext"
import { useState } from "react";
import data from './database.json';

export function App() {
  const [dataItems, setDataItems] = useState(data);
  const localStorageItem = localStorage.getItem('data-items');

  if(!localStorageItem) {
    localStorage.setItem('data-items', JSON.stringify(data));
  }
  
  return (
  
    <DataContext.Provider value={{ dataItems, setDataItems}}>
      <RouterProvider router={router} />
    </DataContext.Provider>

  )
}