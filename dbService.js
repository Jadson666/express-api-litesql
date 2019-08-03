const sqlite3 = require('sqlite3').verbose()
const TABLE_NAME = 'CUSTOMER_DATA'

const createTable = () => {
  const db = new sqlite3.Database('./lite.db')

  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (name TEXT)`)
    console.log(`table - ${TABLE_NAME} is ready`)
  })

  db.close()
}

const insertData = (name) => {
  const db = new sqlite3.Database('./lite.db')

  db.serialize(() => {
    console.log(`insert ${name}`)
    db.run(`INSERT INTO ${TABLE_NAME} (name) values (?)`, name)
  })

  db.close()
}

const getAllData = (callback) => {
  const db = new sqlite3.Database('./lite.db')

  db.all(`SELECT name FROM ${TABLE_NAME}`, (err, row) => {
    callback(row)
  })

  db.close()
}

const deleteAll = () => {
  const db = new sqlite3.Database('./lite.db')

  db.run(`DELETE FROM ${TABLE_NAME}`)

  db.close()
}

const deleteByName = (name) => {
  const db = new sqlite3.Database('./lite.db')

  db.run(`DELETE FROM ${TABLE_NAME} WHERE name = ?`, name)

  db.close()
}

const updateDate = (name1, name2) => {
  const db = new sqlite3.Database('./lite.db')

  db.run(`UPDATE ${TABLE_NAME} SET name = ? WHERE name = ?`, name2, name1)

  db.close()
}

module.exports = {
  createTable,
  getAllData,
  insertData,
  deleteAll,
  deleteByName,
  updateDate
}
