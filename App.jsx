import College from "./College";

function App() {
  const collegeData = [
    {
      name: 'IET Alwar',
      city: 'Alwar',
      website: 'www.iet.com',
      student: [
        {
          name: 'Anil',
          age: 29,
          email: 'anil@test.com',
        },
        {
          name: 'Peter',
          age: 28,
          email: 'peter@test.com',
        },
        {
          name: 'Bruce',
          age: 27,
          email: 'bruce@test.com',
        },
      ],
    },
    {
      name: 'IIT Delhi',
      city: 'Delhi',
      website: 'www.iit.com',
      student: [
        {
          name: 'Anil',
          age: 29,
          email: 'anil@test.com',
        },
        {
          name: 'Peter',
          age: 28,
          email: 'peter@test.com',
        },
        {
          name: 'Bruce',
          age: 27,
          email: 'bruce@test.com',
        },
      ],
    },
    {
      name: 'KCIET Hisar',
      city: 'Hisar',
      website: 'www.kciet.com',
      student: [
        {
          name: 'Anil',
          age: 29,
          email: 'anil@test.com',
        },
        {
          name: 'Peter',
          age: 28,
          email: 'peter@test.com',
        },
        {
          name: 'Bruce',
          age: 27,
          email: 'bruce@test.com',
        },
      ],
    },
  ];
  return (
    <>
      <h1>Nested Looping with Component</h1>
      {collegeData.map((college, index) => (
        <div key={index}>
         <College collegedata = {college}/>
        </div>
      ))}
    </>
  );
}
export default App;
