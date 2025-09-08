    // Assuming you have an input field to get the data
    const dataToEncode = document.getElementById('dataInput').value; 

    // Create a new QRCode instance
    const qrcode = new QRCode(document.getElementById("qrcode"), {
        text: dataToEncode, // The data you want to encode in the QR code
        width: 128,          // Width of the QR code in pixels
        height: 128,         // Height of the QR code in pixels
        colorDark: "#000000", // Dark color of the QR code modules
        colorLight: "#ffffff", // Light color of the QR code modules
        correctLevel: QRCode.CorrectLevel.H // Error correction level (L, M, Q, H)
    });
