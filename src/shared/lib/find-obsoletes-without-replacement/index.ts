import { Equipment } from '@shared/api'

export const findObsoletesWithoutReplacement = (
  equipmentList: Equipment[]
): Equipment[] => {
  return equipmentList.filter(
    ({ relevance, replacement, hikvision, hilook, hiwatch }) => {
      const hasNoReplacement = !replacement && !hikvision && !hilook && !hiwatch

      return relevance === 'no' && hasNoReplacement
    }
  )
}
