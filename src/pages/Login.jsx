import styles from './Login.module.css'
import { useState } from 'react'

function Login({ onLoginSuccess }) {

    const [username , setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [erro, setErro] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
       
        const usernameClean = username.trim()
        const passwordClean = password.trim()

        if (!usernameClean || !passwordClean) {
            setErro('Enter the username and password.')
            return
        }
        setErro('')
        onLoginSuccess?.()
    }

        


    return(
        <div className={styles.container}>
        <div className={styles.title}>Job Track</div>

        <form className={styles.form} 
        onSubmit={handleSubmit}>
            <label htmlFor='username' 
            className={styles.label}>
                Username</label>
        
        <input
        name='username'
        id='username'
        value={username}
        className={styles.input}
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        />

            <label htmlFor='password'
            className={styles.label}>Password</label>

        <input
        name='password'
        id='password'
        value={password}
        className={styles.input}
        type="password"
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
        />
    

        <button
        className={styles.button}
        type='submit'  
        disabled={!username.trim() || !password.trim()}>
        Login</button>
        
        </form>

        {erro && 
            <p className={styles.error}>{erro}</p>
        }
        </div>
    )
}

export default Login
