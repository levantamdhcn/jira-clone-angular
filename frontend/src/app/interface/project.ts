import { Issue } from './issue';
import { User } from './user';

export interface ProjectInterface {
  id: string;
  name: string;
  url: string;
  description: string;
  category: string;
  createAt: string;
  updateAt: string;
  issues: Issue[];
  users: User[];
}
