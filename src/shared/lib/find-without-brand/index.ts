import { Equipment } from '@shared/api'

export const findWithoutBrand = (equipmentList: Equipment[]): Equipment[] => {
  return equipmentList.filter((equipment) => equipment.brand === '')
}
