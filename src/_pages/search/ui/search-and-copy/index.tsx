import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/shared/lib/shad-cn/components/ui/tooltip'
import { Button } from '@/shared/lib/shad-cn/components/ui/button'
import { Check, Copy, Search } from 'lucide-react'
import { useUnit } from 'effector-react'
import { replacementSelected } from '@/_pages/search/model'
import { Equipment } from '@/shared/api'
import { cva } from 'class-variance-authority'
import { ReactElement, useState } from 'react'
import { toast } from 'sonner'

const copyButtonVariants = cva('', {
  variants: {
    isCopied: {
      true: 'bg-green-600'
    }
  }
})

interface Props {
  model:
    | Equipment['replacement']
    | Equipment['hikvision']
    | Equipment['hilook']
    | Equipment['hiwatch']
}

export const SearchAndCopy = ({ model }: Props): ReactElement => {
  const onReplacementSelected = useUnit(replacementSelected)
  const [isCopied, setCopied] = useState(false)

  const processCopyStatus = (): void => {
    setCopied(true)

    setTimeout((): void => {
      setCopied(false)
    }, 2000)
  }

  const copyModelToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(model.toUpperCase())
    } catch {
      toast.warning(`Не удалось скопировать ${model.toUpperCase()}`)
    }
  }

  const onCopyEquipment = async (): Promise<void> => {
    processCopyStatus()

    await copyModelToClipboard()
  }

  return (
    <div className="flex items-center gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              onClick={(): string => onReplacementSelected(model)}
            >
              <Search />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Проверить модель</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              disabled={isCopied}
              size="icon"
              className={copyButtonVariants({
                isCopied: isCopied
              })}
              onClick={async (): Promise<void> => onCopyEquipment()}
            >
              {isCopied ? <Check /> : <Copy />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>Скопировать модель</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
