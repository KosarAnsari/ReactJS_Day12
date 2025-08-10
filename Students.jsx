function Student({ student }) {
  return (
    <>
      <div>
        <h3>Students Data</h3>
        {student.map((student) => (
          <ul>
            <li>Name:{student.name}</li>
            <li>Age:{student.age}</li>
            <li>Email:{student.email}</li>
          </ul>
        ))}
      </div>
    </>
  );
}
export default Student;
