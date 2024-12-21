import { concurrency, createJsonQuery } from '@farfetched/core'
import { zodContract } from '@farfetched/zod'
import { z } from 'zod'

import { APP_SCRIPT_URL } from '@shared/config/app-script'
import { Brands } from '@shared/enums/brands'
import { Relevance } from '@shared/enums/relevance'

export const equipmentSchema = z.object({
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

const getGeneralDataQueryResponse = z.object({
  equipmentList: z.array(equipmentSchema).nonempty(),
  password: z.string().min(1)
})

export const getGeneralDataQuery = createJsonQuery({
  request: {
    method: 'GET',
    url: APP_SCRIPT_URL
  },
  response: {
    contract: zodContract(getGeneralDataQueryResponse)
  }
})

concurrency(getGeneralDataQuery, { strategy: 'TAKE_FIRST' })
