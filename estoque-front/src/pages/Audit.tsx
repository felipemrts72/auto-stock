import { useState } from 'react';
import AuditCard from '../components/audit/AuditCard';
import AuditModal from '../components/audit/AuditModal';
import { auditMock } from '../utils/mocks/audit.mock';
import type { AuditItem } from '../types/audit';


const Audit: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<AuditItem | null>(null);

  return (
    <div className="page-center">
      <h2>Auditoria</h2>
      <p>Logs, retiradas e registros</p>

      {/* GRID NA PRÓPRIA PAGE */}
      <div className="audit-grid">
        {auditMock.map((item: AuditItem) => (
          <AuditCard
            key={item.id}
            data={item}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {/* MODAL */}
      <AuditModal
        data={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
};

export default Audit;
