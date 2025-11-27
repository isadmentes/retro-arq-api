import { Categories } from "../../models/Categories.js"

export const makeCategoryRepoSequelize = () => {
    const list = async () => {
        const categories = await Categories.findAll()

        return categories.map(category => category.toJSON())
    }

    return { list }
}