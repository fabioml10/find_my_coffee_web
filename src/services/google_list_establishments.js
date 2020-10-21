import Api from './api'

const GoogleListEstablishmentsService = {
  index: (latitude, longitude) => Api.get(`/google_store?latitude=${latitude}&longitude=${longitude}`)
}

export default GoogleListEstablishmentsService
