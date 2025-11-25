import { z } from "zod";

export const thriftStoreSchemas = {
    createThriftStore: z.object({
        name: z
            .string()
            .min(1, "name is required")
            .maxLength(100, "name is too large"),
        description: z
            .string ()
            .min(1, "name is required")
            .maxLength(200, "name is too large"),
        address: z
            .string()
            .min(1, "address is required")
            .maxLength(200, "address is too large"),
        city: z
            .string()
            .min(1, "city is required")
            .maxLength(100, "city is too large"),
        uf: z
            .string()
            .min(1, "uf is required")
            .maxLength(5, "uf is too large"),
        phone: z
            .string()
            .min(10, "phone is required")
            .maxLength(50, "phone is too large"),
        email: z
            .email()
            .min(10, "email is required")
            .maxLength(100, "email is too large"),
        openingHours: z
            .string()
            .min(10, "openingHours is required")
            .maxLength(50, "openingHours is wrong"),
        socialMedia: z
            .url()
            .min(1, "socialMedia is required")
            .maxLength(50, "socialMedia is wrong"),
        images: z
            .array(z.object({
                imageUrl: z
                    .url("O 'imageUrl' deve ser uma URL válida.")
                    .min(1, "O 'imageUrl' não pode ser vazio."),
                isPrimary: z.boolean(),
            })).min(1, "O array de imagens não pode ser vazio."),
        latitude: z
            .number("latitude is required"),
        longitude: z
            .number("longitude is required"),
        categoryId: z
            .uuid("select any category")
    })
}