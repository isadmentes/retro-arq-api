import { Categories } from "../../models/Categories.js"
import { ThriftStore } from "../../models/ThriftStore.js"

export const makeThriftStoreRepository = () => {
    const create = async ({name, description, address, city, uf, phone, email, openingHours, socialMedia, images, latitude, longitude, categoryId}) => {

    const thriftStore = ThriftStore.create({name, description, address, city, uf, phone, email, openingHours, socialMedia, images, latitude, longitude, categoryId})

        return thriftStore
    }

    const list = async ({ q, category }) => {
        const where = {}

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

    return { create, findById }
}