import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

const NumericIdGuard = ({ children, redirectTo = '/reservation/list' }) => {
  const { id } = useParams();
  const isNumeric = /^\d+$/.test(id ?? '');
  return isNumeric ? children : <Navigate to={redirectTo} replace />;
};

export default NumericIdGuard;
