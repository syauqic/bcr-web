import React from "react";
import { Button, Card } from "react-bootstrap";

// const Upload = (props) => {
//   const { onClickStepper } = props;
//   return (
//     <>
//       <Card className="p-3 mt-3">
//         <p>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
//         <Button className="w-100 btn-success" onClick={() => onClickStepper(1)}>
//           Upload
//         </Button>
//       </Card>
//     </>
//   );
// };
function Upload(props) {
  const { onClickStepper } = props;
  return (
    <Card className="p-3 mt-3">
      <p>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
      <Button className="w-100 btn-success" onClick={() => onClickStepper(2)}>
        Upload
      </Button>
    </Card>
  );
}

export default Upload;
