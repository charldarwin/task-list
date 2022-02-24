import axios from 'axios'
import { API_URL } from '../../endpoints'

export const getTasks = async (quantity = null) => {
    try {
        const taskData = await axios.get(`${API_URL}/tasks/${quantity ? `?quantity=${quantity}` : ''}`)
        return taskData?.data
    } catch (error) {
        return []
    }
}