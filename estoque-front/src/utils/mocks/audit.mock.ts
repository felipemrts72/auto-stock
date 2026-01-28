import type { AuditItem } from '../../types/audit';


export const auditMock: AuditItem[] = [
  {
    id: '1',
    itemName: 'Correia Dentada',
    itemPhoto: '/images/item1.jpg',
    quantity: 2,
    unit: 'un',
    collaborator: 'Carlos Silva',
    serviceNumber: 'OS-4589',
    dateTime: '27/01/2026 14:32',
    status: 'completo',
  },
  {
    id: '2',
    itemName: 'Óleo Hidráulico',
    itemPhoto: '/images/item2.jpg',
    quantity: 5,
    unit: 'L',
    collaborator: 'João Santos',
    serviceNumber: 'VENDA-1022',
    dateTime: '27/01/2026 16:10',
    status: 'divergente',
  },
];