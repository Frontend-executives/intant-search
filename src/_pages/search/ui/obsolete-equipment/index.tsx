import { ReactElement, useState } from 'react'
import { Typography } from '@/shared/ui/typography'
import { BadgeX, Check, Copy, Search } from 'lucide-react'
import { Button } from '@/shared/lib/shad-cn/components/ui/button'
import { replacementSelected } from '../../model'
import { useUnit } from 'effector-react/compat'
import { cva } from 'class-variance-authority'
import { toast } from 'sonner'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/shared/lib/shad-cn/components/ui/tooltip'

const copyButtonVariants = cva('', {
  variants: {
    isCopied: {
      true: 'bg-green-600'
    }
  }
})

interface Props {
  replacement: string
}

export const ObsoleteEquipment = ({ replacement }: Props): ReactElement => {
  const onReplacementSelected = useUnit(replacementSelected)

  const [isCopied, setCopied] = useState<boolean>(false)

  const onCopyState = () => {
    setCopied(true)

    setTimeout(() => setCopied(false), 2000)
  }

  const copyReplacementToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(replacement.toUpperCase())
    } catch {
      toast.error(`Не удалось скопировать ${replacement.toUpperCase()}`, {
        description: 'Попробуйте еще раз',
        duration: 5000
      })
    }
  }

  const onCopyButtonClick = async () => {
    onCopyState()

    await copyReplacementToClipboard()
  }

  return (
    <div className={'flex flex-col gap-2'}>
      <div className="flex items-center justify-center gap-2">
        <Typography>Оборудование снято с производства</Typography>
        <BadgeX color={'#dc2625'} />
      </div>

      {!replacement ? (
        <Typography type={'small'}>
          Замена не предусмотрена. Обратитесь в отдел СВН
        </Typography>
      ) : (
        <div className={'flex items-center gap-2 justify-center'}>
          <Typography type={'small'}>
            Замена:{' '}
            <span className={'font-bold'}>{replacement.toUpperCase()}</span>
          </Typography>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size={'icon'}
                  onClick={() => onReplacementSelected(replacement)}
                >
                  <Search />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Проверить эту модель</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  disabled={isCopied}
                  size={'icon'}
                  className={copyButtonVariants({ isCopied })}
                  onClick={onCopyButtonClick}
                >
                  {isCopied ? <Check /> : <Copy />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>Скопировать эту модель</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}
    </div>
  )
}
