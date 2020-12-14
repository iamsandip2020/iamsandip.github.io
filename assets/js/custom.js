function sendEmail(name, email, msg) {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "noreply.iamsandip@gmail.com",
	Password : "sghorai93",
	To : 'iamsandip2020@gmail.com',
	From : "noreply.iamsandip@gmail.com",
	Subject : "Contact Us!!",
	Body : "Name : "+name+" Email : "+email+" Message : "+msg,
	}).then(
		message => console.log("")
	);
	swal("Message Sent", "You have sent message successfully.", "success");
}