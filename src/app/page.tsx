import { Input } from '@/shared/lib/shad-cn/components/ui/input'
import { Button } from '@/shared/lib/shad-cn/components/ui/button'
import { Typography } from '@/shared/ui/typography'

const SearchPage = () => {
  return (
    <section
      className={'flex-grow p-6 flex flex-col gap-6 items-center text-center'}
    >
      <div className="max-w-[800px] flex flex-col gap-6">
        <Typography type="h1">Поиск оборудования</Typography>
        <Typography type="p">
          Приложение помогает находить оборудование по брендам, проверять его
          актуальность и предлагает альтернативы для снятого с производства
          оборудования
        </Typography>
        <div className={'flex gap-2'}>
          <Input type={'text'} placeholder={'Введите модель...'} />
          <Button>Удалить</Button>
        </div>
      </div>
    </section>
  )
}

export default SearchPage
