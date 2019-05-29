import React, { Component } from 'react';
import QrReader from 'react-qr-reader'

import './QRPage.css';

class QRPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
          delay: 300,
          message: "Please scan the QR code",
          result: 'No result',
          granted: false
        };

        this.handleScan = this.handleScan.bind(this);
        this.openImageDialog = this.openImageDialog.bind(this);
        this.handlePermissions = this.handlePermissions.bind(this);
      }

      handleScan(data) {
        if (data) {
          this.setState({ result: data });
        }
      }

      handleError(err) {
        console.error(err);
      }

      openImageDialog() {
        this.refs.qrReader1.openImageDialog()
      }

      handlePermissions() {
        this.setState({
          granted: !this.state.granted
        });
      }

      render() {
        const { delay, message, granted } = this.state;

        return (
          <div className="qr-container">
            <QrReader 
              ref="qrReader1"
              delay={delay}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: "100%", height: "100%"}}
              legacyMode={granted}
              className="qr-section"
            />
            
            <button className="qr-upload" onClick={this.handlePermissions}>{granted ? 'Go to the Camera' : 'Upload the QR code'}</button>
            {
              granted && 
              <button className="qr-upload qr-submit" onClick={this.openImageDialog}>Upload image</button>
            }
            <p className="qr-description">{message}</p>
          </div>
        );
      }

    
}

export default QRPage;