import axios from 'axios'
import { API_URL } from '../../endpoints'

export const updateTask = async (body = null) => {
    try {
        if(body){
            const task = await axios.put(`${API_URL}/tasks/${body?.id}`, body)
            return task?.data
        } else {
            return null
        }
    } catch (error) {
        return null
    }
}