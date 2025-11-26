import { makeThriftStoreService } from "./thriftStore.service.js";

export const makeThriftStoreController = () => {
    const service = makeThriftStoreService();

    const create = async (request, response, next) => {
        try {
            const { name, description, address, city, uf, phone, email, openingHours, socialMedia, images, latitude, longitude, categoryId } = request.body;

            const product = await service.create({
                name, description, address, city, uf, phone, email, openingHours, socialMedia, images, latitude, longitude, categoryId
            });
            return response.status(201).json(product);
        } catch (error) {
            return next(error);
        }
    };

    const list = async (request, respons, next) => {
        try {
            const data = await service.list(request.query);
            return respons.json(data);
        } catch (err) {
            return next(err);
        }
    };

    const get = async (request, respons, next) => {
        try {
            return respons.json(await service.get(Number(request.params.id)));
        }
        catch (err) {
            return next(err);
        }
    };

    return { create, list, get }
}