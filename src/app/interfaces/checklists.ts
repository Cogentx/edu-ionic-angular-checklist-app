import { ChecklistItem } from '../interfaces/checklistItem';

export interface Checklist {
  id: string;
  title: string;
  items: ChecklistItem[];
}
