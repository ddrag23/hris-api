import { Role } from 'src/features/role/entities/role.entity';

export class User {
  id: number;
  name: string;
  email: string;
  role: Role;
  created_at: Date;
  update_at: Date;
}
