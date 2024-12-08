import { ReactElement } from 'react'
import Image from 'next/image'
import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/lib/shad-cn/components/ui/button'

const imageSizeBySizeProp = {
  S: 240,
  M: 300
} as const

const typographyTypeBySizeProp = {
  M: 'h1',
  S: 'h3'
} as const

interface Props {
  title: string
  description: string
  image: string
  button: {
    text: string
    handler: () => void
  } | null
  size: keyof typeof imageSizeBySizeProp
}

export const Notification = ({
  image,
  title,
  description,
  button,
  size
}: Props): ReactElement => {
  return (
    <div className="flex-grow p-6 flex items-center justify-center w-full">
      <div className="text-center flex flex-col items-center justify-center gap-3 max-w-[768px]">
        <Image
          draggable="false"
          src={image}
          alt={title}
          width={imageSizeBySizeProp[size]}
          height={imageSizeBySizeProp[size]}
          className={'aspect-square'}
        />
        <Typography type={typographyTypeBySizeProp[size]}>{title}</Typography>
        <Typography>{description}</Typography>
        {button && (
          <Button className={'w-1/2'} onClick={button.handler}>
            {button.text}
          </Button>
        )}
      </div>
    </div>
  )
}
