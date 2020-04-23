const connection = require('../configs/mysql')

module.exports = {
    createRank: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO rank SET ?', data)
            connection.query('SELECT * FROM rank', (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    readRank: (clubname) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM rank WHERE clubname LIKE '%${clubname}%' ORDER BY points DESC`,
                (error, result) => {
                    if (error) reject(new Error(error))
                    resolve(result)
                })
        })
    },
    updateRank: (data, Id) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE rank SET ? WHERE id = ?', [data, Id])
            connection.query('SELECT * FROM rank ', (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    deleteRank: (data) => {
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM rank WHERE id = ?`, data)
            connection.query(`SELECT * FROM rank`, (error, result) => {
                if (error) reject(new Error(error))
                connection.query(`ALTER TABLE rank DROP id`)
                connection.query(`ALTER TABLE rank ADD id INT NOT NULL AUTO_INCREMENT PRIMARY KEY FIRST`)
                resolve(result)
            })
        })
    }
}