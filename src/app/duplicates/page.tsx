import { ReactElement } from 'react'

import { CoreDataProvider } from '@app/providers/core-data-provider'

const Duplicates = async (): Promise<ReactElement> => {
  return (
    <CoreDataProvider>
      <div>Duplicates</div>
    </CoreDataProvider>
  )
}

export default Duplicates
