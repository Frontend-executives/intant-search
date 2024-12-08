import { Typography } from '@/shared/ui/typography'
import { SearchInput } from './search-input'
import { SearchResultsStepper } from './search-result-stepper'

export const SearchPage = () => {
  return (
    <div className="max-w-[800px] flex flex-col gap-6 pt-6">
      <Typography type="h1">Проверка актуальности</Typography>
      <Typography>
        Введите запрос, а мы найдём нужные модели, проверим их доступность и
        предложим альтернативы, если они больше не выпускаются.
      </Typography>

      <SearchInput />

      <SearchResultsStepper />
    </div>
  )
}
