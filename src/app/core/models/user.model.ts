import { Role } from './role.model';

export interface User {
  id: number;
  name: string;
  role: Role;
}
