import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useLocation } from "react-router-dom";

const Forms = () => {
  const sourceLocation = "New York";
  const destinationLocation = "Paris";
  const ticket = Math.random().toString(36).substr(2, 9);
  const passengerData = useLocation().state[0];
  const data = useLocation().state[1][0];
  console.log(data)
  console.log(useLocation().state)
    const p =passengerData[passengerData.length - 1]
    console.log(p)
//   const passengerData = [
//     {
//       fullName: "John Doe",
//       age: 30,
//       ticketPrice: 100,
//       email: "john@example.com",
//     },
//     {
//       fullName: "Alice Smith",
//       age: 25,
//       ticketPrice: 120,
//       email: "alice@example.com",
//     },
//     {
//       fullName: "Bob Johnson",
//       age: 40,
//       ticketPrice: 150,
//       email: "bob@example.com",
//     },
//   ];

  const handleDownloadPDF = () => {
    const input = document.getElementById("ticket") as HTMLElement;

    html2canvas(input, { scrollY: -window.scrollY }).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4");
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 200;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 5, 13, imgWidth, imgHeight); // Adjust the position
      pdf.save("Journey_Details.pdf");
    });
  };

  return (
    <div>
      <div
        className="container-fluid"
        style={{
          backgroundImage:
            "url(https://st3.depositphotos.com/1105977/32206/i/450/depositphotos_322069858-stock-photo-passengers-commercial-airplane-flying-above.jpg)",
          backgroundSize: "cover",
          minHeight: "100vh",
          justifyContent: "center",
        }}
        id="ticket"
      >
        <h4>Fly High Ticket Confirmation</h4>
        <br />
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row justify-content-center"></div>
          <div className="card-body">
            <p>
              <strong>Source:</strong> {data.srcCode}
            </p>
            <p>
              <strong>Destination:</strong> {data.destCode}
            </p>
            <p>
              <strong>Ticket ID:</strong> {ticket}
            </p>
            <h3 className="h6" style={{ color: "#fff", marginBottom: "20px" }}>
              Passenger Details
            </h3>
            {p.map((passenger, index) => (
                index != p.length - 1 ?
              <div className="col-lg-4" key={index}>
                <div
                  className="card mb-4"
                  id={`pdf-content-${index}`}
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "#fff",
                  }}
                >
                  {/* Fly High logo with airplane icon */}
                  <div className="card-body mb-4">
                    <div className="table table-bordered text-white">
                      <h5>Passenger {index + 1}</h5>
                      <p>
                        <strong>Name:</strong> {passenger.name}
                      </p>
                      <p>
                        <strong>Age:</strong> {passenger.age}
                      </p>
                      <p>
                        <strong>Email:</strong> {passenger.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div> : null
            ))}
          </div>
        </div>
      </div>
      <button className="btn btn-primary" onClick={() => handleDownloadPDF()}>
        Download Ticket
      </button>
    </div>
  );
};

export default Forms;
