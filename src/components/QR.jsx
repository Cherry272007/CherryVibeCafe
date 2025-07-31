import Modal from "./Modal";
import Swal from "sweetalert2";

const QR = ({ isOpen, onClose }) => {
  const handleClose = () => {
    onClose();
    Swal.fire({
      title: "Payment successful!",
      text: "Thank You!",
      icon: "success",
      confirmButtonColor: "green",
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="p-6 bg-white rounded text-center">
        <h2 className="text-2xl font-bold mb-4 border-b-1">Scan to Pay</h2>
        <div className="image flex gap-2 mt-4 mb-4 justify-center">
          <img
            className="w-[250px] shadow-lg"
            src="./image/ABA.JPEG"
            alt="ABA QR"
          />
          <img
            className="w-[250px] shadow-lg"
            src="./image/AC.JPG"
            alt="AC QR"
          />
        </div>
        <hr className="mt-4" />
        <button
          className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default QR;
