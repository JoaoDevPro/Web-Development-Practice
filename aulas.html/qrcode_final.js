const gerar_qr_code = () => {
    /*window.location.href = 'Escaneio.html';*/
     generate_VCcard();
    
    function generate_VCcard(){
   
    var nome = document.getElementById('name').value;
    var numero = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    
    var vcard = 'BEGIN:VCARD\n' +
                'VERSION:3.0\n' +
                'N:' + nome + ';;;\n' +
                'TEL;TYPE=CELL:' + numero + '\n' +
                'EMAIL:' + email + '\n' +
                'Area:' + post + '\n' +
                'END:VCARD';

    console.log(vcard);
    
   

 
    var qr = new QRious({
        element: document.getElementById('qrcode'), 
        value: vcard, 
        size:150,

    });


    var qrElement = document.getElementById('qrcode');
    qrElement.innerHTML = '';
    qrElement.appendChild(qr.canvas);

    alert('Formulário salvo')
    

    document.getElementById('baixar').addEventListener('click', function() {
        var link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = document.getElementById('qrcode').getElementsByTagName('canvas')[0].toDataURL();
        link.click()});



}};