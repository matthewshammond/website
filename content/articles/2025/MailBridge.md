---
title: "MailBridge"
date: 2025-04-12T10:05:03-04:00
image: images/2025-thumbs/MailBridge.png
draft: false
author: "Matt Hammond"
description: "A modern, secure, and efficient form submission and email response system with dual email delivery options"
---

# MailBridge: Modern Form Submission & Email Response System

MailBridge is a powerful, secure, and efficient system designed to handle form submissions and automate email responses. Built with FastAPI and Docker, it provides a robust solution for managing contact forms and email communications on your website. With dual email delivery options (iCloud SMTP and Postmark API), MailBridge offers flexibility and reliability for your email needs.

{{< rawhtml >}}

<center><img src="/images/2025/mailbridge/mailbridge-wide.png" alt="MailBridge" title="MailBridge" width="500"></center>
{{< /rawhtml >}}

{{< toc >}}

## Key Features

- **FastAPI Backend**: High-performance asynchronous API for handling form submissions
- **Docker Containerization**: Easy deployment and scaling
- **Redis Integration**: Rate limiting and caching for enhanced security
- **Dual Email Delivery**: Choose between iCloud SMTP and Postmark API
- **Dynamic Mode Switching**: Seamlessly switch between email delivery methods
- **Automated Email Responses**: Customizable templates for different types of inquiries
- **Form Submission Handling**: Secure processing of contact form data
- **Rate Limiting**: Protection against spam and abuse
- **CORS Support**: Secure cross-origin resource sharing
- **Gzip Compression**: Optimized data transfer
- **CAPTCHA Support**: Optional integration with reCAPTCHA or hCaptcha
- **Multiple Email Alias Support**: Manage multiple email addresses from a single instance
- **Pushover Notifications**: Real-time alerts for form submissions and email responses

## Email Delivery Options

MailBridge supports two email delivery methods, allowing you to choose the best option for your needs:

### iCloud SMTP Mode
- **Traditional SMTP delivery** using iCloud's infrastructure
- **Sent folder archiving** - all emails are automatically saved to your iCloud Sent Messages folder
- **Reliable delivery** with iCloud's established email infrastructure
- **No additional service costs** - uses your existing iCloud account

### Postmark Mode
- **API-based delivery** using Postmark's transactional email service
- **Enhanced deliverability** with dedicated IP addresses and reputation management
- **Detailed analytics** and delivery tracking
- **Professional email infrastructure** designed for transactional emails
- **Identical email content** - same formatting and templates as iCloud mode

## How It Works

MailBridge operates as a two-part system:

1. **Form Handler**: Processes incoming form submissions from your website
2. **Email Daemon**: Monitors and responds to incoming emails

### Form Submission Flow

1. User submits a contact form on your website
2. Form data is securely sent to MailBridge's API
3. MailBridge validates the submission and applies rate limiting
4. The submission is processed and sent via the configured email delivery method
5. A copy is saved to the Sent Messages folder (iCloud mode) or tracked via Postmark

### Email Response Flow

1. MailBridge monitors specified email accounts
2. When a new email arrives, it's processed based on predefined rules
3. Appropriate response templates are selected based on the email subject
4. Automated responses are sent using the configured delivery method
5. All responses are logged and tracked appropriately

## Setup and Configuration

### Prerequisites

- Docker and Docker Compose
- iCloud account with app-specific password
- (Optional) Postmark account for enhanced email delivery
- Domain with SSL certificate
- (Optional) CAPTCHA service (reCAPTCHA or hCaptcha)
- (Optional) Pushover account for notifications

### Configuration Files

1. **config.yml**: Defines form settings, allowed domains, and global mode
2. **responses.json**: Contains email templates and response configurations
3. **compose.yaml**: Docker services configuration
4. **.env**: Environment variables (iCloud and Postmark credentials)

### Environment Variables

```bash
# iCloud settings (required)
ICLOUD_EMAIL=your_icloud_email@icloud.com
ICLOUD_PASSWORD=your_app_specific_password

# Postmark settings (optional, for Postmark mode)
POSTMARK_API_KEY=your_postmark_api_key
POSTMARK_SENDER_EMAIL=your_verified_sender@yourdomain.com

# Pushover settings (optional, for notifications)
PUSHOVER_ENABLED=true
PUSHOVER_USER_KEY=your_pushover_user_key
PUSHOVER_API_TOKEN=your_pushover_api_token

# Instance configuration
INSTANCE_EMAILS=info@example.com,contact@website.com
```

