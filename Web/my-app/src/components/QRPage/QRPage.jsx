import React, { Component } from 'react';
import QrReader from 'react-qr-reader'
import './QRPage.css';

class QRPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          delay: 300,
          message: "Please scan the QR code",
        };
        this.handleScan = this.handleScan.bind(this);
      }
      handleScan(data) {
        if (data) {
          this.setState({ result: data });
        }
      }
      handleError(err) {
        console.error(err);
      }
      render() {
        return (
          <div>
            <QrReader 
              delay={this.state.delay}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: "100%", height: "100%"}}
            />
            <p className="qr-description">{this.state.message}</p>
          </div>
        );
      }

    
}

export default QRPage;