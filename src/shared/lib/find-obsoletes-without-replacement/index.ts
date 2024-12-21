import { Equipment } from '@shared/types'

export const findObsoletesWithoutReplacement = (
  equipmentList: Equipment[]
): Equipment[] => {
  return equipmentList.filter(({ relevance, replacement }) => {
    return relevance === 'no' && !replacement
  })
}
