import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { useState } from 'react'

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [applications, setApplications] = useState([])
  const [editingApplication, setEditingApplication] = useState(null)
  const [showForm, setShowForm] = useState(false)

    const handleAdd = (newApp) => {
      setApplications((prev) => [
        ...prev,
        { ...newApp, id: crypto.randomUUID() },
      ])
    }

    const handleUpdate = (updateApp) => {
      setApplications((prev) => 
      prev.map((item) => (item.id === updateApp.id ? updateApp : item))
    )
    }

    const handleDelete = (id) => {
      setApplications((prev) =>prev.filter((item) => item.id !== id))
    }

    const handleEdit = (app) => {
      setEditingApplication(app)
      setShowForm(true)
    }

    const handleSave = (app) => {
      if (app.id) {
        handleUpdate(app) 
      } else {
        handleAdd(app)
      }
      setEditingApplication(null) 
      setShowForm(false)
    }

    const handleNew = () => {
      setEditingApplication(null)
      setShowForm(true)
    }

    const handleCancelForm = () => {
      setEditingApplication(null)
      setShowForm(false)
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
  onLogout={() => setLoggedIn(false)}
  />
  )
}

export default App 
