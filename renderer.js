const QRCode = require('qrcode');
const fs = require('fs');
const { ipcRenderer } = require('electron');

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

document.getElementById('saveButton').addEventListener('click', async function() {
    const canvas = document.getElementById('qrCanvas');
    const image = canvas.toDataURL();  // get Base64 encoded PNG

    // Request the main process to show the save dialog
    const result = await ipcRenderer.invoke('show-save-dialog');

    if (!result.canceled && result.filePath) {
        // Extract Base64 data
        const base64Data = image.replace(/^data:image\/png;base64,/, "");

        // Write to file
        fs.writeFile(result.filePath, base64Data, 'base64', err => {
            if (err) console.error(err);
            else console.log('Image saved successfully!');
        });
    }
});

document.querySelector('#generateButton').addEventListener('click', generateQR);
