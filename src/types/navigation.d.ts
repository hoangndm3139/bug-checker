import { ComponentType, Element } from 'react';

export interface IRoute {
  name: string;
  icon: JSX.Element | string;
  items?: any;
  path: string;
  secondary?: boolean | undefined;
}
interface RoutesType {
  name: string;
  layout: string;
  icon: JSX.Element | string;
  path: string;
  secondary?: boolean | undefined;
}
