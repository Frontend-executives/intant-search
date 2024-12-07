import { ReactElement } from 'react'
import Image from 'next/image'
import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/lib/shad-cn/components/ui/button'

interface Props {
  title: string
  description: string
  image: string
  button: {
    text: string
    handler: () => void
  } | null
}

export const Notification = ({
  image,
  title,
  description,
  button
}: Props): ReactElement => {
  return (
    <div className="flex-grow p-6 flex items-center justify-center w-full">
      <div className="text-center flex flex-col items-center justify-center gap-6 max-w-[500px]">
        <Image
          draggable="false"
          src={image}
          alt={title}
          width={400}
          height={400}
        />
        <Typography type={'h1'}>{title}</Typography>
        <Typography type={'p'}>{description}</Typography>
        {button && (
          <Button className={'w-1/2'} onClick={button.handler}>
            {button.text}
          </Button>
        )}
      </div>
    </div>
  )
}
