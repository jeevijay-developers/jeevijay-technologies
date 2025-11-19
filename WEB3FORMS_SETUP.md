# Web3Forms Setup Instructions

This project uses [Web3Forms](https://web3forms.com/) for handling contact form submissions without a backend.

## Setup Steps

### 1. Get Your Web3Forms Access Key

1. Visit [https://web3forms.com/](https://web3forms.com/)
2. Click on "Get Started for Free"
3. Sign up using your email or GitHub account
4. Once logged in, you'll see your **Access Key** on the dashboard
5. Copy this access key

### 2. Configure Your Access Key

Open the file `config/web3forms.ts` and replace the placeholder with your actual access key:

```typescript
export const WEB3FORMS_CONFIG = {
  accessKey: "YOUR_ACTUAL_ACCESS_KEY_HERE", // Replace this!
  // ... rest of the config
};
```

### 3. Customize Email Settings (Optional)

You can customize the email subject and other settings in the same file:

```typescript
emailConfig: {
  subject: "New Contact Form Submission - Jeevijay Technologies",
  replyTo: "@", // Uses the email provided in the form
},
```

## Features

✅ **Centralized Configuration**: All Web3Forms settings are in one place (`config/web3forms.ts`)

✅ **Reusable Component**: The same `ContactForm` component is used on both:
- Landing page (ContactSection)
- Dedicated Contact page

✅ **Form Validation**: Required fields are validated before submission

✅ **User Feedback**: Success and error messages are displayed after submission

✅ **Automatic Email Reply-To**: Responses will automatically use the email provided in the form

## Testing the Form

1. Make sure you've added your access key
2. Run the development server: `npm run dev`
3. Fill out the contact form and submit
4. Check your Web3Forms dashboard to see the submission
5. Check your email inbox for the notification

## Web3Forms Free Plan Limits

- ✅ 250 submissions per month
- ✅ File uploads
- ✅ Email notifications
- ✅ Spam filtering
- ✅ Custom redirect URLs

For more submissions, check the [Web3Forms pricing page](https://web3forms.com/#pricing).

## Troubleshooting

**Form not submitting?**
- Check that you've replaced the access key in `config/web3forms.ts`
- Open browser DevTools Console to see any error messages
- Verify your Web3Forms account is active

**Not receiving emails?**
- Check your spam/junk folder
- Verify the email address in your Web3Forms dashboard
- Make sure your Web3Forms account email is verified

## Support

For Web3Forms specific issues, visit their [documentation](https://docs.web3forms.com/) or [support page](https://web3forms.com/support).
