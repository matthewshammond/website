---
title: "Professional Email Signatures"
date: 2024-04-24
image: images/2024-thumbs/professional-email-signatures.jpg
draft: false
author: "Matt Hammond"
description: "Create your own html email signature."
---

## Intro

Let's create a professional looking signature for your email. This tutorial will give you step-by-step instructions on creating and deploying an email signature for **iCloud** (macOS Mail client and iPhone) along with **Google**. It may work for other providers such as Outlook, but has not been tested.

{{< rawhtml >}}

<center><img src="/images/2024/professional-email-signatures/signature_example.jpg" alt="Example Signature" title="Example Signature" width="400"></center>
{{< /rawhtml >}}

If you want a logo or photo in your signature, it is important that the image is available online and the location does not move. The next section will walk you through hosting your own images. If you are not going to have an image in your signature, skip the next section.

{{< toc >}}

## Signature Images

You can either host your own image on a public facing domain or encode your image directly into the signature. Below will show both methods.

- [Host Image](#host-your-own-image)
- [Encode Image](#encode-your-own-image)

### Host Your Own Image

To ensure the image location does not move on the internet, it is best to host the image yourself. Even if not a developer, I recommend creating a free **[ Github ](https://github.com)** account to host your own images. Go to **[Github.com](https://github.com)** and sign up. Once signed up:

- Create a new repository
- Name this repository _images_
- Save all images that will be used in your signature to this repo

### Encode Your Own Image

Open the terminal on your Mac (Applications -> Utilities -> Terminal) or open `Spotlight` using `CMD + Space` and type `terminal` and open. Type the following command to download the script to encode images OR copy the block of code:

```bash
curl -o base64image.sh 'https://gist.githubusercontent.com/matthewshammond/e908ebc41791c4837725015d72ebe82c/raw/base64img.sh'
```

If you prefer to copy and paste the code into a script use this code below (also hosted [HERE](https://gist.github.com/matthewshammond/e908ebc41791c4837725015d72ebe82c)):

```bash
#!/usr/bin/env bash

usage() {
  echo "Usage: base64img [FILE]"
  echo "Formats: APNG BMP GIF JPEG PNG WEBP"
}

# Print usage and exit if the file was not provided
[ $# -eq 0 ] && usage && exit 1

# Grab the image format
fmt=$(file "$1" | grep -iEo 'apng|bmp|gif|jpeg|png|webp' | head -n1 | tr '[:upper:]' '[:lower:]')

# Check if the image format is supported
[ -z "$fmt" ] && usage && exit 1

# Create an IMG template
img="<img src='data:image/"$fmt";base64, $(base64 -i "$1")' />"

echo "$img"
```

After you have the script, you need to make the script executable by typing `chmod +x base64img.sh` into the temrinal.

In order to use this script to process each image, you will use the command `./base64img.sh <image>` where `<image>` is the location and name of the image. For example:

```bash
./base64img.sh ~/Downloads/logo.png
```

> If you are unfamiliar with the terminal, I recommend you move all your images to your `Downloads` folder and use the example above only requiring you to change `logo.png` with the name of your image file.
> {.note}

## Create Your Signature

The easiest method to building your own custom html styled email signature is to start with a template. There are many free services to create the template. Almost all, will allow a free trial and then charge a monthly subscription. You only need the service for a few minutes; therefore, we aren't worried about a paid service. These free services also do not require payment unless you continue using the service after the free trial. Ensure you search for `html email signature` when finding a site.

If you prefer my template from above, you can download it by running the following in your terminal:

```bash
curl -o signature.html 'https://gist.githubusercontent.com/matthewshammond/a5cb215114af4c48be909c511a608087/raw/signature_support.html'
```

or the html code is [HERE](https://gist.github.com/matthewshammond/a5cb215114af4c48be909c511a608087) or copy the code below:

> THE EASIEST WAY TO EDIT THE FILE IF UNFAMILIAR WITH TERMINAL TEXT EDITORS IS TO CHANGE THE EXTENSION BY RENAMING THE FILE FROM **.html** TO **.txt** SO THAT YOU CAN OPEN AND EDIT THE FILE WITH THE BUILT-IN TEXT EDITOR
> {.note}

> Ensure you update the html code with your name, phone, email, images
> {.danger}

```html
<div
  style="margin: 0 !important; padding: 0 !important; width: 100% !important"
>
  <div
    style="
      font-family: Helvetica, sans-serif;
      color: #000000;
      font-size: 13px;
      line-height: 1.3;
    "
    class="template-template2 is-flipped-false font-family-helvetica font-size font-family text-color"
  >
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      style="border-collapse: collapse !important; font-size: inherit"
    >
      <tr>
        <td style="font-size: 0px; line-height: 0px">
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            style="border-collapse: collapse !important; font-size: inherit"
          >
            <tr>
              <td style="text-align: center; padding: 0px 5px 0px 0px">
                <img
                  style="
                    border: 0px;
                    height: 120px;
                    line-height: 100%;
                    outline: none;
                    text-decoration: none;
                    -ms-interpolation-mode: bicubic;
                    min-width: 150px;
                    width: 150px;
                  "
                  src="https://matthammond.com/images/logos/MH_signature.png"
                  alt="MattHammond.com"
                  width="150"
                  height="120"
                  class="photo photo-size"
                />
              </td>
            </tr>
          </table>
        </td>
        <td
          style="
            padding: 2px 0px 2px 5px;
            border-left-width: 2px;
            border-left-style: solid;
            border-left-color: rgb(46, 52, 64);
          "
        >
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            style="border-collapse: collapse !important; font-size: inherit"
          >
            <tr>
              <td
                style="
                  padding-top: 2px;
                  font-weight: 700;
                  color: #2e3440;
                  font-size: 13px;
                  font-family: Helvetica, sans-serif;
                "
                class="name title-color"
              >
                Matt Hammond
              </td>
            </tr>
            <tr>
              <td style="padding-top: 4px">
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  role="presentation"
                  style="
                    border-collapse: collapse !important;
                    font-size: inherit;
                  "
                ></table>
              </td>
            </tr>
            <tr>
              <td style="padding-top: 12px">
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  role="presentation"
                  style="
                    border-collapse: collapse !important;
                    font-size: inherit;
                  "
                >
                  <tr>
                    <td
                      style="vertical-align: middle; padding: 1px 5px 1px 0px"
                      valign="middle"
                    >
                      <p style="margin: 1px">
                        <img
                          src="https://matthammond.com/images/logos/email/email.png"
                          alt=""
                          width="18"
                          height="18"
                          style="display: block; border: 0px; max-width: 18px"
                        />
                      </p>
                    </td>
                    <td
                      style="
                        font-family: Arial, sans-serif;
                        font-size: 13px;
                        line-height: 15px;
                        white-space: nowrap;
                        color: rgb(59, 66, 81) !important;
                        padding: 1px 0px;
                        vertical-align: middle;
                      "
                    >
                      <p style="margin: 1px">
                        <a
                          href="mailto:support@matthammond.com"
                          target="_blank"
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 13px;
                            line-height: 15px;
                            white-space: nowrap;
                            color: rgb(59, 66, 82);
                            text-decoration: none !important;
                          "
                          ><span
                            style="
                              font-family: Arial, sans-serif;
                              font-size: 13px;
                              line-height: 15px;
                              white-space: nowrap;
                              color: rgb(59, 66, 82);
                              text-decoration: none !important;
                            "
                            >support@matthammond.com</span
                          ></a
                        >
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="vertical-align: middle; padding: 1px 5px 1px 0px"
                      valign="middle"
                    >
                      <p style="margin: 1px">
                        <img
                          src="https://matthammond.com/images/logos/email/telephone.png"
                          alt=""
                          width="18"
                          height="18"
                          style="display: block; border: 0px; max-width: 18px"
                        />
                      </p>
                    </td>
                    <td
                      style="
                        font-family: Arial, sans-serif;
                        font-size: 13px;
                        line-height: 15px;
                        white-space: nowrap;
                        color: rgb(59, 66, 81) !important;
                        padding: 1px 0px;
                        vertical-align: middle;
                      "
                    >
                      <p style="margin: 1px">
                        <a
                          href="tel:7066100375"
                          target="_blank"
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 13px;
                            line-height: 15px;
                            white-space: nowrap;
                            color: rgb(59, 66, 82);
                            text-decoration: none !important;
                          "
                          ><span
                            style="
                              font-family: Arial, sans-serif;
                              font-size: 13px;
                              line-height: 15px;
                              white-space: nowrap;
                              color: rgb(59, 66, 82);
                              text-decoration: none !important;
                            "
                            >706.610.0375</span
                          ></a
                        >
                      </p>
                    </td>
                  </tr>
                  <!---->
                  <tr>
                    <td
                      valign="middle"
                      style="padding: 1px 5px 1px 0px; vertical-align: middle"
                    >
                      <p style="margin: 1px">
                        <img
                          src="https://matthammond.com/images/logos/email/website.png"
                          alt=""
                          width="18"
                          height="18"
                          style="display: block; border: 0px; max-width: 18px"
                        />
                      </p>
                    </td>
                    <td
                      style="
                        font-family: Arial, sans-serif;
                        font-size: 13px;
                        line-height: 15px;
                        white-space: nowrap;
                        color: rgb(94, 129, 171) !important;
                        font-weight: 700;
                        padding: 1px 0px;
                        vertical-align: middle;
                      "
                    >
                      <p style="margin: 1px">
                        <a
                          href="https://matthammond.com/"
                          target="_blank"
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 13px;
                            line-height: 15px;
                            white-space: nowrap;
                            color: rgb(59, 66, 82);
                            font-weight: 700;
                            text-decoration: none !important;
                          "
                          ><span
                            style="
                              font-family: Arial, sans-serif;
                              font-size: 13px;
                              line-height: 15px;
                              white-space: nowrap;
                              color: rgb(59, 66, 82);
                              font-weight: 700;
                              text-decoration: none !important;
                            "
                            >matthammond.com</span
                          ></a
                        >
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <!---->
    <!---->
    <tr>
      <td style="padding: 0px 1px 0px 0px">
        <table
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="max-width: 450px; margin: 0px; border-collapse: collapse"
        >
          <tr>
            <td
              style="
                padding: 6px 1px 0px 0px;
                font-family: Arial, sans-serif;
                font-size: 10px;
                line-height: 12px;
                color: rgb(136, 136, 136);
              "
            >
              <p
                style="
                  font-family: Arial, sans-serif;
                  font-size: 10px;
                  line-height: 12px;
                  color: rgb(136, 136, 136);
                  margin: 1px;
                "
              >
                IMPORTANT NOTICE: This e-mail message is intended to be received
                only by persons entitled to receive the confidential information
                it may contain. E-mail messages may contain information that is
                confidential and legally privileged. Please do not read, copy,
                forward, or store this message unless you are an intended
                recipient of it. If you have received this message in error,
                please forward it to the sender and delete it completely from
                your computer system.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </div>
</div>
```

> Ensure you update the html code with your name, phone, email, images
> {.danger}

**Anywhere you see `img src` be sure to put the link to your image hosted on github or the base64 code snippet that was produced when encoding the image**

### Example

Using a public facing link:

> Go to your github repo you created earlier. Select the image you uploaded and then `right click` on the image and select `Copy Image Address`. This is the url link you will use in `img src`.
> {.note}

```html
<img
  style="
    border: 0px;
    height: 120px;
    min-width: 150px;
    width: 150px;
    "
  src="https://matthammond.com/images/logos/MH_signature.png"
  width="150"
  height="120"
/>
```

---

Using base64 encode:

```html
<img
  style="
    border: 0px;
    height: 120px;
    min-width: 150px;
    width: 150px;
    "
  src="data:image/png;base64, iVBORw0KGgo...AAAANSUhEUgA"
  width="150"
  height="120"
/>
```

## Using Your Signature in macOS Mail

Now that you have the html code edited with your information, you are going to create a new email signature in macOS Mail. In macOS Mail, at the top, in the menu bar, select:

- `Mail -> Settings`
- Signatures
- Select the `+`
- Type anything you want **_we will change this to your signature soon_**
- Completely quit macOS Mail

Open the terminal on your Mac (Applications -> Utilities -> Terminal) or open `Spotlight` using `CMD + Space` and type `terminal` and open. When terminal opens type `open ~/Library/Mail/`. This will open a **Finder** window at the Mail folder. You may or may not see multiple folders labeled with `V` and a number like **V3**, **V4**, **V10**, etc. Open the folder with the highest `V` number. Then open `MailData` then `Signatures`. Looking at the `Date Modified` column, the newest `.mailsignature` file is the signature we just created.

Right click on the file and select open with **TextEdit**. At the top of the file you should see a header block that looks something like:

```html
Content-Transfer-Encoding: 7bit Content-Type: text/html; charset=us-ascii
Message-Id:
<B0A5E262-7970-469B-9A83-25E0F9A8A8F8>
  Mime-Version: 1.0 (Mac OS X Mail 16.0
  \(3774.600.62\))</B0A5E262-7970-469B-9A83-25E0F9A8A8F8
>
```

There should be a blank line and then the code for the signature. Delete everything below the blank line and then paste your html code created earlier here. Save and close the file. Right click on the file and select `Get Info` and then check the `Locked` button. Now open macOS Mail and go back to your `Settings -> Signatures`. You should now see your signature. Your images will not appear in your signature in this view. When you compose a new email, your signature will be rendered properly. Try sending yourself an email to test your new signature. If you have issues, comment below. Which you will now easily will be able to with your new GitHub account we created earlier.

## Create iOS Signature

Open the email you sent yourself in your iOS Mail app on your iPhone/iPad. Copy your signature from the email and then open your `Settings` on your device. Scroll down and find `Mail` and then scroll down to `Signature`. Paste your signature in the field. It will not look correct. **SHAKE YOUR PHONE** and then select undo to correct the formatting. You're all done!

## Conclusion

Hopefully this tutorial has allowed you to create your own custom html signature for your emails. Should you have any issues, ensure you are logged into your newly created GitHub account and leave any questions/comments below.
