import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  CalendarClock, 
  Search, 
  SlidersHorizontal 
} from 'lucide-react';

const INITIAL_STUDENTS = [
  { id: 1, name: 'Aarav Mehta', age: 20, course: 'Computer Science' },
  { id: 2, name: 'Ananya Sharma', age: 22, course: 'Data Science' },
  { id: 3, name: 'Kabir Verma', age: 21, course: 'Business Administration' },
  { id: 4, name: 'Riya Sen', age: 19, course: 'Graphic Design' },
  { id: 5, name: 'Dev Dixit', age: 23, course: 'Mechanical Engineering' }
];

function App() {
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [courseFilter, setCourseFilter] = useState('');

  // Add new student
  const handleAddStudent = (newStudent) => {
    const studentWithId = {
      ...newStudent,
      id: Date.now()
    };
    setStudents((prev) => [studentWithId, ...prev]);
  };

  // Delete student
  const handleDeleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  // Filter students based on search and course selection
  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCourse = courseFilter === '' || student.course === courseFilter;
    return matchesSearch && matchesCourse;
  });

  // Calculate statistics
  const totalStudents = students.length;
  const averageAge = totalStudents > 0 
    ? (students.reduce((acc, curr) => acc + curr.age, 0) / totalStudents).toFixed(1)
    : '0.0';
  
  const uniqueCourses = new Set(students.map(s => s.course)).size;

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="app-header">
        <div className="logo-area">
          <GraduationCap size={40} className="logo-icon" />
          <h1>AcademiaHub</h1>
        </div>
        <p className="app-subtitle">Premium Student Records Management Directory</p>
      </header>

      {/* Stats Counter Section */}
      <section className="stats-row">
        <div className="stat-card">
          <div className="stat-icon-wrapper students">
            <Users size={24} />
          </div>
          <div className="stat-details">
            <h3>Total Registered</h3>
            <div className="stat-number">{totalStudents}</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper age">
            <CalendarClock size={24} />
          </div>
          <div className="stat-details">
            <h3>Average Age</h3>
            <div className="stat-number">{averageAge} yrs</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper courses">
            <BookOpen size={24} />
          </div>
          <div className="stat-details">
            <h3>Active Courses</h3>
            <div className="stat-number">{uniqueCourses}</div>
          </div>
        </div>
      </section>

      {/* Search and Filters Bar */}
      <section className="search-filter-bar">
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="form-input search-input"
            placeholder="Search students by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="search-input-wrapper" style={{ flexGrow: 0 }}>
          <select
            className="form-input filter-select"
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
          >
            <option value="">All Courses</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Data Science">Data Science</option>
            <option value="Business Administration">Business Administration</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
          </select>
        </div>
      </section>

      {/* Dashboard Split Grid Layout */}
      <main className="dashboard-grid">
        {/* Left Side: Form */}
        <section>
          <StudentForm onAddStudent={handleAddStudent} />
        </section>

        {/* Right Side: List */}
        <section className="content-panel">
          <StudentList 
            students={filteredStudents} 
            onDelete={handleDeleteStudent} 
            isFiltered={searchQuery !== '' || courseFilter !== ''}
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} AcademiaHub. Built with React &amp; Vanilla CSS.</p>
      </footer>
    </div>
  );
}

export default App;
