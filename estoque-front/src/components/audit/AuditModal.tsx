import type { AuditItem } from '../../types/audit';

interface Props {
  data: AuditItem | null;
  onClose: () => void;
}

const AuditModal: React.FC<Props> = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          Fechar
        </button>

        <h3>{data.itemName}</h3>

        <section>
          <h4>Dados principais</h4>
          <p>Colaborador: {data.collaborator}</p>
          <p>Serviço: {data.serviceNumber}</p>
          <p>Quantidade: {data.quantity} {data.unit}</p>
          <p>Data/Hora: {data.dateTime}</p>
          <p>Status: {data.status}</p>
        </section>

        {/* Futuras Seções 01..07 */}
      </div>
    </div>
  );
};

export default AuditModal;
