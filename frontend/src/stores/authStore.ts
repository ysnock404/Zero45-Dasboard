import { create } from "zustand"
import { persist } from "zustand/middleware"
import { authApi } from "@/services/api"

interface User {
  id: string
  username: string
  name: string
  role: string
  avatar?: string
}

interface AuthState {
  user: User | null
  accessToken: string | null
  refreshToken: string | null
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
  checkAuth: () => Promise<void>
  refreshAccessToken: () => Promise<boolean>
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,

      login: async (username: string, password: string) => {
        try {
          const response = await authApi.login(username, password)

          set({
            user: response.user,
            accessToken: response.accessToken,
            refreshToken: response.refreshToken,
            isAuthenticated: true,
          })

          return true
        } catch (error) {
          console.error('Login failed:', error)
          return false
        }
      },

      logout: async () => {
        try {
          await authApi.logout()
        } catch (error) {
          console.error('Logout error:', error)
        } finally {
          set({
            user: null,
            accessToken: null,
            refreshToken: null,
            isAuthenticated: false,
          })
        }
      },

      checkAuth: async () => {
        const { accessToken } = get()

        if (!accessToken) {
          set({
            user: null,
            accessToken: null,
            refreshToken: null,
            isAuthenticated: false,
          })
          return
        }

        try {
          const user = await authApi.getMe()
          set({
            user,
            isAuthenticated: true,
          })
        } catch (error) {
          console.error('Auth check failed:', error)
          const refreshed = await get().refreshAccessToken()
          if (!refreshed) {
            set({
              user: null,
              accessToken: null,
              refreshToken: null,
              isAuthenticated: false,
            })
          }
        }
      },

      refreshAccessToken: async () => {
        const { refreshToken } = get()

        if (!refreshToken) {
          return false
        }

        try {
          const response = await authApi.refreshToken(refreshToken)
          set({
            accessToken: response.accessToken,
          })
          return true
        } catch (error) {
          console.error('Token refresh failed:', error)
          set({
            user: null,
            accessToken: null,
            refreshToken: null,
            isAuthenticated: false,
          })
          return false
        }
      },
    }),
    {
      name: "auth-storage",
    }
  )
)
