import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LoginPage from './pages/LoginPage'
import ItemsPage from './pages/ItemsPage'
import { routes } from './data/routes'
import { selectIsLoggedIn } from './store/slices/userSlice'

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <Router>
      <Routes>
        <Route path={routes.LOGIN} element={<LoginPage />} />
        <Route
          path={routes.ITEMS}
          element={isLoggedIn ? <ItemsPage /> : <Navigate to={routes.LOGIN} />}
        />
        <Route path={routes.NOT_FOUND} element={<Navigate to={routes.LOGIN} />} />
      </Routes>
    </Router>
  )
}

export default App
