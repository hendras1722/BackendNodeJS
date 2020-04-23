const con = require("../configs/mysql");

module.exports = {
    postRecord: (data) => {
        return new Promise((resolve, reject) => {
            con.query('INSERT INTO recordgame SET ?', data)
            if (data.score[2] >= data.score[0]) {
                con.query('INSERT INTO allleaguestandings (clubname, points) VALUES ("' + data.clubhomename + '","' + 0 + '")')
                con.query('INSERT INTO allleaguestandings (clubname, points) VALUES ("' + data.clubawayname + '","' + 3 + '")', (error, result) => {
                    if (error) reject(new Error(error))
                    resolve(result)
                })
            } else if (data.score[2] <= data.score[0]) {
                con.query('INSERT INTO allleaguestandings (clubname, points) VALUES ("' + data.clubawayname + '","' + 0 + '")')
                con.query('INSERT INTO allleaguestandings (clubname, points) VALUES ("' + data.clubhomename + '","' + 3 + '")', (error, result) => {
                    if (error) reject(new Error(error))
                    resolve(result)
                })
            } else if (data.score[2] === data.score[0]) {
                con.query('INSERT INTO allleaguestandings (clubname, points) VALUES ("' + data.clubawayname + '","' + 1 + '")')
                con.query('INSERT INTO allleaguestandings (clubname, points) VALUES ("' + data.clubhomename + '","' + 1 + '")', (error, result) => {
                    if (error) reject(new Error(error))
                    resolve(result)
                })
            }
        })
    },
    readLeague: () => {
        return new Promise((resolve, reject) => {
            con.query('SELECT * FROM allleaguestandings', (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    }
};