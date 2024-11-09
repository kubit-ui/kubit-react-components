import { ROLES } from '@/types/role/role';

type disabledLinkReturnValue = {
  role?: string;
};

// helper function
export const disabledLink = (disabled: boolean, role?: string): disabledLinkReturnValue => {
  const roleRes = disabled && !role ? ROLES.LINK : role;
  return { role: roleRes };
};
