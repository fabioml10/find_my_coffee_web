import Api from './api'

const GoogleListEstablishmentsService = {
  index: (latitude, longitude) => Api.get(`/google_stores?latitude=${latitude}&longitude=${longitude}`)
}

export default GoogleListEstablishmentsService
