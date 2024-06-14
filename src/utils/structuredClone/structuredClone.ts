// eslint-disable-next-line node/no-extraneous-import
import ungapStructuredClone from '@ungap/structured-clone';

export const structuredClone = self.structuredClone ?? ungapStructuredClone;
