"use client"

import { useState, useEffect } from "react"
import AdminDashboard from "../components/AdminDashboard"
import Login from "../components/Login"
import { usePersistedAuth } from "../components/hooks/useAuth"
import AdminLayout from "../components/(private)/AdminLayout"
import Navbar from "../components/widgets/Navbar"


type BreadcrumbItem = 
  | { type: "link"; label: string; href: string }
  | { type: "page"; label: string; href?: undefined }
export default function AdminPage() {

  
  const { isLoggedIn, login, logout } = usePersistedAuth()
  const [loading, setLoading] = useState(true)
  const breadcrumbItems: BreadcrumbItem[] = [
    { type: "link", label: "Home", href: "/" },
    { type: "page", label: "Admin Login" },
  ]

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!isLoggedIn) {
    return (
      
      <div className="container mx-auto">
        <AdminLayout title="Admin Login" breadcrumb={breadcrumbItems} />
        <Login onLogin={login} />
      </div>
    )
  }



  return (
    <div>
<Navbar/>
      <section className="max-w-screen-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      
    <div className="container mx-auto p-4">
      
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <AdminDashboard onLogout={logout} />
    </div>
    </section>
    </div>
  )
}

