import { Equipment } from '@shared/api'

export const findSelfReplacement = (
  equipmentList: Equipment[]
): Equipment[] => {
  return equipmentList.filter(({ model, replacement }) => {
    if (!replacement) return false

    return model === replacement
  })
}
