import React from "react";
import {connect} from 'react-redux';
import CartItem from "../../components/cart/item"
import jsPDF from "jspdf";
import "jspdf-autotable"; // Import the autoTable plugin
import QRCode from "qrcode";
import MLH from "./invoicePics/MLH.png";
import stripe from "./invoicePics/stripe.png";
import master from "./invoicePics/master.png";


const Success = (props) => {
    const {items , total} = props;
    const query = new URLSearchParams(window.location.search);
    const sessionId = query.get("session_id");
    
    const generatePDF = async() => {
        const doc = new jsPDF();
        // Add MLH logo in the top left
        const mlhLogo = new Image();
        mlhLogo.src = MLH;
        doc.addImage(mlhLogo, "PNG", 10, 10, 50, 35);

        // Add Stripe logo in the top right
        const stripeLogo = new Image();
        stripeLogo.src = stripe;
        doc.addImage(stripeLogo, "PNG", 150, 10, 40, 20);

        // Add session ID
        doc.setFontSize(10);
        doc.text(`Transaction ID: ${sessionId}`, 150, 35);

        // Add provider email
        doc.setFontSize(12);
        doc.text("Provider's email: ckimposter@gmail.com", 14, 50);

        // Add contact info and date
        doc.text("Contact Us: +212612345678", 14, 60);
        doc.text(`Date: ${new Date().toLocaleDateString()}`, 150, 60);

        // Add products table
        const tableColumnWidths = [140, 50];
        doc.autoTable({
            startY: 70,
            head: [["Product", "Price"]],
            body: items.map((item) => [item.name, `$${item.price}`]),
            columnStyles: {
                0: { cellWidth: tableColumnWidths[0] },
                1: { cellWidth: tableColumnWidths[1], halign: 'right' },
            },
            margin: { left: 14, right: 14 },
        });
        const y = doc.autoTableEndPosY() + 10;

        // Add total
        doc.setFontSize(12);
        doc.text("Total:", 160, y);
        doc.text(`$${total}`, 180, y);

        // Add conditions and terms
        const termsY = y + 20;
        doc.setFontSize(14);
        doc.text("Conditions and Terms:", 14, termsY);
        doc.setFontSize(10);
        doc.text("- Payment is due within 30 days of the invoice date unless otherwise specified in writing.", 20, termsY + 10);
        doc.text("- Late payments may be subject to a penalty fee of 1.5% per month on the outstanding balance.", 20, termsY + 17);
        doc.text("- Payments made via credit card are subject to a 3% processing fee.", 20, termsY + 24);
        doc.text("- Products are covered by a 1-year warranty against defects in materials and workmanship.", 20, termsY + 31);
        doc.text("- Returns must be requested within 14 days of receipt and are subject to approval.", 20, termsY + 38);
        doc.text("- The total liability of the company, shall not exceed the total amount paid by the customer for the product or service.", 20, termsY + 45);

        // Add copyright
        const copyrightY = termsY + 55;
        doc.setFontSize(10);
        doc.text(`© ${new Date().getFullYear()} MLH. All Rights Reserved.`, 20, copyrightY);


        const qrCodeData = `Your transaction ID: ${sessionId}\nTotal: $${total}\nItems:\n${items.map(item => `${item.name} - $${item.price}`).join('\n')}`;

        // Generate QR code
        const qrCodeUrl = await QRCode.toDataURL(qrCodeData);

        // Add QR code to PDF
        const pageWidth = doc.internal.pageSize.getWidth();
        const qrCodeWidth = 50;
        const qrCodeHeight = 50;
        const qrCodeX = (pageWidth - qrCodeWidth) / 2;
        const qrCodeY = doc.internal.pageSize.getHeight() - 120; // Adjust as needed for spacing

        // Add QR code to PDF
        doc.addImage(qrCodeUrl, "PNG", qrCodeX, qrCodeY, qrCodeWidth, qrCodeHeight);

        // Add "Scan for details" text
        const textX = qrCodeX + qrCodeWidth / 2;
        const textY = qrCodeY + qrCodeHeight + 10; // Adjust as needed for spacing
        doc.text("Scan for details", textX, textY, { align: "center" });

        doc.save("receipt.pdf");
    };
    return(
        <>
        <div className="col-md-8" hidden>
            {items.map((item) => (
                <div className='my-3' key={item?.id}>
                    <CartItem product={item}/>
                    <hr/>
                </div>
            ))}
        </div>
        <style>
            {`
                .pdf-download {
                    margin-top: 20px;
                    text-align: center;
                }
                
                .pdf-download button {
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                }
                
                .pdf-download button:hover {
                    background-color: #0056b3;
                }
            
            
                body {
                  background: #dcf0fa;
              }
          
              .cont {
                  max-width: 380px;
                  margin: 50px auto;
                  overflow: hidden;
              }
          
              .printer-top {
                  z-index: 1;
                  border: 6px solid #666666;
                  height: 6px;
                  border-bottom: 0;
                  border-radius: 6px 6px 0 0;
                  background: #333333;
              }
          
              .printer-bottom {
                  z-index: 0;
                  border: 6px solid #666666;
                  height: 6px;
                  border-top: 0;
                  border-radius: 0 0 6px 6px;
                  background: #333333;
              }
          
              .paper-cont {
                  position: relative;
                  overflow: hidden;
                  height: 467px;
              }
          
              .paper {
                  background: #ffffff;
                  font-family: 'Poppins', sans-serif;
                  height: 447px;
                  position: absolute;
                  z-index: 2;
                  margin: 0 12px;
                  margin-top: -12px;
                  animation: print 5000ms cubic-bezier(0.68, -0.55, 0.265, 0.9) 1;
                  -moz-animation: print 5000ms cubic-bezier(0.68, -0.55, 0.265, 0.9) 1;
              }
          
              .main-contents {
                  margin: 0 12px;
                  padding: 24px;
              }
          
              // Paper Jagged Edge
                 .jagged-edge {
                     position: relative;
                     height: 20px;
                     width: 100%;
                     margin-top: -1px;
                 }
          
              .jagged-edge:after {
                  content: "";
                  display: block;
                  position: absolute;
              //bottom: 20px;
                  left: 0;
                  right: 0;
                  height: 20px;
                  background: linear-gradient(45deg,
                  transparent 33.333%,
                  #ffffff 33.333%,
                  #ffffff 66.667%,
                  transparent 66.667%),
                  linear-gradient(-45deg,
                          transparent 33.333%,
                          #ffffff 33.333%,
                          #ffffff 66.667%,
                          transparent 66.667%);
                  background-size: 16px 40px;
                  background-position: 0 -20px;
              }
          
              .success-icon {
                  text-align: center;
                  font-size: 48px;
                  height: 72px;
                  background: #359d00;
                  border-radius: 50%;
                  width: 72px;
                  height: 72px;
                  margin: 16px auto;
                  color: #fff;
              }
          
              .success-title {
                  font-size: 22px;
                  font-family: 'Poppins', sans-serif;
                  text-align: center;
                  color: #666;
                  font-weight: bold;
                  margin-bottom: 16px;
              }
          
              .success-description {
                  font-size: 15px;
                  font-family: 'Poppins', sans-serif;
                  line-height: 21px;
                  color: #999;
                  text-align: center;
                  margin-bottom: 24px;
              }
          
              .order-details {
                  text-align: center;
                  color: #333;
                  font-weight: bold;
          
              }
          
              .order-number-label {
                  font-size: 18px;
                  margin-bottom: 8px;
              }
          
              .order-number {
                  border-top: 1px solid #ccc;
                  border-bottom: 1px solid #ccc;
                  line-height: 48px;
                  font-size: 48px;
                  padding: 8px 0;
                  margin-bottom: 24px;
              }
          
              .complement {
                  font-size: 18px;
                  margin-bottom: 8px;
                  color: #32a852;
              }
          
              }
          
              @keyframes print {
                  0% {
                      transform: translateY(-90%);
                  }
          
                  100% {
                      transform: translateY(0%);
                  }
              }
          
              @-webkit-keyframes print {
                  0% {
                      -webkit-transform: translateY(-90%);
                  }
          
                  100% {
                      -webkit-transform: translateY(0%);
                  }
              }
          
              @-moz-keyframes print {
                  0% {
                      -moz-transform: translateY(-90%);
                  }
          
                  100% {
                      -moz-transform: translateY(0%);
                  }
              }
          
              @-ms-keyframes print {
                  0% {
                      -ms-transform: translateY(-90%);
                  }
          
                  100% {
                      -ms-transform: translateY(0%);
                  }
              }
            `}
        </style>
        <body>
            <div class="cont">
                <div class="printer-top"></div>

                <div class="paper-cont">
                    <div class="printer-bottom"></div>

                    <div class="paper">
                        <div class="main-contents">
                            <div class="success-icon">&#10004;</div>
                            <div class="success-title">
                                Payment Complete
                            </div>
                            <div class="success-description">
                                Thank you for completing the payment!We recieved your request purchase You will shortly get the updates.
                            </div>
                            <div className="pdf-download">
                                    <button onClick={generatePDF}>Download Receipt</button>
                            </div>
                        </div>
                        <div class="jagged-edge"></div>
                    </div>
                </div>
            </div>
        </body>
        </>
    )
}

const mapStateToProps =({cart}) => {
    const {items , total } = cart;
    return {items,total};
}

export default connect(mapStateToProps)(Success);