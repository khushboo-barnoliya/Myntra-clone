import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Men from './components/mainContent/Men.jsx'
import Content from './components/mainContent/Content.jsx'
import ItemShow from './components/mainContent/ItemShow.jsx'
import Bag from './components/mainContent/Bag.jsx'
import BagItem from './components/mainContent/ItemsInBag/BagItem.jsx'
import Address from './components/mainContent/ItemsInBag/Address.jsx'
import BagPayment from './components/mainContent/ItemsInBag/BagPayment.jsx'
import { Provider } from 'react-redux'
import myntraConfigStore from './data/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Content /> }, { path: "/men", element: <Men /> }, { path: "/men/products", element: <ItemShow /> }, { path: "/bag", element: <Bag /> }, { path: "/bag/bag-items", element: <BagItem /> }, { path: "/bag/address", element: <Address /> }, { path: "/bag/payment", element: <BagPayment /> }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraConfigStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)