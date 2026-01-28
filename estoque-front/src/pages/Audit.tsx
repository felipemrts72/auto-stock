import { useState } from 'react';
import AuditCard from '../components/audit/AuditCard';
import AuditModal from '../components/audit/AuditModal';
import { auditMock } from '../utils/mocks/audit.mock';
import type { AuditItem } from '../types/audit';
import '../styles/audit.css';

const Audit: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<AuditItem | null>(null);

  // Ordenar pelo mais recente (data/hora)
  const sortedAudit = [...auditMock].sort(
    (a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()
  );

  return (
    <div className="page-center" style={{ width: '100%' }}>
      <h2>Auditoria</h2>
      <p>Logs, retiradas e registros</p>

      <div className="audit-grid">
        {sortedAudit.map((item: AuditItem) => (
          <AuditCard
            key={item.id}
            data={item}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      <AuditModal
        data={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
};

export default Audit;
