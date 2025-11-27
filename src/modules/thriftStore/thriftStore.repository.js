import { Op, where } from "sequelize"
import { Categories } from "../../models/Categories.js"
import { ThriftStore } from "../../models/ThriftStore.js"

export const makeThriftStoreRepository = () => {
    const create = async ({ name, description, address, city, uf, phone, email, openingHours, socialMedia, website, images, latitude, longitude, categoryId }) => {
        const thriftStore = ThriftStore.create({ name, description, address, city, uf, phone, email, openingHours, socialMedia, website, images, latitude, longitude, categoryId })

        return thriftStore
    }

    const list = async ({ q, categoryId, order = 'created_at', dir = 'ASC' }) => {
        const where = {};

        if (q) {
            where.name = { [Op.like]: `%${q}%` };
        }

        if (categoryId) {
            where.categoryId = categoryId;
        }

        const items = await ThriftStore.findAll({
            where,
            include: [{
                model: Categories,
                as: 'category',
                attributes: ['id', 'name']
            }],
            order: [[order, dir]]
        });

        return items.map(item => item.toJSON());
    }

    const findById = async ({ id }) => {
        const thriftStore = await ThriftStore.findByPk(id, {
            include: [{
                model: Categories,
                as: 'category',
                attributes: ['id', 'name']
            }]
        });

        return thriftStore ? thriftStore.toJSON() : null;
    }

    const findByEmail = async ({ email }) => {
        const thriftStore = await ThriftStore.findOne({
            where: { email },
            include: [{
                model: Categories,
                as: 'category',
                attributes: ['id', 'name']
            }]
        });

        return thriftStore ? thriftStore.toJSON() : null;
    }

    return { create, list, findByEmail, findById }
}