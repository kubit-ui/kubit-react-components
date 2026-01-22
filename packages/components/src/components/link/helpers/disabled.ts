import type { AriaRole } from 'react';

interface disabledLinkReturnValue {
  role?: AriaRole;
}

// helper function
export const disabledLink = (
  disabled: boolean,
  role?: AriaRole,
): disabledLinkReturnValue => {
  const roleRes = disabled && !role ? 'link' : role;
  return { role: roleRes };
};
