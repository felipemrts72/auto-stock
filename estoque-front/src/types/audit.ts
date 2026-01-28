export type AuditStatus = 'completo' | 'incompleto' | 'divergente';

export interface AuditItem {
  id: string;
  itemName: string;
  itemPhoto: string;
  quantity: number;
  unit: 'un' | 'm' | 'kg' | 'par' | 'caixa'| 'L' | 'ml';
  collaborator: string;
  serviceNumber: string;
  dateTime: string;
  status: AuditStatus;
}
