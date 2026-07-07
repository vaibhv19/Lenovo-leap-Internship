## MILESTONE 7 — Student Management UI

This project demonstrates a small, component-driven student management UI implemented with React and Vite. Key components live in `src/components` and include:

- `StudentCard` — Presentational card that displays a student's name, ID, and status. Accepts props: `student: { id, name, age, course, status }`, `onEdit(studentId)`, and `onDelete(studentId)`.
- `StudentForm` — Controlled form for creating or editing a student. Props: `initialValues` (optional), `onSubmit(values)`, `onCancel()`.
- `StudentList` — Renders a list of `StudentCard` components. Props: `students[]`, `onEdit(id)`, `onDelete(id)`.

Usage examples (conceptual):

1. Show a list of students:

```jsx
<StudentList students={students} onEdit={handleEdit} onDelete={handleDelete} />
```

2. Create or edit a student:

```jsx
<StudentForm initialValues={editingStudent} onSubmit={saveStudent} onCancel={() => setEditing(null)} />
```

Development notes:

- Run the dev server with `npm run dev`.
- Lint with `npm run lint`.
- A placeholder `test` script is provided in `package.json` until unit tests are added.