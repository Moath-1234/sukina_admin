import React from 'react';
import { CPagination } from '@coreui/react';

export const Pagination = ({ page, pages, onActivePageChange }) => <CPagination activePage={ page } pages={ pages } onActivePageChange={ onActivePageChange } />;
