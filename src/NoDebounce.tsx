import { createElement, ReactNode } from 'react';
import NoDebounceContext from './NoDebounceContext';

const NoDebounce = ({ children }: { children: ReactNode }) => (
  <NoDebounceContext.Provider value={true} children={children} />
);

export default NoDebounce;
