import { Typography } from '@/shared/ui/typography'
import { Input } from '@/shared/lib/shad-cn/components/ui/input'
import { Button } from '@/shared/lib/shad-cn/components/ui/button'

export const SearchPage = () => {
  return (
    <div className="max-w-[800px] flex flex-col gap-6 pt-6">
      <Typography type="h1">Поиск оборудования</Typography>
      <Typography type="p">
        Приложение помогает находить оборудование по брендам, проверять его
        актуальность и предлагает альтернативы для снятого с производства
        оборудования
      </Typography>
      <div className={'flex gap-2 pt-6'}>
        <Input type={'text'} placeholder={'Введите модель...'} />
        <Button>Удалить</Button>
      </div>
    </div>
  )
}
