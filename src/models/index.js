import { database } from '../config/database.js'
import { env } from '../config/env.js'
import { Categories } from './Categories.js'
import { ThriftStore } from './ThriftStore.js'

const models = { ThriftStore,Categories }

Categories.hasMany(ThriftStore, {
    foreignKey: "categoryId",
    as: "category"
})

ThriftStore.belongsTo(Categories, {
    foreignKey: "categoryId",
    as: "category"
})

if (env.nodeEnv === 'development') {
    database.sync({ alter: true })
        .then(() => console.log('✅ Models synced'))
        .catch(err => console.error('❌ Error when synced:', err))
}
export { database, ThriftStore,Categories }
export default models
