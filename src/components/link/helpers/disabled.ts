import { ROLES } from '@/types';

type disabledLinkReturnValue = {
  role?: string;
};

// helper function
export const disabledLink = (disabled: boolean, role?: string): disabledLinkReturnValue => {
  const roleRes = disabled && !role ? ROLES.LINK : role;
  return { role: roleRes };
};
