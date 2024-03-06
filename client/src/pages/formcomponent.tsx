import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useLocation } from 'react-router-dom';

const Form: React.FC = () => {
  // Dummy passenger data
  const passengerData = useLocation().state
  console.log(passengerData)

  // Generate a unique ticket ID for each user
  const ticketIds = Array.from({ length: passengerData.length }, () => Math.random().toString(36).substr(2, 9));

  const handleDownloadPDF = (index: number) => {
    const input = document.getElementById(`pdf-content-${index}`) as HTMLElement;

    html2canvas(input)
      .then((canvas) => {
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save(`ticket_${passengerData[index].fullName}.pdf`);
      });
  };

  return (
    <div className="container-fluid" style={{ backgroundImage: 'url(https://st3.depositphotos.com/1105977/32206/i/450/depositphotos_322069858-stock-photo-passengers-commercial-airplane-flying-above.jpg)', backgroundSize: 'cover', minHeight: '100vh' }}>
      <div className="container d-flex justify-content-center align-items-center" style={{flexDirection:'column'}}>
        {/* Title */}
        <div className="d-flex justify-content-center align-items-center flex-column py-3">
          <h2 className="h5 mb-0 text-white">
            <a href="#" className="text-muted" style={{ textDecoration: 'none', color: '#fff' }}>Congratulations your ticket is confirmed!</a>
          </h2>
        </div>
        {/* Main content */}
        <div className="row justify-content-center">
          {passengerData[1].map((passenger, index) => (
           index !== passengerData.length - 1 ?
            <div className="col-lg-4" key={index}>
              <div className="card mb-4" style={{ borderRadius: '10px', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff' }}>
                <div className="card-body mb-4" id={`pdf-content-${index}`}>
                  <h3 className="h6" style={{ color: '#fff', marginBottom: '20px' }}>Passenger Details</h3>
                  <table className="table table-bordered text-white">
                    <tbody>
                      <tr>
                        <td>Full Name:</td>
                        <td>{passenger.name}</td>
                      </tr>
                      <tr>
                        <td>Age:</td>
                        <td>{passenger.age}</td>
                      </tr>
                      <tr>
                        <td>Email:</td>
                        <td>{passenger.email}</td>
                      </tr>
                      <tr>
                        <td>Ticket Price:</td>
                        <td>{passenger.ticketPrice}</td>
                      </tr>
                      {/* <tr>
                        <td>From:</td>
                        <td>{passenger.fromLocation}</td>
                      </tr>
                      <tr>
                        <td>To:</td>
                        <td>{passenger.toLocation}</td>
                      </tr> */}
                      <tr>
                        <td>Ticket ID:</td>
                        <td>{ticketIds[index]}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <button className="btn btn-primary" onClick={() => handleDownloadPDF(index)}>Download Ticket</button>
            </div> : null
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
