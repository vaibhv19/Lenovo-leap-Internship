import PropTypes from 'prop-types';

export default function FeatureCard({ icon: Icon, title, description, badge }) {
  return (
    <div className="card-glass" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', position: 'relative', overflow: 'hidden' }}>
      {badge && (
        <span style={{ 
          position: 'absolute', 
          top: '16px', 
          right: '16px', 
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', 
          color: '#ffffff', 
          fontSize: '0.75rem', 
          fontWeight: '700', 
          padding: '4px 10px', 
          borderRadius: '50px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          {badge}
        </span>
      )}
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '56px', 
        height: '56px', 
        borderRadius: '14px', 
        background: 'rgba(255, 255, 255, 0.03)', 
        border: '1px solid var(--border-color)', 
        color: 'var(--color-primary)', 
        marginBottom: '24px' 
      }}>
        {Icon && <Icon size={24} />}
      </div>

      <h3 style={{ marginBottom: '12px' }}>{title}</h3>
      <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>{description}</p>
    </div>
  );
}

FeatureCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  badge: PropTypes.string
};
