import { Equipment } from '@shared/api'

export const findRelevantsWithReplacement = (
  equipments: Equipment[]
): Equipment[] => {
  return equipments.filter(({ relevance, replacement }) => {
    if (!replacement) return false

    return relevance === 'yes' && replacement
  })
}
