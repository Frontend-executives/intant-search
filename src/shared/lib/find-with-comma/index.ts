import { Equipment } from '@shared/api'

export const findWithComma = (equipmentList: Equipment[]): Equipment[] => {
  return equipmentList.filter(
    ({ model, replacement, hikvision, hilook, hiwatch }) => {
      const fieldsToCheck = [model, replacement, hikvision, hilook, hiwatch]

      return fieldsToCheck.some((field) => field.includes(','))
    }
  )
}
