import { Categories } from "../../models/Categories.js"
import { ThriftStore } from "../../models/ThriftStore.js"

export const makeThriftStoreRepository = () => {
    const create = async ({ address, categoryId, city, description, email, name, openingHours, phone, socialMedia, uf, website }) => {
        const thriftStore = ThriftStore.create({
            address, categoryId, city, description, email, name, openingHours, phone, socialMedia, uf, website
        })

        return thriftStore
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