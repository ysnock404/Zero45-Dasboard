import { Navigate } from "react-router-dom"
import { useEffect } from "react"
import { useAuthStore } from "@/stores/authStore"
import { wsService } from "@/services/websocket"

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const accessToken = useAuthStore((state) => state.accessToken)

  useEffect(() => {
    if (isAuthenticated && accessToken) {
      // Connect WebSocket with JWT token
      wsService.connect(accessToken)
    }

    return () => {
      // Disconnect WebSocket when leaving protected routes
      wsService.disconnect()
    }
  }, [isAuthenticated, accessToken])

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
