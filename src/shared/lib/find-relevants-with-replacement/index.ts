import { Equipment } from '@shared/api'

export const findRelevantsWithReplacement = (
  equipmentList: Equipment[]
): Equipment[] => {
  return equipmentList.filter(({ relevance, replacement }) => {
    if (!replacement) return false

    return relevance === 'yes' && replacement
  })
}
