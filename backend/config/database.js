import { Sequelize } from 'sequelize'

const db = new Sequelize('test_new_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

export default db
