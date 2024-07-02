import React from "react";

function Table() {
  let students = [
    { name: "Aman", Roll: 23, class: [{secName:"Alpha",SecStrength:800,SecGrade:"A"}]},
    { name: "Imran", Roll: 23, class:  [{secName:"Alpha",SecStrength:800,SecGrade:"A"}] },
    { name: "Ali", Roll: 3, class:  [{secName:"Alpha",SecStrength:800,SecGrade:"A"}] },
    { name: "Iqbal", Roll: 203, class:  [{secName:"Alpha",SecStrength:800,SecGrade:"A"}] },
  ];
  return (
    <>
      <h1>Here's the Deatils table of Students</h1>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th  className="text-center">Sr No</th>
            <th  className="text-center">Name</th>
            <th  className="text-center">Roll No</th>
            <th  className="text-center">Class</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item,i) => {
            return (
              <tr key={i}>
                <td className="text-center">{i}</td>
                <td className="text-center">{item.name}</td>
                <td  className="text-center">{item.Roll}</td>
                <td  className="text-center">{item.class.map((data,d)=>{
                    return (
                        <table className="table table-dark"  key={d}>
                            <tbody >
                            <tr>
                                <td>{data.secName}</td>
                                <td>{data.SecGrade}</td>
                                <td>{data.SecStrength}</td>
                            </tr>
                        </tbody>
                        </table>
                    )
                })}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
