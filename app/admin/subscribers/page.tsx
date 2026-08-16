'use client'

import { useState } from 'react'
import { useTheme } from '@/lib/theme/ThemeContext'

export default function SubscribersAdmin() {
  const { theme } = useTheme()
  const isGreen = theme === 'green'
  const [subscribers, setSubscribers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const token = process.env.NEXT_PUBLIC_ADMIN_TOKEN || 'your-secret-token'
    if (password === token) {
      setAuthenticated(true)
      fetchSubscribers()
    } else {
      setError('Incorrect password')
    }
  }

  const fetchSubscribers = async () => {
    setLoading(true)
    try {
      const token = process.env.NEXT_PUBLIC_ADMIN_TOKEN || 'your-secret-token'
      const res = await fetch('/api/subscribers', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      setSubscribers(data)
    } catch (err) {
      setError('Failed to load subscribers')
    } finally {
      setLoading(false)
    }
  }

  const exportCSV = () => {
    if (subscribers.length === 0) return
    const headers = ['Email', 'Subscribed At']
    const rows = subscribers.map(s => [s.email, new Date(s.subscribedAt).toLocaleString()])
    const csv = [headers, ...rows].map(row => row.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `subscribers-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-md max-w-md w-full border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Admin Access</h1>
          <p className="text-sm text-slate-500 mb-6">Enter the admin password to view subscribers.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className={`w-full ${
                isGreen ? 'bg-emerald-700 hover:bg-emerald-800' : 'bg-amber-600 hover:bg-amber-700'
              } text-white py-2.5 rounded-xl font-semibold transition`}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-slate-500">Loading subscribers...</div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Subscribers</h1>
          <p className="text-sm text-slate-500">{subscribers.length} total subscribers</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={exportCSV}
            disabled={subscribers.length === 0}
            className={`${
              isGreen ? 'bg-emerald-700 hover:bg-emerald-800' : 'bg-amber-600 hover:bg-amber-700'
            } text-white px-4 py-2 rounded-xl text-sm font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <i className="fas fa-download mr-2"></i> Export CSV
          </button>
          <button
            onClick={() => {
              setAuthenticated(false)
              setPassword('')
            }}
            className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 rounded-xl text-sm font-semibold transition"
          >
            Logout
          </button>
        </div>
      </div>

      {subscribers.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <p className="text-slate-500">No subscribers yet.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-6 py-3 font-semibold text-slate-600">#</th>
                  <th className="text-left px-6 py-3 font-semibold text-slate-600">Email</th>
                  <th className="text-left px-6 py-3 font-semibold text-slate-600">Subscribed At</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {subscribers.map((s, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-3 text-slate-500">{index + 1}</td>
                    <td className="px-6 py-3 font-medium text-slate-800">{s.email}</td>
                    <td className="px-6 py-3 text-slate-500 text-xs">
                      {new Date(s.subscribedAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}