import ungapStructuredClone from '@ungap/structured-clone';

export const structuredClone = self.structuredClone ?? ungapStructuredClone;
