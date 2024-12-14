import { z } from 'zod'
import { Brands } from '@/shared/enums/brands'
import { Relevance } from '@/shared/enums/relevance'

const equipmentSchema = z.object({
  model: z.string().min(1),
  relevance: z.union([z.literal(Relevance.YES), z.literal(Relevance.NO)]),
  brand: z.union([
    z.literal(''),
    z.literal(Brands.HILOOK),
    z.literal(Brands.HIWATCH),
    z.literal(Brands.HIKVISION)
  ]),
  [Brands.HILOOK]: z.string(),
  [Brands.HIWATCH]: z.string(),
  [Brands.HIKVISION]: z.string(),
  replacement: z.string(),
  link: z.string().min(1)
})

export const getGeneralDataQueryResponse = z.object({
  equipmentList: z.array(equipmentSchema).nonempty(),
  password: z.string().min(1)
})

export type Equipment = z.infer<typeof equipmentSchema>
