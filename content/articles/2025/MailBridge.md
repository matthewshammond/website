---
title: "MailBridge"
date: 2025-04-12T10:05:03-04:00
image: images/2025-thumbs/MailBridge.png
draft: false
author: "Matt Hammond"
description: "A modern, secure, and efficient form submission and email response system"
---

# MailBridge: Modern Form Submission & Email Response System

MailBridge is a powerful, secure, and efficient system designed to handle form submissions and automate email responses. Built with FastAPI and Docker, it provides a robust solution for managing contact forms and email communications on your website.

{{< rawhtml >}}

<center><img src="/images/2025/mailbridge/mailbridge-wide.png" alt="MailBridge" title="MailBridge" width="500"></center>
{{< /rawhtml >}}

{{< toc >}}

## Key Features

- **FastAPI Backend**: High-performance asynchronous API for handling form submissions
- **Docker Containerization**: Easy deployment and scaling
- **Redis Integration**: Rate limiting and caching for enhanced security
- **iCloud SMTP Integration**: Reliable email delivery using iCloud's infrastructure
- **Automated Email Responses**: Customizable templates for different types of inquiries
- **Form Submission Handling**: Secure processing of contact form data
- **Rate Limiting**: Protection against spam and abuse
- **CORS Support**: Secure cross-origin resource sharing
- **Gzip Compression**: Optimized data transfer
- **CAPTCHA Support**: Optional integration with reCAPTCHA or hCaptcha
- **Multiple Email Alias Support**: Manage multiple email addresses from a single instance

## How It Works

MailBridge operates as a two-part system:

1. **Form Handler**: Processes incoming form submissions from your website
2. **Email Daemon**: Monitors and responds to incoming emails

### Form Submission Flow

1. User submits a contact form on your website
2. Form data is securely sent to MailBridge's API
3. MailBridge validates the submission and applies rate limiting
4. The submission is processed and sent via iCloud SMTP
5. A copy is saved to the Sent Messages folder

### Email Response Flow

1. MailBridge monitors specified email accounts
2. When a new email arrives, it's processed based on predefined rules
3. Appropriate response templates are selected based on the email subject
4. Automated responses are sent using iCloud SMTP
5. All responses are saved to the Sent Messages folder

## Setup and Configuration

### Prerequisites

- Docker and Docker Compose
- iCloud account with app-specific password
- Domain with SSL certificate
- (Optional) CAPTCHA service (reCAPTCHA or hCaptcha)

### Configuration Files

1. **config.yml**: Defines form settings and allowed domains
2. **responses.json**: Contains email templates and response configurations
3. **compose.yaml**: Docker services configuration
4. **.env**: Environment variables (iCloud credentials)

### Environment Variables

```bash
# iCloud settings
ICLOUD_EMAIL=your_icloud_email@icloud.com
ICLOUD_PASSWORD=your_app_specific_password
```

### Website Integration

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

- Logs are available through Docker
- Email delivery status is logged
- Failed submissions are tracked
- System health can be monitored through Docker

## Best Practices

1. **Regular Updates**: Keep Docker images and dependencies updated
2. **Backup Configuration**: Regularly backup your configuration files
3. **Monitor Logs**: Check logs for any issues or unusual activity
4. **Rate Limit Tuning**: Adjust rate limits based on your traffic
5. **Template Updates**: Keep email templates current and professional

## Troubleshooting

Common issues and solutions:

1. **Email Delivery Problems**
   - Check iCloud credentials
   - Verify SMTP settings
   - Check network connectivity

2. **Form Submission Issues**
   - Verify CORS settings
   - Check rate limiting configuration
   - Validate form implementation

3. **CAPTCHA Problems**
   - Verify CAPTCHA keys
   - Check domain configuration
   - Test CAPTCHA implementation

## Support and Community

For support, feature requests, or to contribute to the project, visit the [GitHub repository](https://github.com/matthewshammond/mailbridge).

## License

MailBridge is open-source software licensed under the MIT License. 
