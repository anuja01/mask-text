const mask = require('../index')

describe('Testing the functionality, this is the checklist', () => {
  it('should mask values according to given index', () => {
    const maskedMobile = mask('+94123456789', 2, 4, '*')
    expect(maskedMobile).toBe('+9***3456789')
  })

  it('should mask all values', () => {
    const maskedMobile = mask('+94123456789', -1 , -1, '*')
    expect(maskedMobile).toBe('************')
  })
})
