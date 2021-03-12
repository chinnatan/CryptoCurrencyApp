const axios = require('axios')
const apiConfig = require('../api_config.json')
const baseURL = apiConfig.BASE_URL_BITKUB_API

exports.getStatus = (req, res) => {
    const API_NAME = "GET-STATUS"
    const STATUS_API = apiConfig.NON_SECURE_ENDPOINT.STATUS_API
    const URL = baseURL.concat(STATUS_API)

    console.info(`[${API_NAME}][URL] : ${URL}`)

    axios.get(URL).then(function (rs) {
        console.info(`[${API_NAME}][GET] : ${URL}`)
        console.info(`[${API_NAME}][RS] : ${JSON.stringify(rs.data)}`)

        return res.status(200).json(rs.data)
    }).catch(function (error) {
        console.error(error)
    })
}