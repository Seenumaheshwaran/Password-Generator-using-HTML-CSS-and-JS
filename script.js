document.getElementById('generate').addEventListener('click', generatePassword);

function generatePassword() {
    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    
    let chars = [];
    if (uppercase) 
        chars += uppercaseChars;
    if (lowercase) 
        chars += lowercaseChars;
    if (numbers) 
        chars += numberChars;

    if(chars.length===0)
    {
        document.getElementById('result').innerText = 'Please select atleast one character type';
    }
    else{
    let password = '';
    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * chars.length);
        password += chars[random];
    }

    document.getElementById('result').innerText = password;
}
}
