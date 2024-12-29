import { describe, expect, it } from '@jest/globals'

import { Equipment } from '@shared/api'
import { Brands } from '@shared/enums/brands'
import { Relevance } from '@shared/enums/relevance'

import { findUnverifiedReplacements } from '..'

describe('findUnverifiedReplacements', () => {
  it('should return an empty array when the equipment list is empty', () => {
    const equipments: Equipment[] = []

    const result = findUnverifiedReplacements(equipments)

    expect(result).toEqual([])
  })

  it('should return an empty array when no unverified replacements are found', () => {
    const equipments = [
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
        relevance: Relevance.YES,
        replacement: '',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
      },
      {
        model: 'model-c',
        relevance: Relevance.NO,
        replacement: 'model-d',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
      },
      {
        model: 'model-d',
        relevance: Relevance.YES,
        replacement: '',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
      }
    ]

    const result = findUnverifiedReplacements(equipments)

    expect(result).toEqual([])
  })

  it('should return empty array with empty replacement', () => {
    const equipments = [
      {
        model: 'model-a',
        relevance: Relevance.YES,
        replacement: '',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
      }
    ]

    const result = findUnverifiedReplacements(equipments)

    expect(result).toEqual([])
  })

  it('should return equipments with unverified replacements', () => {
    const equipments = [
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
      },
      {
        model: 'model-d',
        relevance: Relevance.NO,
        replacement: 'model-e',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
      },
      {
        model: 'model-e',
        relevance: Relevance.YES,
        replacement: '',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
      },
      {
        model: 'model-f',
        relevance: Relevance.NO,
        replacement: 'model-g',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
      }
    ]

    const result = findUnverifiedReplacements(equipments)

    expect(result).toEqual([
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
        model: 'model-f',
        relevance: Relevance.NO,
        replacement: 'model-g',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
      }
    ])
  })
})
