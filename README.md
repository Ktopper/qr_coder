# qr_coder


### Electron QR Code Generator App:

**Purpose**: To allow users to generate QR codes for specified URLs.

#### Components:

1. **Main Process (`main.js`)**:
   - Sets up and controls the primary Electron window.
   - Uses a BrowserWindow instance to render `index.html`.
   - Disables `nodeIntegration` for security and may utilize a `preload` script for secure communication between the main and renderer processes.

2. **Renderer (`index.html` & `renderer.js`)**:
   - **`index.html`**:
     - Contains input for URL.
     - Dropdown to select the QR code size.
     - Canvas to display the generated QR code.
     - Button to trigger the QR code generation.
   - **`renderer.js`**:
     - Uses the `qrcode` npm package to generate QR codes.
     - Retrieves the URL and desired size from the UI elements.
     - Renders the QR code to the canvas with the specified size.

#### Workflow:

1. User enters a URL into the provided input field.
2. User selects the desired QR code size from a dropdown menu.
3. Upon clicking the "Generate QR" button, the application generates a QR code representing the entered URL with the specified size.
4. The generated QR code is displayed on a canvas element within the app.

#### Dependencies:
- **electron**: Framework for creating native applications with web technologies.
- **qrcode**: npm package to generate QR codes.

### Conclusion:

The app is a simple Electron-based desktop application that offers a user-friendly interface for generating QR codes of varying sizes for user-provided URLs.

### how to run
in the terminal type 'npm install'
then after install, type 'npm start'