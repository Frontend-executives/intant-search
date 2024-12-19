import { Equipment } from '@shared/api'

export const findObsoletesWithoutReplacement = (
  equipmentList: Equipment[]
): Equipment[] => {
  return equipmentList.filter(({ relevance, replacement }) => {
    return relevance === 'no' && !replacement
  })
}
