import { variantsObject } from '@/designSystem/themesObject/themesObject';

import { IDataTable } from '../../types/dataTable';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

export const DataTableSimpleActiveRowsStory: IDataTable = {
  variant: Object.values(variantsObject[themeSelected].DataTableVariantType || {})[0] as string,
  columns: [
    { field: 'ref', headerContent: 'Ref' },
    { field: 'firstName', headerContent: 'First name' },
    { field: 'lastName', headerContent: 'Last name' },
    { field: 'profile', headerContent: 'Profile' },
  ],
  rows: [
    { id: '1', ref: '1', firstName: 'John', lastName: 'Snow', profile: 'Admin' },
    { id: '2', ref: '2', firstName: 'Arya', lastName: 'Stark', profile: 'User' },
    { id: '3', ref: '3', firstName: 'Tyrion', lastName: 'Lannister', profile: 'User' },
    { id: '4', ref: '4', firstName: 'Daenerys', lastName: 'Targaryen', profile: 'User' },
    { id: '5', ref: '5', firstName: 'Cersei', lastName: 'Lannister', profile: 'Admin' },
    { id: '6', ref: '6', firstName: 'Sansa', lastName: 'Stark', profile: 'User' },
  ],
  activeRows: ['2', '5'],
};
