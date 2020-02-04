import axios from 'axios'

const trialService = axios.create({
  baseURL: 'http://localhost:8080/trial',
  headers: { 'Content-Type': 'application/json' }
})

export const getTrials = () => trialService.get().then(response => response.data)

export const updateTrial = (id, data) => trialService.put(`/${id}`, data).then(response => response.data)
