import React, { useState } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import toast from "react-hot-toast";


const ModelSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    fullName: "",
    Adress: "",
    Pincode: "",
    PhoneNumber: "",
  });

  const handleOrder = (e) => {
    e.preventDefault();
    if (
      !orderDetails.fullName ||
      !orderDetails.Adress ||
      !orderDetails.Pincode ||
      !orderDetails.PhoneNumber
    ) {
      return toast.error("All Fileds are required");
    } else {
      toast.success("Order is Placed");
      onCloseModal()
    }
  };

  const HandleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  function onCloseModal() {
    setOpenModal(false);
    setOrderDetails("");
  }
  return (
    <>
      
      <Button
        onClick={() => setOpenModal(true)}
        className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-1 text-sm text-white uppercase w-full"
      >
        Checkout
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label value="Enter Full Name" />
              </div>
              <TextInput
                name="fullName"
                value={orderDetails.fullName}
                onChange={HandleChange}
                autoComplete="off"
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label value="Enter Full Address" />
              </div>
              <TextInput
                type="text"
                value={orderDetails.Adress}
                autoComplete="off"
                required
                onChange={HandleChange}
                name="Adress"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label value="Enter Pincode" />
              </div>
              <TextInput
                name="Pincode"
                value={orderDetails.Pincode}
                onChange={HandleChange}
                autoComplete="off"
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label value="Enter Phone Number" />
              </div>
              <TextInput
                name="PhoneNumber"
                value={orderDetails.PhoneNumber}
                onChange={HandleChange}
                autoComplete="off"
                required
              />
            </div>

            <div className="w-full">
              <Button className="w-full" onClick={handleOrder}>
                Order Now
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModelSection;
