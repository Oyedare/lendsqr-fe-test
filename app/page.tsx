import ProtectedRoute from "@/utils/checkAuth";

export default function Home() {
  return (
    <ProtectedRoute>
      <h1>Home Page</h1>
    </ProtectedRoute>
  )
}
