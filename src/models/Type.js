const connection = require('../configs/mysql')
const getData = `SELECT * FROM td_type`

module.exports = {
    readType: (e) => {
        return new Promise((resolve, reject) => {
            connection.query(getData,
                async (error, result) => {
                    if (result) {
                        resolve(result)
                    } else {
                        reject(new Error(error))
                    }
                })
            // connection.query({ getData })
            //     .then((res) => {
            //         resolve(res)
            //     })
            //     .catch((err) => {
            //         reject(err)
            //     })
        })
    }
}