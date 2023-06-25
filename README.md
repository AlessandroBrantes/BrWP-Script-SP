# br-wp-script-sp

How to Use This Webpart
This guide will help you clone this repository, create the .sppkg file, upload it to SharePoint Online, and finally install the webpart on a Team site. Even if you're not a seasoned programmer, these step-by-step instructions should be easy to follow.

This webpart is especially useful for inserting customizable HTML, CSS, and scripts onto your SharePoint Online Team site. This solution was developed out of a need for a reliable dropdown menu on a Team site, and we hope it may be useful to you as well.

Additionally, there is a series of live streams on the YouTube channel '@AlessandroBrantes' that provide further guidance and a better understanding of the project.

Prerequisites
Ensure you have the following installed on your computer:

Git
Node.js
gulp (Install it globally using npm install -g gulp)
Yeoman and SharePoint client-side development tools (Install them globally using npm install -g yo @microsoft/generator-sharepoint)

Step 1: Clone the Repository
Open your command prompt.
Navigate to the directory where you want to clone the repository by using the cd command, for example: cd C:\Users\YourUsername\Documents.
Clone the repository using the command: git clone https://github.com/AlessandroBrantes/BrWP-Script-SP.git.

Step 2: Install the Dependencies
Navigate to the cloned repository's directory: cd BrWP-Script-SP.
Install the dependencies by running: npm install.

Step 3: Build the Project
Build the project by running: gulp bundle --ship.
Package the solution by running: gulp package-solution --ship.
This will create a .sppkg file in the ./sharepoint/solution directory.

Step 4: Upload the .sppkg File to SharePoint Online
Go to your SharePoint Admin Center (You must have admin permissions).
Click on "More features" on the left-hand menu.
Under "Apps", click on "Open".
Click on "App Catalog".
Click on "Distribute apps for SharePoint".
Upload the .sppkg file created in the previous step.
A dialog will appear. Make sure the "Make this solution available to all sites in the organization" checkbox is checked, and click "Deploy".

Step 5: Install the Webpart on Your Team Site
Go to the SharePoint Team site where you want to add the webpart.
Click on the gear icon on the top right corner and select "Add an app".
Find your app in the library and click on it to install it.
Once the app is installed, edit a page or create a new one.
Click on "+ Add webpart" and you will find your webpart under the "Custom" category.

You have now successfully cloned the repository, built the webpart, and added it to your SharePoint Team site. Enjoy!

## Summary

Short summary on functionality and used technologies.

[picture of the solution in action, if possible]

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.17.4-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Prerequisites

> Any special pre-requisites?

## Solution

| Solution    | Author(s)                                               |
| ----------- | ------------------------------------------------------- |
| folder name | Author details (name, company, twitter alias with link) |

## Version history

| Version | Date             | Comments        |
| ------- | ---------------- | --------------- |
| 1.1     | March 10, 2021   | Update comment  |
| 1.0     | January 29, 2021 | Initial release |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp serve**

> Include any additional steps as needed.

## Features

Description of the extension that expands upon high-level summary above.

This extension illustrates the following concepts:

- topic 1
- topic 2
- topic 3

> Notice that better pictures and documentation will increase the sample usage and the value you are providing for others. Thanks for your submissions advance.

> Share your web part with others through Microsoft 365 Patterns and Practices program to get visibility and exposure. More details on the community, open-source projects and other activities from http://aka.ms/m365pnp.

## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development
