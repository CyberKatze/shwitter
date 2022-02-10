import { MutationResult, QueryResult } from '@apollo/client'
import { createContext, useContext } from 'react'

export interface AuthContextType {
  user: User
  signup: (user: Omit<User, 'id'>) => Promise<User | undefined>
  login: (user: Omit<User, 'id' | 'name'>) => Promise<User | undefined>
  getCurrentUser: () => Promise<User | undefined>
  logout: () => void
  state: State
}

export interface User {
  id: number
  name: string
  email: string
  profile?: {
    avatar: string
    bio: string
    location: string
    website: string
    createdAt: string
  }
}

type initialState = {
  called?: boolean
  data?: any
  error?: any
  loading?: any
}

export type State = MutationResult | QueryResult | initialState

export interface UserData {
  token: string
  user: User
}

export const AuthContext = createContext<AuthContextType>(null!)

export const useAuth = () => {
  return useContext(AuthContext)
}

export { default as AuthProvider } from './AuthProvider'
export { default as RequiredAuth } from './RequiredAuth'
