import { Suspense, JSX } from 'react'
import { RouterProvider } from 'react-router-dom'

import Loader from '@renderer/components/Loader'
import MainRoutes from '@renderer/routes/BaseRoute'

function App(): JSX.Element {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={MainRoutes} />
    </Suspense>
  )
}

export default App
