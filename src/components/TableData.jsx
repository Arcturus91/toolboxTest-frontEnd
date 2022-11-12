import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const TableData = (props) => {
  const { files } = props;

  return (
    <>
      {Array.isArray(files) ? (
        <>
          <Table striped bordered hover style={{ margin: 20 }}>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              {files.map((item) => {
                return (
                  <>
                    {item.lines.map((subItem, idx) => {
                      return (
                        <tr key={idx}>
                          <td>{item.file}</td>
                          <td>{subItem.text}</td>
                          <td>{subItem.number}</td>
                          <td>{subItem.hex}</td>
                        </tr>
                      );
                    })}
                  </>
                );
              })}
            </tbody>
          </Table>
        </>
      ) : (
        <>
          <Table striped bordered hover style={{ margin: 20 }}>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              <>
                {files.lines.map((subItem, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{files.file}</td>
                      <td>{subItem.text}</td>
                      <td>{subItem.number}</td>
                      <td>{subItem.hex}</td>
                    </tr>
                  );
                })}
              </>
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default TableData;
