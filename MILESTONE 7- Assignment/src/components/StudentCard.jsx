import React from 'react';
import { Trash2, User, Award, Calendar } from 'lucide-react';

const courseThemes = {
  'Computer Science': {
    color: 'var(--primary)',
    bg: 'var(--primary-light)',
    border: 'var(--primary-glow)'
  },
  'Data Science': {
    color: 'var(--info)',
    bg: 'var(--info-light)',
    border: 'rgba(6, 182, 212, 0.4)'
  },
  'Business Administration': {
    color: 'var(--warning)',
    bg: 'var(--warning-light)',
    border: 'rgba(245, 158, 11, 0.4)'
  },
  'Graphic Design': {
    color: 'var(--success)',
    bg: 'var(--success-light)',
    border: 'rgba(16, 185, 129, 0.4)'
  },
  'Mechanical Engineering': {
    color: 'var(--danger)',
    bg: 'var(--danger-light)',
    border: 'rgba(244, 63, 94, 0.4)'
  }
};

function StudentCard({ student, onDelete }) {
  const theme = courseThemes[student.course] || {
    color: 'var(--primary)',
    bg: 'var(--primary-light)',
    border: 'var(--primary-glow)'
  };

  const cardStyle = {
    '--course-color': theme.color,
    '--course-badge-bg': theme.bg,
    '--course-border-color': theme.border
  };

  return (
    <div className="student-card" style={cardStyle}>
      <div className="card-header">
        <div className="student-details-main">
          <h2>{student.name}</h2>
          <div className="student-age">
            <Calendar size={14} />
            <span>{student.age} years old</span>
          </div>
        </div>
        <button 
          className="delete-btn" 
          onClick={() => onDelete(student.id)}
          title="Delete student"
          aria-label={`Delete ${student.name}`}
        >
          <Trash2 size={18} />
        </button>
      </div>
      
      <div className="card-footer">
        <span className="course-badge">
          <Award size={13} />
          {student.course}
        </span>
      </div>
    </div>
  );
}

export default StudentCard;
