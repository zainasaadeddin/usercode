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


We can verify the successful creation of our Amplify project on the AWS Cloud by going to the AWS Management Console and following these steps:

* Open the AWS Management Console associated with this lab by clicking the “Open Console” button in the top-right corner.
Search for “Amplify” on the AWS Management Console and click the “AWS Amplify” service from the search results. This takes us to the Amplify dashboard.

* Under the “All apps” section, there will be the reactclientapp Amplify app. Open this app and open the “Backend environments” tab.
  
* Under the “Backend environments” tab, click the “Actions” drop-down menu and click the “View details” option.
  
* Here, we can observe all deployments that have happened till now. To get a more detailed response, click the “View in CloudFormation” button to open the CloudFormation service that actually deployed these AWS resources as a CloudFormation stack.
  
* On the CloudFormation dashboard, open the “Events” tab to check the event log of the successes and failures of the created AWS resources.
Open the “Resources” tab to check what AWS resources the suggested Amplify services have created.

**Congratulations**! You’ve successfully configured an Amplify project for our React app. This can be verified by the presence of the amplify folder under the react-client-app directory!!

## Set Up DynamoDB Storage

   Storage is one of the essential resources in end-to-end web applications to persist and manage user data, and the DynamoDB service is an excellent AWS service to handle the storage of our client applications. AWS DynamoDB is a fully managed NoSQL relational database service through which we can create and manage our databases with ease.
   
In this step, you’ll configure a DynamoDB table to store our back-end resources on the AWS Cloud to store the course data for our web application. We’ll define the following attributes for the course to be saved in the DynamoDB database:

* ID: This attribute defines the ID of the course.
* CourseName: This attribute defines the name of the course.
* CoverArt: This attribute defines the cover art of the course.
* CourseUrl: This attribute defines the Educative URL of the course.
* Author: This attribute defines the author of the course.

However, we won’t deploy it to the AWS Cloud yet and only configure it locally. If the DynamoDB table and all the Amplify-configured resources configured till now are deployed to the AWS Cloud, the architecture diagram of our planned AWS infrastructure would be as follows:

5. Add a DynamoDB storage

To add a DynamoDB storage, follow these steps:
To begin initializing storage for this Amplify project, execute the following command in the VS Code workspace terminal on the right:

**amplify add storage**


Select the NoSQL Database option and press the “Enter” key. Amplify will begin configuring a DynamoDB table as storage because that’s the NoSQL database on the AWS Cloud:
? Select from one of the below mentioned services: 
  Content (Images, audio, video, etc.) 
❯ NoSQL Database


Type “*coursesTable*” in the prompt that appears and press the “Enter” key to set coursesTable as the reference name for the DynamoDB:
Provide table name › coursesTable


Type “ID” in the next prompt and press the “Enter” key. This sets ID as an attribute in our DynamoDB table:

You can now add columns to the table.
? What would you like to name this column ›  ID


Select the “number” data type and press the “Enter” key. This sets the Number as the data type for the ID attribute.
? Choose the data type …  (Use arrow keys or type to filter)
  string
❯ number
  binary
...

Press the “y” key to add another table attribute:
✔ Would you like to add another column? (Y/n) · yes

Type “CourseName” in the next prompt and press the “Enter” key. This sets CourseName as an attribute in our DynamoDB table:
? What would you like to name this column ›  CourseName

Select the “string” data type and press the “Enter” key. This sets the String as the data type for the CourseName attribute.
? Choose the data type …  (Use arrow keys or type to filter)
❯ string
  number
  binary
...


Repeat the previous three steps to create the Author, CourseUrl, and CoverArt attributes, all with the “string” data type.
Press the “n” key to stop adding any more table attributes.



✔ Would you like to add another column? (Y/n) · no


Select the “ID” attribute and press the “Enter” key. This sets the ID as the partition key for the DynamoDB table.
? Choose the partition key for the table …  (Use arrow keys or type to filter)
❯ ID
  CourseName
  Author
  CourseUrl
  CoverArt


Press the “n” key to not add the sort key prompt because we don’t need it.
Do you want to add a sort key to your table? (Y/n) · no

Press the “n” key to not add any global secondary indexes prompt because we don’t need it.
✔ Do you want to add global secondary indexes to your table? (Y/n) · no

Press the “n” key to not add a Lambda trigger prompt because we’ll automatically add it when we add a Lambda function in a later task.

Do you want to add a Lambda Trigger for your Table? (y/N) · no


Once Amplify locally creates the configuration files for the storage, we’ll get the following message in the terminal:
✅ Successfully added resource coursesTable locally

To verify the status of the back-end services created till now, execute the following command:

*amplify status*

If all the resources were set correctly, we’ll get the following response in the terminal:
    Current Environment: dev


| Category | Resource name    | Operation   |   Provider plugin   |
| :---:   | :---: | :---: |:---: |
| Storage | coursesTable   | Create   | awscloudformation   |



**Congratulations!** you’ve successfully configured the storage!!.












