import { DataTypes } from "sequelize";
import { database } from "../config/database.js";

export const Categories = database.define("Categories", {
    id: {
        type: DataTypes.UUID, // Mude para UUID
        defaultValue: DataTypes.UUIDV4, // Adicione o gerador de UUID v4
        primaryKey: true,
        allowNull: false, // Garante que não será nulo
        unique: true // Garante a unicidade (primaryKey já implica isso, mas é bom ser explícito)
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

}, {
    tableName: 'categories',
    timestamps: true, // Adiciona createdAt e updatedAt
    underscored: true // Usa snake_case no banco (created_at)
})

