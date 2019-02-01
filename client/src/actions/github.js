import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = 'http://localhost:3001'

export function getProfile() {
    axios.get('/profile').then(resp => {
        console.log("profile", resp.data)
        store.dispatch({
            type: 'GET_PROFILE',
            profile: resp.data
        })
    })
}

export function getRepos() {
    axios.get('/repos').then(resp => {
        console.log("repos", resp.data.repos)
        store.dispatch({
            type: 'GET_REPOS',
            repos: resp.data
        })
    })
}