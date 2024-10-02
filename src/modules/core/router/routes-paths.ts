export const ROUTES_PATHS = {
  public: {
    search: '/',
    signIn: '/sign-in'
  },
  private: {
    duplicate: '/duplicate',
    invalidReplacement: '/invalid-replacement',
    obsoleteWithoutReplacement: '/obsolete-without-replacement',
    relevantWithReplacement: '/relevant-with-replacement',
    selfReplacement: '/self-replacement',
    withoutBrand: '/without-brand'
  }
} as const
