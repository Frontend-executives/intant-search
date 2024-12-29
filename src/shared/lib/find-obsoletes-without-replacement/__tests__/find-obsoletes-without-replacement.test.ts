import { describe, expect, it } from '@jest/globals'

import { Equipment } from '@shared/api'
import { Brands } from '@shared/enums/brands'
import { Relevance } from '@shared/enums/relevance'
import { findObsoletesWithoutReplacement } from '@shared/lib/find-obsoletes-without-replacement'

describe('findObsoletesWithoutReplacements', () => {
  it('should return an empty array when the equipment list is empty', () => {
    const equipments: Equipment[] = []

    const result = findObsoletesWithoutReplacement(equipments)

    expect(result).toEqual([])
  })

  it('should return models that are obsolete and have no replacements or analogs', () => {
    const equipments = [
      {
        model: 'model-a',
        relevance: Relevance.NO,
        replacement: '',
        link: 'https://www.example.com',
        hikvision: '',
        hilook: '',
        hiwatch: '',
        brand: Brands.HIKVISION
      },
      {
        model: 'model-b',
        relevance: Relevance.NO,
        replacement: '',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: '',
        hiwatch: '',
        brand: Brands.HIKVISION
      },
      {
        model: 'model-c',
        relevance: Relevance.NO,
        replacement: '',
        link: 'https://www.example.com',
        hikvision: '',
        hilook: '',
        hiwatch: '',
        brand: Brands.HIKVISION
      }
    ]

    const result = findObsoletesWithoutReplacement(equipments)

    expect(result).toEqual([
      {
        model: 'model-a',
        relevance: Relevance.NO,
        replacement: '',
        link: 'https://www.example.com',
        hikvision: '',
        hilook: '',
        hiwatch: '',
        brand: Brands.HIKVISION
      },
      {
        model: 'model-c',
        relevance: Relevance.NO,
        replacement: '',
        link: 'https://www.example.com',
        hikvision: '',
        hilook: '',
        hiwatch: '',
        brand: Brands.HIKVISION
      }
    ])
  })

  it('should return an empty array when all models are relevant', () => {
    const equipments = [
      {
        model: 'model-a',
        relevance: Relevance.YES,
        replacement: '',
        link: 'https://www.example.com',
        hikvision: '',
        hilook: '',
        hiwatch: '',
        brand: Brands.HIKVISION
      },
      {
        model: 'model-b',
        relevance: Relevance.YES,
        replacement: '',
        link: 'https://www.example.com',
        hikvision: '',
        hilook: '',
        hiwatch: '',
        brand: Brands.HIKVISION
      }
    ]

    const result = findObsoletesWithoutReplacement(equipments)

    expect(result).toEqual([])
  })

  it('should return an empty array when all obsolete models have replacements or analogs', () => {
    const equipments = [
      {
        model: 'model-a',
        relevance: Relevance.NO,
        replacement: 'model-b',
        link: 'https://www.example.com',
        hikvision: '',
        hilook: '',
        hiwatch: '',
        brand: Brands.HIKVISION
      },
      {
        model: 'model-b',
        relevance: Relevance.NO,
        replacement: '',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: '',
        hiwatch: '',
        brand: Brands.HIKVISION
      }
    ]

    const result = findObsoletesWithoutReplacement(equipments)

    expect(result).toEqual([])
  })
})
