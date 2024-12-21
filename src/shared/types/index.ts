import { z } from 'zod'

import { equipmentSchema } from '@shared/api'

export type Equipment = z.infer<typeof equipmentSchema>
