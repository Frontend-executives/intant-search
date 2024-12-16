import { Equipment } from '@shared/api'

export const findObsoletesWithoutReplacement = (
  equipments: Equipment[]
): Equipment[] => {
  return equipments.filter(({ relevance, replacement }) => {
    return relevance === 'no' && !replacement
  })
}
