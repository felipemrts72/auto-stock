import type { AuditItem } from '../../types/audit';

interface Props {
  data: AuditItem;
  onClick: () => void;
}

const AuditCard: React.FC<Props> = ({ data, onClick }) => {
  let statusColor = '#2196F3'; // Azul por padrão
  if (data.status === 'incompleto') statusColor = '#FFA500'; // Laranja
  if (data.status === 'divergente') statusColor = '#f44336'; // Vermelho

  return (
    <div className="audit-card" onClick={onClick}>
      <div
        style={{
          width: '100%',
          height: '6px',
          backgroundColor: statusColor,
          borderRadius: '4px',
          marginBottom: '10px',
        }}
      />
      <img src={data.itemPhoto} alt={data.itemName} />
      <h4>{data.itemName}</h4>
      <p>
        {data.quantity} {data.unit}
      </p>
      <p>{data.collaborator}</p>
      <p>Serviço: {data.serviceNumber}</p>
      <p>{new Date(data.dateTime).toLocaleString()}</p>
    </div>
  );
};

export default AuditCard;
