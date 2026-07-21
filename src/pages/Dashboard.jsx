import styles from './Dashboard.module.css'
import { useEffect, useState } from 'react'

function Dashboard({
  applications,
  onDelete,
  onEdit,
  onLogout,
  onSave,
  onNew,
  onCancel,
  showForm,
  editingApplication,
  isLoading = false,
}) {
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    location: '',
    jobType: '',
    status: 'Applied',
    applicationDate: '',
    jobLink: '',
    notes: '',
  })

  useEffect(() => {
    if (editingApplication) {
      setFormData({ ...editingApplication })
      return
    }
    setFormData({
      company: '',
      position: '',
      location: '',
      jobType: '',
      status: 'Applied',
      applicationDate: '',
      jobLink: '',
      notes: '',
    })
  }, [editingApplication, showForm])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const payload = {
      ...formData,
      applicationDate: formData.applicationDate || new Date().toISOString().slice(0, 10),
    }
    onSave(payload)
  }

  const onNewClick = () => {
    onNew()
  }

  const statusOptions = ['Applied', 'Interview', 'Rejected', 'Approved']

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Dashboard</h1>

            <div className={styles.button_top}>
            <button 
            className={styles.button}
            onClick={onLogout}
            >Exit</button>

            <button
             className={styles.button} 
            onClick={onNewClick}
            >New application</button>
            </div>

            {showForm ? (
                <div className={styles.formCard}>
                    <h2 className={styles.formTitle}>Application form</h2>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label htmlFor='company'>Company</label>
                        <input
                            className={styles.input}
                            id='company'
                            name='company'
                            value={formData.company}
                            onChange={handleChange}
                            placeholder='Company'
                            required
                        />

                        <label htmlFor='position'>Position</label>
                        <input
                            className={styles.input}
                            id='position'
                            name='position'
                            value={formData.position}
                            onChange={handleChange}
                            placeholder='Position'
                            required
                        />

                        <label htmlFor='location'>Location</label>
                        <input
                            className={styles.input}
                            id='location'
                            name='location'
                            value={formData.location}
                            onChange={handleChange}
                            placeholder='Location'
                            required
                        />

                        <label htmlFor='jobType'>Job type</label>
                        <input
                            className={styles.input}
                            id='jobType'
                            name='jobType'
                            value={formData.jobType}
                            onChange={handleChange}
                            placeholder='Job type'
                        />

                        <label htmlFor='status'>Status</label>
                        <select
                            className={styles.input}
                            id='status'
                            name='status'
                            value={formData.status}
                            onChange={handleChange}
                        >
                            {statusOptions.map((status) => (
                                <option key={status} value={status}>
                                    {status}
                                </option>
                            ))}
                        </select>

                        <label htmlFor='applicationDate'>Application date</label>
                        <input
                            className={styles.input}
                            id='applicationDate'
                            name='applicationDate'
                            value={formData.applicationDate}
                            type='date'
                            onChange={handleChange}
                        />

                        <label htmlFor='jobLink'>Job link</label>
                        <input
                            className={styles.input}
                            id='jobLink'
                            name='jobLink'
                            value={formData.jobLink}
                            onChange={handleChange}
                            placeholder='Job link'
                        />

                        <label htmlFor='notes'>Notes</label>
                        <textarea
                            className={styles.input}
                            id='notes'
                            name='notes'
                            value={formData.notes}
                            onChange={handleChange}
                        />

                        <div className={styles.formActions}>
                            <button type='submit' className={styles.button}>
                                Save
                            </button>
                            <button type='button' className={`${styles.button} ${styles.buttonSmall}`} onClick={onCancel}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            ) : null}

            {applications.length === 0 ? (
                <p>No applications yet.</p>
            ) : (
                <ul className={styles.list}>
                    {applications.map((app) => (
                        <li className={styles.item} key={app.id}>
                            <span>{app.company} - {app.position} - {app.location} - {app.status}</span>
                            <div className={styles.itemActions}>
                                <button
                                    className={`${styles.button} ${styles.buttonSmall}`}
                                    onClick={() => onEdit(app)}
                                >
                                    Edit
                                </button>
                                <button
                                    className={`${styles.button} ${styles.buttonSmall} ${styles.buttonDanger}`}
                                    onClick={() => onDelete(app.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {isLoading && <p>Updating...</p>}
        </div>
    )

}

export default Dashboard;
