import { ReactElement } from 'react'

import { SearchPage } from '@pages/search/ui'

const Search = (): ReactElement => {
  return (
    <section className='flex-grow p-6 flex flex-col gap-6 items-center text-center'>
      <SearchPage />
    </section>
  )
}

export default Search
