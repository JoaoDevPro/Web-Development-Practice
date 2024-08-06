/*const gerar_qr_code = () => {
   generate_VCcard()
   alert('Formulário salvo')}

    function generate_VCcard(){
        var name = document.getElementById("name").value
        var number = document.getElementById("number").value
        var email = document.getElementById("email").value

        var vcard = "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "N:" + name + "\n" +
        "TEL;TYPE=CELL:" + number + "\n" +
        "EMAIL:" + email + "\n" + 
        "END:VCARD";

        console.log(vcard)    
        var qrCode = new QRCode(document.getElementById("qrcode"),{     
        text: vcard,
        width: 300,
        height: 300,
        correctLevel: QRCode.CorrectLevel.Q
        });*/

        // Quando o formulário for enviado
const gerar_qr_code = () => {
            generate_VCcard()


     function generate_VCcard(){
    // Obter os valores dos campos do formulário
        var nome = document.getElementById('name').value;
        var numero = document.getElementById('number').value;
        var email = document.getElementById('email').value;

        // Gerar o conteúdo do vCard
        var vcard = 'BEGIN:VCARD\n' +
                    'VERSION:3.0\n' +
                    'N:' + nome + ';;;\n' +
                    'TEL;TYPE=CELL:' + numero + '\n' +
                    'EMAIL:' + email + '\n' +
                    'END:VCARD';
        
        console.log(vcard);

        // Criar o código QR usando a biblioteca QRious
        var qr = new QRious({
            element: document.getElementById('qrcode'), // Elemento onde o código QR será renderizado
            value: vcard, // Dados do vCard
            size:300,// Tamanho do código QR (em pixels)

        });
        var qrElement = document.getElementById('qrcode');
        qrElement.innerHTML = '';
        qrElement.appendChild(qr.canvas);
        
        alert('Formulário salvo')
        
    }}
    






