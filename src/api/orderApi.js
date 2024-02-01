import axiosClient from './axiosClient'

const orderApi = {
  async get(id) {
    const url = `/products/${id}`
    return axiosClient.get(url)
  },

  async getAll(params) {
    const url = ''
    return axiosClient.get(url, {
      params: params
    })
  }
}

export default orderApi
