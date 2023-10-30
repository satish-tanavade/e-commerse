import React from 'react'
import { RouterProvider } from 'react-router'
import { router } from './router/Router'

function Main() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default Main