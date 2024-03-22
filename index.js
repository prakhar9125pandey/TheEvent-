function sendMail(event) {
  event.preventDefault(); // Prevents the default form submission

  // Get values from form
  var name = document.getElementById('name').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  // Create email link
  var emailLink = 'mailto:' + 'prakhar9125panday@gmail.com' +
    '?subject=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent("Name: " + name + "\n\nMessage: " + message);

  // Open default email client
  window.open(emailLink);

  // Clear form
  document.getElementById('name').value = '';
  document.getElementById('subject').value = '';
  document.getElementById('message').value = '';
  document.getElementById('email').value = '';
}

const sendNewsLetterRequest = (event) => {
  event.preventDefault();
  const email = document.getElementById('news-email').value;
  const message = `I want to subscribe to your newsletter. My email is ${email}`;
  const emailLink = 'mailto:' + 'prakhar9125panday@gmail.com' + '?subject=' + encodeURIComponent("Newsletter Subscription") + '&body=' + encodeURIComponent(message);
  window.open(emailLink);
  document.getElementById('news-email').value = '';
}

function processForm(event) {
  event.preventDefault(); // Prevents the default form submission

  // Get the form element
  var form = document.getElementById('purchase-form');

  // Collect form data
  var name = form.querySelector('[name="your-name"]').value;
  var email = form.querySelector('[name="your-email"]').value;
  var passType = form.querySelector('[name="pass-type"]').value;

  // Validate collected data
  if (!name || !email || !passType) {
    alert('Please fill in all fields.');
    return;
  }

  // Construct email link
  var subject = 'Purchase Inquiry';
  var body = 'Name: ' + name + '\n' + 'Email: ' + email + '\n' + 'Pass Type: ' + passType;

  // Open default mail client
  window.location.href = 'mailto:prakhar9125panday@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

  // Clear form
  form.querySelector('[name="your-name"]').value = '';
  form.querySelector('[name="your-email"]').value = '';

}
