# mask-text
Mask string

Mask string values based on character index of the string.

npm module: 
https://www.npmjs.com/package/mask-text

```javascript

import mask from 'mask-text'

const partiallyMaskedMobile = mask('+94123456789', 2, 4, '*') // Mask string partially, output > "+9***3456789"
const fullyMaskedMobile = mask('+94123456789', -1, -1, '*') // Mask string fully, output > "************"
```
