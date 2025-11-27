import { HttpError } from "../../utils/httpError.js"
import { makeThriftStoreRepository } from "./thriftStore.repository.js"

export const makeThriftStoreService = () => {
    const repo = makeThriftStoreRepository()
    const sortable = ['id', 'name', 'createdAt'];
    const dirOk = ['ASC', 'DESC'];

    const create = async ({ name, description, address, city, uf, phone, email, openingHours, socialMedia, website, images, latitude, longitude, categoryId }) => {
        const exist = await repo.findByEmail({ email })

        if (exist) {
            throw new HttpError("Email already in use", 409, "EMAIL_TAKEN")
        }

        const thriftStore = await repo.create({ name, description, address, city, uf, phone, email, openingHours, socialMedia, website, images, latitude, longitude, categoryId })

        return thriftStore
    }

    const list = async ({ q, categoryId, order = 'id', dir = 'ASC' }) => {
        if (!sortable.includes(order)) order = 'id';
        if (!dirOk.includes(String(dir).toUpperCase())) dir = 'ASC';

        return repo.list({ q, categoryId, order, dir });
    };

    const get = async ({ id }) => {
        console.log({id})

        const found = await repo.findById({ id });

        if (!found) throw new HttpError('Thift Store not found', 404, 'NOT_FOUND');

        return found;
    };

    return { create, list, get }

}