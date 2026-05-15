const throwOnWarning = () => {
  throw new Error('unexpected warning')
}

// try to catch import-time warnings
process.on('warning', throwOnWarning)

export const mochaHooks = {
  beforeAll() {
    process.on('warning', throwOnWarning)
  },
}
