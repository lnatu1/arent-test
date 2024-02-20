import { diary, gallery, recommends } from '/src/data/data.js'

const getRecords = () => {
    return new Promise((resolve) => {
        resolve(gallery())
    })
}
const getRecommends= () => {
    return new Promise((resolve) => {
        resolve(recommends())
    })
}
const getDiary = () => {
    const data = []
    for(let i = 0; i < 8; i++) {
        data.push(diary())
    }
    return new Promise((resolve) => {
        resolve(data)
    })
}

export { getDiary, getRecords, getRecommends }