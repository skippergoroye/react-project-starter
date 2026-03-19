import { lazy, Suspense } from "react"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"
import Providers from "./providers/providers"
import PageLoader from "./components/common/page-loader"

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/home"))
const Login = lazy(() => import("./pages/login"))
const NotFound = lazy(() => import("./pages/not-found"))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />

      {/* Private Users Route */}
      {/* <Route path="" element={<PrivateUserRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />

          <Route path="settings" element={<Settings />}>
            <Route index element={<AccountSettings />} />
            <Route path="security-settings" element={<SecuritySettings />} />
          </Route>
        </Route>  */}

      {/* Private Admin Route */}
      {/* <Route path="/backoffice" element={<AdminLayout />}>
          <Route index element={<AdminLogin />} />
          
          <Route path="dashboard" element={<ProtectedAdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="transactions" element={<AdminTransactions />} />

            <Route path="settings" element={<Settings />}>
              <Route index element={<AccountSettings />} />
              <Route path="security-settings" element={<SecuritySettings />} />
            </Route>
          </Route>
        </Route> */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export function App() {
  return (
    <Providers>
      <Suspense fallback={<PageLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </Providers>
  )
}

export default App
