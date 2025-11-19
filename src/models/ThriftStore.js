import { DataTypes } from "sequelize";
import { database } from "../config/database.js";

export const ThriftStore = database.define("ThriftStore", {
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

    address: {
        type: DataTypes.STRING(200),
        allowNull: false
    },

    city: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    phoneNumber: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "phone_number"
    },

    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: {
            msg: 'Email already registered'
        },
        validate: {
            isEmail: {
                msg: 'Invalid Email'
            }
        }
    },
    openingHours: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "opening_hours"
    },

    website: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    socialMedia: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "social_media"
    },

    figure: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    map: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    categoryId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'category_id',
        references: {
            model: 'categories',
            key: 'id'
        }
    },
}, {
    tableName: 'thrift_store',
    timestamps: true, // Adiciona createdAt e updatedAt
    underscored: true // Usa snake_case no banco (created_at)
})
