import React, { useContext, useState } from "react";
import "./payment.scss";
import { Context } from "../../utils/Context";
import payment from "../../assets/payments.png";

function Payment() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [feedback, setFeedback] = useState("");
  const { cartSubTotal } = useContext(Context);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Gửi dữ liệu đến server hoặc xử lý dữ liệu ở đây
    console.log("Email:", email);
    console.log("Số điện thoại:", phoneNumber);
    console.log("Phản hồi:", feedback);
    alert("Đã xác nhận thông tin khách hàng");
  };

  return (
    <div className="App">
      <p>Số tiền phải thanh toán là: {cartSubTotal}</p>
      <p>Vui lòng điền thông tin để shop liên hệ với bạn</p>
      <form onSubmit={handleSubmit}>
        <label>
          Địa chỉ email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <label>
          Số điện thoại:
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />
        </label>
        <label>
          Phản hồi:
          <textarea value={feedback} onChange={handleFeedbackChange} required />
        </label>
        <div className="d-flex">
          <button type="submit">Xác nhận</button>
          <img src={payment} alt="" />
        </div>
      </form>
    </div>
  );
}

export default Payment;
