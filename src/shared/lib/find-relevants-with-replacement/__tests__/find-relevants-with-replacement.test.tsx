import { describe, expect, it } from '@jest/globals'

import { Equipment } from '@shared/api'
import { Brands } from '@shared/enums/brands'
import { Relevance } from '@shared/enums/relevance'
import { findRelevantsWithReplacement } from '@shared/lib/find-relevants-with-replacement'

describe('findRelevantsWithReplacement', () => {
  it('should return an empty array when the equipment list is empty', () => {
    const equipmentList: Equipment[] = []

    const result = findRelevantsWithReplacement(equipmentList)

    expect(result).toEqual([])
  })

  it('should return an empty array if no equipment is relevant', () => {
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
        brand: Brands.HIKVISION
      }
    ]

    const result = findRelevantsWithReplacement(equipmentList)

    expect(result).toEqual([])
  })

  it('should return only relevant equipment with replacements', () => {
    const equipmentList = [
      {
        model: 'model-a',
        relevance: Relevance.YES,
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
      },
      {
        model: 'model-c',
        relevance: Relevance.YES,
        replacement: '',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
      }
    ]

    const result = findRelevantsWithReplacement(equipmentList)

    expect(result).toEqual([
      {
        model: 'model-a',
        relevance: Relevance.YES,
        replacement: 'model-b',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
      }
    ])
  })
})