## Mode Switching

MailBridge includes a built-in mode switcher that allows you to easily change between iCloud and Postmark email delivery:

### Switching Modes

```bash
# Switch to iCloud mode (default)
python switch_mode.py icloud

# Switch to Postmark mode
python switch_mode.py postmark

# Check current mode
python switch_mode.py status
```

### Mode Configuration

The mode is stored in your `config.yml` file:

```yaml
global:
    mode: iCloud  # or "postmark"
```

### Mode-Specific Features

**iCloud Mode:**
- Traditional SMTP delivery
- Automatic sent folder archiving
- No additional service costs
- Standard email delivery

**Postmark Mode:**
- API-based delivery
- Enhanced deliverability
- Detailed analytics and tracking
- Professional email infrastructure
- Same email content and formatting as iCloud

## Website Integration

#### Basic Form Implementation

```html
<form id="contact" method="post">
    <input type="text" name="name" required placeholder="Your Name">
    <input type="email" name="email" required placeholder="Your Email">
    <input type="text" name="subject" required placeholder="Subject">
    <textarea name="content" required placeholder="Your Message"></textarea>
    <button type="submit">Send Message</button>
</form>
```

#### CAPTCHA Integration

MailBridge supports both reCAPTCHA and hCaptcha for additional security. Configuration is done through the `config.yml` file:

```yaml
forms:
    your-form-key:
        captcha:
            provider: "recaptcha"  # or "hcaptcha"
            secret_key: "your-secret-key-here"
```

## Security Features

- **Rate Limiting**: Prevents abuse and spam
- **CORS Protection**: Only allows requests from specified domains
- **CAPTCHA Support**: Optional bot protection
- **Secure SMTP**: Uses STARTTLS for email transmission
- **API Security**: Postmark API uses secure token-based authentication
- **Environment Variables**: Sensitive data is stored securely

## Deployment

MailBridge is designed to be deployed using Docker Compose:

```bash
docker-compose up -d
```

The system consists of two main services:
- Redis for caching and rate limiting
- MailBridge for form handling and email processing

## Monitoring and Maintenance

- **Real-time Logs**: Available through Docker with detailed mode information
- **Email Delivery Status**: Logged for both iCloud and Postmark modes
- **Failed Submissions**: Tracked and reported
- **System Health**: Monitored through Docker
- **Pushover Notifications**: Real-time alerts for form submissions and email responses
- **Mode Switching**: Clear logging when switching between delivery methods

## Best Practices

1. **Choose the Right Mode**: Use iCloud for simple setups, Postmark for enhanced deliverability
2. **Regular Updates**: Keep Docker images and dependencies updated
3. **Backup Configuration**: Regularly backup your configuration files
4. **Monitor Logs**: Check logs for any issues or unusual activity
5. **Rate Limit Tuning**: Adjust rate limits based on your traffic
6. **Template Updates**: Keep email templates current and professional
7. **Credential Management**: Use environment variables for all sensitive data
8. **Mode Testing**: Test both modes to ensure proper configuration

## Troubleshooting

Common issues and solutions:

### Email Delivery Problems

**iCloud Mode:**
- Check iCloud credentials and app-specific password
- Verify SMTP settings and network connectivity
- Check iCloud account status and limits

**Postmark Mode:**
- Verify Postmark API key and sender email verification
- Check Postmark account status and sending limits
- Review Postmark delivery logs and analytics

### Form Submission Issues
- Verify CORS settings and allowed domains
- Check rate limiting configuration
- Validate form implementation and required fields

### Mode Switching Issues
- Ensure configuration file is writable
- Check mode syntax (case-sensitive: "iCloud" or "postmark")
- Verify environment variables are set correctly

### CAPTCHA Problems
- Verify CAPTCHA keys and domain configuration
- Test CAPTCHA implementation
- Check CAPTCHA service status

## Support and Community

For support, feature requests, or to contribute to the project, visit the [GitHub repository](https://github.com/matthewshammond/mailbridge).

## License

MailBridge is open-source software licensed under the MIT License. 
