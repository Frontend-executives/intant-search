import { z } from 'zod'

import { equipmentSchema } from './schemas'

export type Equipment = z.infer<typeof equipmentSchema>
