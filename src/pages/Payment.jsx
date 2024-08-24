import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../components/Context/StoreContext";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

export default function App() {

  const { clearCart } = useContext(StoreContext);
  const navigate = useNavigate();

  // State to store form inputs
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expireDate: "",
    cvv: "",
  });

  // State to store validation errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form validation and payment
  const handlePayment = () => {
    const newErrors = {};

    // Validate inputs
    if (!formData.cardName) newErrors.cardName = "Cardholder's Name is required";
    if (!formData.cardNumber) newErrors.cardNumber = "Card Number is required";
    if (!formData.expireDate) newErrors.expireDate = "Expiration date is required";
    if (!formData.cvv) newErrors.cvv = "CVV is required";

    // If errors exist, update the error state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If no errors, proceed to payment
      setErrors({});
      clearCart(); // Clear the cart
      navigate("/success");
    }
  };

  return (
    <MDBContainer className="mt-32 py-5" fluid>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" lg="8" xl="5">
          <MDBCard className="rounded-3">
            <MDBCardBody className="flex flex-col gap-2 px-4 py-16">
              <div className="text-center mb-4">
                <h3 className='text-3xl'>Payment</h3>
              </div>
              <p className="fw-bold mb-4 pb-2">Saved cards:</p>
              <div className="d-flex flex-row align-items-center mb-4 pb-1">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                  alt="Mastercard"
                />
                <div className="flex-fill mx-3">
                  <div className="form-outline">
                    <MDBInput
                      label="Card Number"
                      id="form1"
                      type="text"
                      size="lg"
                      value="**** **** **** 3193"
                    />
                  </div>
                </div>
                <a href="#!">Remove card</a>
              </div>
              <div className="d-flex flex-row align-items-center mb-4 pb-1">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/visa.png"
                  alt="Visa"
                />
                <div className="flex-fill mx-3">
                  <div className="form-outline">
                    <MDBInput
                      label="Card Number"
                      id="form2"
                      type="text"
                      size="lg"
                      value="**** **** **** 4296"
                    />
                  </div>
                </div>
                <a href="#!">Remove card</a>
              </div>
              <p className="fw-bold mb-4">Card details:</p>
              <MDBInput
                label="Cardholder's Name"
                id="cardName"
                type="text"
                size="lg"
                value={formData.cardName}
                onChange={handleInputChange}
              />
              {errors.cardName && <p className="text-red-500">{errors.cardName}</p>}
              <MDBRow className="my-4">
                <MDBCol size="7">
                  <MDBInput
                    label="Card Number"
                    id="cardNumber"
                    type="text"
                    size="lg"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                  />
                  {errors.cardNumber && <p className="text-red-500">{errors.cardNumber}</p>}
                </MDBCol>
                <MDBCol size="3">
                  <MDBInput
                    label="Expire"
                    id="expireDate"
                    type="text"
                    size="lg"
                    placeholder="MM/YYYY"
                    value={formData.expireDate}
                    onChange={handleInputChange}
                  />
                  {errors.expireDate && <p className="text-red-500">{errors.expireDate}</p>}
                </MDBCol>
                <MDBCol size="2">
                  <MDBInput
                    label="CVV"
                    id="cvv"
                    type="text"
                    size="lg"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleInputChange}
                  />
                  {errors.cvv && <p className="text-red-500">{errors.cvv}</p>}
                </MDBCol>
              </MDBRow>
              <MDBBtn color="success" size="lg" block onClick={() => {
                handlePayment();
                window.scrollTo(0, 0);
              }}>
                Payment
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
