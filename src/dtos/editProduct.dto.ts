import z from "zod";

export interface EditProductInputDTO {
    idToEdit: string,
    id?: string,
    name?: string,
    price?: number
}

export interface EditProductOutputDTO {
    message: string,
    product: {
        id: string,
        name: string,
        price: number,
        createdAt: string
    }
}

export const editProductSchema = z.object({
    idToEdit: z.string(),
    id: z.string().optional(),
    name: z.string().min(2).optional(),
    price: z.number().positive().min(0).optional()
}).transform(data => data as EditProductInputDTO)

