import { z } from 'zod'

const equipmentSchema = z.object({
  model: z.string().min(1),
  relevance: z.union([z.literal('yes'), z.literal('no')]),
  replacement: z.string(),
  link: z.string().min(1)
  // brand: z.string()
})

export const getGeneralDataQueryResponse = z.object({
  equipmentList: z.array(equipmentSchema).nonempty(),
  password: z.string().min(1)
})

export type Equipment = z.infer<typeof equipmentSchema>
