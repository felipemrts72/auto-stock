import type { AuditItem } from '../../types/audit';


interface Props {
  data: AuditItem | null;
  onClose: () => void;
}

const AuditModal: React.FC<Props> = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose}>Fechar</button>

        <h3>{data.itemName}</h3>

        <section>
          <h4>Dados principais</h4>
          <p>Colaborador: {data.collaborator}</p>
          <p>Serviço: {data.serviceNumber}</p>
          <p>Quantidade: {data.quantity} {data.unit}</p>
          <p>Data/Hora: {data.dateTime}</p>
          <p>Status: {data.status}</p>
        </section>

        {/* Depois podemos detalhar Seção 01..07 */}
      </div>
    </div>
  );
};

export default AuditModal;
