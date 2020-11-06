const connection = require('../configs/mysql')

module.exports = {
    createBarang: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO td_barang SET ?', data, (error, result) => {
                if (result) {
                    connection.query('SELECT * FROM td_barang', (error, result) => {
                        if (error) reject(new Error(error))
                        resolve(result)
                    })
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    readBarang: (e) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM td_barang WHERE No_Container LIKE '%${e}%'`,
                (error, result) => {
                    if (error) reject(new Error(error))
                    resolve(result)
                })
        })
    },
    readBarangUpdate: (e) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM td_barang WHERE No_Container LIKE ${e}`,
                (error, result) => {
                    if (error) reject(new Error(error))
                    resolve(result)
                })
        })
    },
    readBarangAll: (e) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM td_barang WHERE No_Container`,
                (error, result) => {
                    if (error) reject(new Error(error))
                    resolve(result)
                })
        })
    },
    updateBarang: (data, Id) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE td_barang SET ? WHERE No_Container = ?', [data, Id])
            connection.query('SELECT * FROM td_barang ', (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    deleteBarang: (data) => {
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM td_barang WHERE No_Container = ?`, data, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    }
}