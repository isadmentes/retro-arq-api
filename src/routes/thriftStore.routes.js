import { Router } from "express"
import { makeThriftStoreController } from "../modules/thriftStore/thriftStore.controller.js"
import { validate } from "../middlewares/validate.js"
import { thriftStoreSchemas } from "../modules/thriftStore/thriftStore.schemas.js"

export const thriftStoreRouter = () => {
    const r = Router()
    const ctrl = makeThriftStoreController()

    r.post("/", validate({ body: thriftStoreSchemas.createThriftStore }), ctrl.create)
    r.get("/", ctrl.list)
    r.get("/:id", ctrl.get)

    return r
}