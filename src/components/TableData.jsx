import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const TableData = (props) => {
  const { files } = props;
  console.log(files);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {files.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.file}</td>
              <td>{item.lines[0].text}</td>
              <td>{item.lines[0].number}</td>
              <td>{item.lines[0].hex}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableData;
