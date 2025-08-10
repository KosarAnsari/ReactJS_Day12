import Student from './Students.jsx';
const College = ({ collegedata }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: '#ccc',
          padding: '20px',
          borderBottom: '2px solid black',
          margin: '20px',
          borderRadius: '10px',
        }}
      >
        <p>Name:{collegedata.name}</p>
        <ul>
          <li>
            <p>City:{collegedata.city}</p>
          </li>
          <li>
            <p>Website:{collegedata.website}</p>
          </li>
          <li>
            <Student student={collegedata.student} />
          </li>
        </ul>
      </div>
    </>
  );
};
export default College;
