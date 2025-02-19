"use client"

import { useState, useEffect } from "react"
import AdminDashboard from "../components/AdminDashboard"
import Login from "../components/Login"
import { usePersistedAuth } from "../components/hooks/useAuth"
import Navbar from "../components/widgets/Navbar"

export default function AdminPage() {
  const { isLoggedIn, login, logout } = usePersistedAuth()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Admin Login</h1>
        <Login onLogin={login} />
      </div>
    )
  }

  return (
    <div>
    <Navbar/>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <AdminDashboard onLogout={logout} />
    </div>
    </div>
  )
}

