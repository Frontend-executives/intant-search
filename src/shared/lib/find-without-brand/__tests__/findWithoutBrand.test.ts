import { describe, expect, it } from '@jest/globals'

import { Equipment } from '@shared/api'
import { Brands } from '@shared/enums/brands'
import { Relevance } from '@shared/enums/relevance'
import { findWithoutBrand } from '@shared/lib/find-without-brand'

describe('findWithoutBrand', () => {
  it('should return an empty array when the equipment list is empty', () => {
    const equipmentList: Equipment[] = []

    const result = findWithoutBrand(equipmentList)

    expect(result).toEqual([])
  })

  it('should return an empty array if all equipment have a brand', () => {
    const equipmentList = [
      {
        model: 'model-a',
        relevance: Relevance.NO,
        replacement: 'model-b',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
      },
      {
        model: 'model-b',
        relevance: Relevance.NO,
        replacement: 'model-c',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
      }
    ]

    const result = findWithoutBrand(equipmentList)

    expect(result).toEqual([])
  })

  it('should return a list of equipment without a brand', () => {
    const equipmentList = [
      {
        model: 'model-a',
        relevance: Relevance.NO,
        replacement: 'model-b',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
      },
      {
        model: 'model-b',
        relevance: Relevance.NO,
        replacement: '',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: '' as Brands
      },
      {
        model: 'model-c',
        relevance: Relevance.NO,
        replacement: 'model-d',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: '' as Brands
      }
    ]

    const result = findWithoutBrand(equipmentList)

    expect(result).toEqual([
      {
        model: 'model-b',
        relevance: Relevance.NO,
        replacement: '',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: '' as Brands
      },
      {
        model: 'model-c',
        relevance: Relevance.NO,
        replacement: 'model-d',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: '' as Brands
      }
    ])
  })
})
