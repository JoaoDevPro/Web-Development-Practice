function generateQRCode() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
  
    var vCardData = "BEGIN:VCARD\n" +
                    "VERSION:3.0\n" +
                    "N:" + name + "\n" +
                    "TEL;TYPE=CELL:" + phone + "\n" +
                    "EMAIL:" + email + "\n" +
                    "END:VCARD";
  
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: vCardData,
      width: 256,
      height: 256,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }
  