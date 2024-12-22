import { concurrency, createJsonQuery } from '@farfetched/core'
import { zodContract } from '@farfetched/zod'

import { APP_SCRIPT_URL } from '../config'
import { getGeneralDataQueryResponse } from './schemas'

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
