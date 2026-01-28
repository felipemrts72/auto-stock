import type { AuditItem } from '../../types/audit';



interface Props {
  data: AuditItem;
  onClick: () => void;
}

const statusColor: Record<string, string> = {
  completo: 'blue',
  incompleto: 'orange',
  divergente: 'red',
};

const AuditCard: React.FC<Props> = ({ data, onClick }) => {
  return (
    <div
      className="audit-card"
      style={{ borderLeft: `6px solid ${statusColor[data.status]}` }}
      onClick={onClick}
    >
      <img src={data.itemPhoto} alt={data.itemName} />
      <h4>{data.itemName}</h4>
      <p>{data.quantity} {data.unit}</p>
      <p><strong>{data.collaborator}</strong></p>
      <p>{data.serviceNumber}</p>
      <small>{data.dateTime}</small>
    </div>
  );
};

export default AuditCard;
