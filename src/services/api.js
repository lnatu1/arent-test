import { gallery } from '/src/data/home-data.js'

const getRecords = () => {
    return new Promise((resolve) => {
        resolve(gallery())
    })
}

export { getRecords }