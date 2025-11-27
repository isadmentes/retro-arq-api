import { makeCategoryRepoSequelize } from "./category.repository.js"

export const makeCategoryService = () => {
    const repo = makeCategoryRepoSequelize()

    const list = async () => {
        return await repo.list()
    }

    return { list }
}