function SendOTP() {
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify') [0];

    let otp_code = Math.floor(Math.random())
    Email.send({
        SecureToken : "4b3eca1e-1147-4ffa-bd8f-ce0149bb0da9",
        To : email.values,
        From : "goesrizky1989@gmail.com",
        Subject : "Email OTP Using",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}