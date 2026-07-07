import React, { useState } from 'react';
import { UserPlus, AlertCircle } from 'lucide-react';

const COURSES = [
  'Computer Science',
  'Data Science',
  'Business Administration',
  'Graphic Design',
  'Mechanical Engineering'
];

function StudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Student name is required';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!age) {
      newErrors.age = 'Age is required';
    } else {
      const parsedAge = parseInt(age, 10);
      if (isNaN(parsedAge) || parsedAge < 16 || parsedAge > 100) {
        newErrors.age = 'Age must be a valid number between 16 and 100';
      }
    }

    if (!course) {
      newErrors.course = 'Please select a course';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onAddStudent({
        name: name.trim(),
        age: parseInt(age, 10),
        course
      });
      
      // Reset form fields
      setName('');
      setAge('');
      setCourse('');
      setErrors({});
    }
  };

  return (
    <div className="form-panel">
      <h2 className="panel-title">
        <UserPlus size={20} className="logo-icon" />
        Add Student
      </h2>
      <form onSubmit={handleSubmit} className="student-form" noValidate>
        <div className="form-group">
          <label htmlFor="student-name" className="form-label">Full Name</label>
          <input
            id="student-name"
            type="text"
            className="form-input"
            placeholder="e.g. John Doe"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
            }}
          />
          {errors.name && (
            <span className="error-msg" id="name-error">
              <AlertCircle size={14} />
              {errors.name}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="student-age" className="form-label">Age</label>
          <input
            id="student-age"
            type="number"
            className="form-input"
            placeholder="e.g. 21"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              if (errors.age) setErrors(prev => ({ ...prev, age: '' }));
            }}
          />
          {errors.age && (
            <span className="error-msg" id="age-error">
              <AlertCircle size={14} />
              {errors.age}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="student-course" className="form-label">Course</label>
          <select
            id="student-course"
            className="form-input"
            value={course}
            onChange={(e) => {
              setCourse(e.target.value);
              if (errors.course) setErrors(prev => ({ ...prev, course: '' }));
            }}
          >
            <option value="">Select a course...</option>
            {COURSES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.course && (
            <span className="error-msg" id="course-error">
              <AlertCircle size={14} />
              {errors.course}
            </span>
          )}
        </div>

        <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
          <UserPlus size={18} />
          Register Student
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
