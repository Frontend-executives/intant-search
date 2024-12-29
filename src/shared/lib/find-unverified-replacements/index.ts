import { Equipment } from '@shared/api'

export const findUnverifiedReplacements = (
  equipmentList: Equipment[]
): Equipment[] => {
  const unverifiedReplacements: Equipment[] = []

  equipmentList.forEach((equipment) => {
    const replacement = equipment.replacement

    if (!replacement) return

    const foundReplacement = equipmentList.find(({ model }) => {
      return model === replacement
    })

    if (!foundReplacement) unverifiedReplacements.push(equipment)
  })

  return unverifiedReplacements
}
