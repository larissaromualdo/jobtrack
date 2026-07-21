import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { useEffect, useState } from 'react'

const API_URL = 'http://localhost:3000/applications'

const toClientApplication = (app) => ({
  id: app._id,
  company: app.company || '',
  position: app.position || '',
  location: app.location || '',
  jobType: app.jobType || '',
  status: app.status || 'Applied',
  applicationDate: app.applicationDate
    ? app.applicationDate.slice(0, 10)
    : '',
  jobLink: app.jobLink || '',
  notes: app.notes || '',
})

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [applications, setApplications] = useState([])
  const [editingApplication, setEditingApplication] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

    const loadApplications = async () => {
      const response = await fetch(API_URL)
      const data = await response.json()
      setApplications(data.map(toClientApplication))
    }

    const handleAdd = async (newApp) => {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newApp),
      })
      const created = await response.json()
      setApplications((prev) => [...prev, toClientApplication(created)])
    }

    const handleUpdate = async (updateApp) => {
      const response = await fetch(`${API_URL}/${updateApp.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateApp),
      })
      const updated = await response.json()
      setApplications((prev) =>
        prev.map((item) => (item.id === updated._id ? toClientApplication(updated) : item)),
      )
    }

    const handleDelete = async (id) => {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      setApplications((prev) => prev.filter((item) => item.id !== id))
    }

    const handleSave = async (app) => {
      setIsLoading(true)
      try {
        if (app.id) {
          await handleUpdate(app)
        } else {
          await handleAdd(app)
        }
        setEditingApplication(null)
        setShowForm(false)
      } finally {
        setIsLoading(false)
      }
    }

  useEffect(() => {
    if (!loggedIn) return
    const fetchData = async () => {
      setIsLoading(true)
      try {
        await loadApplications()
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [loggedIn])

    const handleEdit = (app) => {
      setEditingApplication(app)
      setShowForm(true)
    }

    const handleNew = () => {
      setEditingApplication(null)
      setShowForm(true)
    }

    const handleCancelForm = () => {
      setEditingApplication(null)
      setShowForm(false)
    }

  const handleLogout = () => {
    setLoggedIn(false)
    setApplications([])
    setEditingApplication(null)
    setShowForm(false)
  }

  if (isLoading && applications.length === 0) {
    return (
      <div>Loading applications...</div>
    )
    }

  if (!loggedIn) {
    return (
      <div>
        <Login onLoginSuccess={() => setLoggedIn(true)} />
      </div>
    )
  }

  return (
  <Dashboard 
  applications={applications}
  showForm={showForm}
  editingApplication={editingApplication}
  onSave={handleSave}
  onNew={handleNew}
  onDelete={handleDelete}
  onCancel={handleCancelForm}
  onEdit={handleEdit}
  onLogout={handleLogout}
  isLoading={isLoading}
  />
  )
}

export default App 
