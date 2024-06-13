## AWS Amplify

AWS Amplify is an Amazon service that helps to quickly build and deploy full-stack mobile and web applications. It also provides a CLI toolchain that allows for deployment directly from the IDE without going to the AWS Management Console.


In this AWS Cloud Lab, you’ll learn to use the AWS Amplify CLI service to create and deploy back-end services on the AWS Cloud. You’ll even get to connect these back-end services with a React web application and host it on the AWS Cloud. You’ll deploy an entire end-to-end web application from the VS Code IDE on the AWS Cloud.
The following is the high-level architecture diagram of the infrastructure you’ll create in our Cloud Lab:



![high-level architecture diagram of the infrastructure you’ll create in our Cloud Lab](https://github.com/zainasaadeddin/usercode/blob/main/screenshots/system.png)


AWS Amplify is an Amazon service that helps to quickly build, deploy, and host full-stack mobile and web applications on the AWS Cloud. It offers a comprehensive development framework that leverages a range of AWS services without requiring any prior cloud expertise because everything is done automatically for us under the hood. It also provides a CLI toolchain that allows for deployment directly from the IDE without going to the AWS Management Console. We’ll be using this CLI toolchain in this lab.

The following are some of the features of AWS Amplify:

* Back-end services: Amplify provides back-end services for authentication, APIs, databases, or storage purposes. It allows developers to seamlessly configure and set up these services without the need for extensive back-end development.

* Frontend development: Amplify offers front-end support for many popular web and mobile frameworks like React, React Native, Angular, and Flutter frameworks.
API management: Amplify allows us to easily create and manage REST and GraphQL APIs, leveraging both the API Gateway and AWS AppSync services.

* Database integration: We can easily manage data storage for our application by integrating AWS database services like Amazon DynamoDB using the Amplify service.

* Hosting and deployment: Amplify provides hosting and deployment services that enable developers to quickly deploy and host their applications on the AWS Cloud.
Serverless computations: We can integrate AWS Lambda functions with Amplify applications to perform serverless computations.

In this group lab project, we’ll explore the different ways we can use the AWS Amplify service to discover, create, and deploy different back-end services. We’ll also deploy and host a React web application on the AWS Cloud, resulting in us deploying an entire end-to-end web application on the cloud. The React web application we’ll use is a demo courses dashboard application that will provide a list of some of the courses on Educative and allow us to add, edit, and delete course data on the dashboard.

Here are some general guidelines that must be followed to complete this lab:

All changes in any code files in the VS Code workspace will be saved automatically, so we don’t have to do anything to save them. All saved changes will persist throughout the lab.
When using the AWS Management Console, ensure that you select the us-east-1 region to avoid issues while working on this lab. To change the default region on your AWS Management Console, follow these steps:

Inside the AWS navigation bar, click the region drop-down menu at the top-right corner next to your username and select the us-east-1 US East (N. Virginia) option as the default region for the cloud console. Throughout this lab, ensure that you’re working within the us-east-1 region.
Using the same resource names as suggested in the lab is essential. For instance, if you are instructed to name a Lambda function as LambdaBackendService, choosing any other name for the function may not be possible.


Let’s begin this lab to develop and deploy an end-to-end web application using AWS Amplify.

1. set up the AWS CLI and AWS Amplify CLI on your local system on your machine.

Execute the following commands to install the AWS CLI 2:
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"

unzip awscliv2.zip

./aws/install

Execute the following command to install the AWS Amplify CLI:

npm install -y --global @aws-amplify/cli


Inside the visual studio code:


2. Executes the *aws configure* command on the root directory add your AWS credentials already. the default region to be *us-east-1* because that’s where we want all our cloud resources to be created. Press any key to close the task terminal and proceed ahead.

3. Now, navigate to the directory of the react-client-app project we’ve already set up by executing the following command in the workspace:
cd react-client-app. Now, to begin initializing Amplify for this project, execute the following command at the root of the react-client-app directory:

*amplify init*

4. Press the “Enter“ key to use the default suggested name by the Amplify CLI. The suggested name should be reactclientapp.
? Enter a name for the project (reactclientapp) 
For the following prompt, type “y” and press the “Enter” key to initialize the Amplify project with the default configurations and settings that Amplify auto-detected for our React project.

the following configuration will be applied:


Project information

| Name: reactclientapp
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: react
| Source Directory Path: src
| Distribution Directory Path: build
| Build Command: npm run-script build
| Start Command: npm run-script start

? Initialize the project with the above configuration? (Y/n) y


Amplify will automatically select AWS CloudFormation as the default provider to deploy our services to the AWS Cloud.
Using default provider  awscloudformation

* Select the AWS profile option and press the “Enter” key to use the default AWS profile already configured previously in the “Startup Script” task:
?·Select·the·authentication·method·you·want·to·use:·(Use·arrow·keys)
❯·AWS·profile·
··AWS·access·keys·

* Select the default option and press the “Enter” key.
?·Please·choose·the·profile·you·want·to·use·(Use·arrow·keys)
❯·default·


Wait a few minutes for the CloudFormation service to create some of the initial AWS Cloud resources required by the Amplify service. Once the creation has been completed, Amplify will prompt us to mention if we want to share the non-sensitive project configuration data if there are any failures. Type “y” and press the “Enter” to proceed.

✔ Help improve Amplify CLI by sharing non-sensitive project configurations on failures (y/N) · yes

    Thank you for helping us improve Amplify CLI!
Deployment state saved successfully.
✔ Initialized provider successfully.
Browserslist: caniuse-lite is outdated. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
✅ Initialized your environment successfully.
✅ Your project has been successfully initialized and connected to the cloud!
Some next steps:


* "amplify status" will show you what you've added already and if it's locally configured or deployed
* "amplify add <category>" will allow you to add features like user login or a backend API
* "amplify push" will build all your local backend resources and provision it in the cloud
* "amplify console" to open the Amplify Console and view your project status
* "amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

### Verify changes on the AWS Management Console








