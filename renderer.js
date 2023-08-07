const QRCode = require('qrcode');

function generateQR() {
    const url = document.getElementById('urlInput').value;
    const canvas = document.getElementById('qrCanvas');
    
    const size = parseInt(document.getElementById('sizeSelect').value);

    QRCode.toCanvas(canvas, url, {
        width: size,
        height: size,
        errorCorrectionLevel: 'H'
    }, function (error) {
        if (error) console.error(error);
        console.log('QR Code generated successfully!');
    });
}

document.querySelector('#generateButton').addEventListener('click', generateQR);
