# Contact Form Implementation Options

The current contact form is set up but needs backend functionality. Here are your options:

## Option 1: EmailJS (Recommended - Easy Setup)

### Step 1: Sign up for EmailJS
1. Go to [emailjs.com](https://www.emailjs.com)
2. Create a free account
3. Set up an email service (Gmail, Outlook, etc.)

### Step 2: Get Your Keys
You'll need:
- Service ID
- Template ID  
- Public Key

### Step 3: Update the Contact Form
Replace the current `handleSubmit` function in `src/sections/Contact.tsx`:

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    {
      from_name: formData.name,
      from_email: formData.email,
      project_type: formData.projectType,
      timeline: formData.timeline,
      message: formData.message,
    },
    'YOUR_PUBLIC_KEY'
  )
  .then(() => {
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', projectType: '', timeline: '', message: '' });
  })
  .catch(() => {
    alert('Failed to send message. Please try again.');
  });
};
```

### Step 4: Install EmailJS
```bash
npm install @emailjs/browser
```

### Step 5: Rebuild and Deploy
```bash
npm run build
```
Then upload the new files to IONOS.

## Option 2: Formspree (Alternative)

### Step 1: Sign up for Formspree
1. Go to [formspree.io](https://formspree.io)
2. Create account and get form endpoint

### Step 2: Update Form Action
Change the form element to:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Option 3: PHP Script (Advanced)

If you want to handle it server-side with PHP on IONOS:

### Create contact.php:
```php
<?php
if ($_POST) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = 'ericolason@gmail.com';
    $subject = 'New Contact Form Submission';
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    
    if (mail($to, $subject, $body)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}
?>
```

### Update the form to submit to PHP:
```javascript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('/contact.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData)
  });
  
  const result = await response.json();
  if (result.success) {
    alert('Message sent successfully!');
  } else {
    alert('Failed to send message.');
  }
};
```

---

**Recommendation:** Start with EmailJS as it's the easiest to implement and doesn't require server-side coding.
