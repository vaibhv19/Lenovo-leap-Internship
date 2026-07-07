import React from 'react';
import StudentCard from './StudentCard';
import { GraduationCap } from 'lucide-react';

function StudentList({ students, onDelete, isFiltered }) {
  if (students.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon-wrapper">
          <GraduationCap size={44} />
        </div>
        <h3>{isFiltered ? 'No matches found' : 'No students registered'}</h3>
        <p>
          {isFiltered 
            ? 'Try adjusting your search query or course filters to find students.' 
            : 'Get started by filling out the form on the left to add your first student record.'}
        </p>
      </div>
    );
  }

  return (
    <div className="student-grid">
      {students.map((student) => (
        <StudentCard 
          key={student.id} 
          student={student} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
}

export default StudentList;
