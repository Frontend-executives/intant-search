import { Equipment } from '@shared/types'

export const findRelevantsWithReplacement = (
  equipmentList: Equipment[]
): Equipment[] => {
  return equipmentList.filter(({ relevance, replacement }) => {
    if (!replacement) return false

    return relevance === 'yes' && replacement
  })
}
