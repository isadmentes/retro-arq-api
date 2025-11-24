import { z } from "zod";

export const thriftStoreSchemas = {
    createThriftStore: z.object({
        name: z
            .string()
            .min(1, "name is required")
            .maxLength(100, "name is too large"),
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
            .url()
            .min(1, "image is required")
            .maxLength(100, "image is too large"),
        latitude: z
            .float()
            .min(1, "latitude is required")
            .maxLength(100, "latitude is too large"),
        longitude: z
            .float()
            .min(1, "longitude is required")
            .maxLength(100, "longitude is too large"),
        category: z
            .string()



    })
}