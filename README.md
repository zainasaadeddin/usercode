# Deploye a complete end-to-end web application using AWS Amplify - Time: 2-3 hours

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

```
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"

unzip awscliv2.zip

./aws/install
```

Execute the following command to install the AWS Amplify CLI:

```
npm install -y --global @aws-amplify/cli
```

Inside the visual studio code:


2. Executes the **aws configure** command on the root directory add your AWS credentials already. the default region to be *us-east-1* because that’s where we want all our cloud resources to be created. Press any key to close the task terminal and proceed ahead.

3. Now, navigate to the directory of the react-client-app project we’ve already set up by executing the following command in the workspace:
cd react-client-app. Now, to begin initializing Amplify for this project, execute the following command at the root of the react-client-app directory:

**amplify init**

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

## important note: Inside IAM ROLES, we have to create a role LambdaRole and attach polices for amplify and DynamoDB


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



## Create a Lambda Function

In AWS Amplify, a function refers to an AWS Lambda function that can be integrated to communicate and perform certain tasks for the back-end services of our application. Lambda functions are an essential component of Amazon’s serverless computing platform, enabling a scalable and cost-effective way to run code without the need to manage servers or infrastructure. These functions can be written in various programming languages.

In this stage, you’ll configure a Lambda function to act as a serverless back-end service to manage the course data on the DynamoDB table and communicate with the client React application. However, we won’t deploy it to the AWS Cloud yet and only configure it locally. If the Lambda function and all the Amplify-configured resources configured till now are deployed to the AWS Cloud, the architecture diagram of our planned AWS infrastructure would be as follows:

Add a Lambda function: To add a Lambda function, follow these steps:
To begin initializing a function for this Amplify project, execute the following command in the VS Code workspace terminal on the right:

*amplify add function*

Select the “Lambda function (serverless function)” option and press the “Enter” key to create a single serverless Lambda function:
? Select which capability you want to add: (Use arrow keys)
❯ Lambda function (serverless function) 
  Lambda layer (shared code & resource used across functions)


Type “LambdaBackendService” in the prompt that appears and press the “Enter” key to set LambdaBackendService as the name of the Lambda function:

? Provide an AWS Lambda function name: LambdaBackendService

Select the “NodeJS” runtime and press the “Enter” key:
? Choose the runtime that you want to use: (Use arrow keys)
  .NET 6 
  Go 
  Java 
❯ NodeJS 
  Python 

Select the default “Hello World” option in the next prompt and press the “Enter” key. This will create our Lambda function with a very basic template. We’ll add our code to handle the complex use case of our application once Amplify creates the function locally.
? Choose the function template that you want to use: (Use arrow keys)
  AppSync - GraphQL API request (with IAM) 
  CRUD function for DynamoDB (Integration with API Gateway) 
  GraphQL Lambda Authorizer 
❯ Hello World 
  Lambda trigger 
  Serverless ExpressJS function (Integration with API Gateway)

Type “n” and press the “Enter” key to not configure any additional advanced Lambda function setting because we don’t need it.
? Do you want to configure advanced settings? (y/N) n

Type “n” and press the “Enter” key to keep the existing Lambda function code.
? Do you want to edit the local lambda function now? (y/N) n

Once done, press any key to proceed ahead.
? Press enter to continue 

Once Amplify locally creates the configuration files for the Lambda function, we’ll get the following message in the terminal:
✅ Successfully added resource LambdaBackendService locally.


As discussed previously, let’s finally change the “Hello World” template code in our Lambda function to act as an intermediary between our DynamoDb storage and the REST API we’ll create in a later task.
To do so, we need to navigate to the index.js file of the Lambda function, which represents its main code file. Execute the following command to understand where this file is located and quickly open it in the VS Code workspace:

code /usercode/react-client-app/amplify/backend/function/LambdaBackendService/src/index.js


Copy the code below and replace the entire code in the index.js file with it.


```
/**
* @type {import('@types/aws-lambda').APIGatewayProxyHandler}
*/
// Importing AWS DynamoDB SDK files for JavaScript
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const {
 GetCommand, PutCommand, ScanCommand, UpdateCommand, DeleteCommand, DynamoDBDocumentClient,
} = require('@aws-sdk/lib-dynamodb');

// Client configurations
const config = {
 region: 'us-east-1',
};

// Defining table name set by AWS Amplify
const tableName = 'coursesTable-dev';

// Configuring AWS DynamoDB client
const client = new DynamoDBClient(config);
const documentClient = DynamoDBDocumentClient.from(client);

// The following custom function fetches a specific course in the
// DynamoDB database
async function getItemDB(id) {
 if(!id && id !== 0) { return null; }
 try {
   const command = new GetCommand({
     TableName: tableName,
     Key: {
       ID: Number(id),
     },
   });
   const response = await documentClient.send(command);
   return response;
 } catch (err) {
   console.error(err);
   return null;
 }
}

// The following custom function fetches all course IDs in the
// DynamoDB database
async function getAllItemsDB() {
 try {
   const command = new ScanCommand({
     TableName: tableName,
     ProjectionExpression: 'ID',
   });

   const response = await documentClient.send(command);
   const coursesList = [];
   await Promise.all(response.Items.map(async (item) => {
     const course = await getItemDB(item.ID);
     if (course) { coursesList.push(course.Item); }
   }));
   return coursesList;
 } catch (err) {
   return { error: err.message };
 }
}

// The following custom function adds a new course in the
// DynamoDB database
async function putItemDB(courseObject) {
 try {
   const command = new PutCommand({
     TableName: tableName,
     Item: {
       ID: Number(courseObject.id),
       CourseName: courseObject.courseName,
       CoverArt: decodeURIComponent(courseObject.courseCoverArt),
       CourseUrl: decodeURIComponent(courseObject.courseUrl),
       Author: courseObject.courseAuthor,
     },
   });

   const response = await documentClient.send(command);
   return response;
 } catch (err) {
   return { error: err.message };
 }
}

// The following custom function updates an existing course in the
// DynamoDB database
async function updateItemDB(courseObject) {
 try {
   const command = new UpdateCommand({
     TableName: tableName,
     Key: {
       ID: Number(courseObject.id),
     },
     UpdateExpression: 'SET CourseName = :name, CourseUrl = :url, CoverArt = :coverart, Author = :author',
     ExpressionAttributeValues: {
       ':name': courseObject.courseName,
       ':coverart': decodeURIComponent(courseObject.courseCoverArt),
       ':url': decodeURIComponent(courseObject.courseUrl),
       ':author': courseObject.courseAuthor,
     },
     ReturnValues: 'ALL_NEW',
   });

   const response = await documentClient.send(command);
   return response;
 } catch (err) {
   return { error: err.message };
 }
}

// The following custom function fetches all course IDs in the
// DynamoDB database
async function deleteItemDB(id) {
 try {
   const command = new DeleteCommand({
     TableName: tableName,
     Key: {
       ID: Number(id),
     },
   });

   const response = await documentClient.send(command);
   return response;
 } catch (err) {
   return { error: err.message };
 }
}

// The following custom function fetches all course IDs in the
// DynamoDB database
async function populateItemsDB(coursesJSON) {
 try {
   const courses = JSON.parse(decodeURIComponent(coursesJSON));
   await Promise.all(courses.map(async (course) => {
     await putItemDB({
       id: course.id,
       courseName: course.courseTitle,
       courseCoverArt: course.imgUrl,
       courseUrl: course.courseUrl,
       courseAuthor: course.courseAuthor,
     });
   }));
   return true;
 } catch (error) {
   return false;
 }
}

exports.handler = async (event) => {
 const responseHeaders = {
   'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-Headers': '*',
 };

 if (!event.queryStringParameters) {
   return {
     statusCode: 400,
     headers: responseHeaders,
     body: JSON.stringify({
       success: false,
       error: 'Invalid Request: Action not provided',
     }),
   };
 }

 // The following variable stores the value of the query parameters in the request
 const requestData = event.queryStringParameters;

 // The following variable stores the action to be performed
 const requestAction = requestData.action;

 // The following variable stores the course ID if it exists
 // in the event arguments
 const courseId = Number(requestData.id);

 // The following conditions get executed when the Lambda function
 // is invoked
 switch (requestAction) {
   // The case when the request query is to get all courses
   case 'allCourses':
     const allCourses = await getAllItemsDB();

     if (allCourses.error) {
       return {
         statusCode: 400,
         headers: responseHeaders,
         body: JSON.stringify({
           success: false,
           error: `Unable to process request for ${requestAction}: ${allCourses.error}`,
         }),
       };
     }

     // Returning response
     return {
       statusCode: 200,
       headers: responseHeaders,
       body: JSON.stringify({
         success: true,
         action: requestAction,
         allCourses,
       }),
     };

     // The case when the request query is to add a new course
   case 'addCourse':
     const addCourse = await putItemDB(requestData);

     if (addCourse.error) {
       return {
         statusCode: 400,
         headers: responseHeaders,
         body: JSON.stringify({
           success: false,
           error: `Unable to process request for ${requestAction}: ${addCourse.error}`,
         }),
       };
     }

     // Returning response
     return {
       statusCode: 200,
       headers: responseHeaders,
       body: JSON.stringify({
         success: true,
         action: requestAction,
       }),
     };

     // The case when the request query is to edit an existing course
   case 'editCourse':
     const editCourse = await updateItemDB(requestData);

     if (editCourse.error) {
       return {
         statusCode: 400,
         headers: responseHeaders,
         body: JSON.stringify({
           success: false,
           error: `Unable to process request for ${requestAction}: ${editCourse.error}`,
         }),
       };
     }

     // Returning response
     return {
       statusCode: 200,
       headers: responseHeaders,
       body: JSON.stringify({
         success: true,
         action: requestAction,
       }),
     };

     // The case when the request query is to edit an existing course
   case 'removeCourse':
     const removeCourse = await deleteItemDB(courseId);

     if (removeCourse.error) {
       return {
         statusCode: 400,
         headers: responseHeaders,
         body: JSON.stringify({
           success: false,
           error: `Unable to process request for ${requestAction}: ${removeCourse.error}`,
         }),
       };
     }

     // Returning response
     return {
       statusCode: 200,
       headers: responseHeaders,
       body: JSON.stringify({
         success: true,
         action: requestAction,
       }),
     };

   case 'populateCourses':
     const poulateCourses = await populateItemsDB(requestData.data);

     if (!poulateCourses) {
       return {
         statusCode: 400,
         headers: responseHeaders,
         body: JSON.stringify({
           success: false,
           error: `Unable to process request for ${requestAction}`,
         }),
       };
     }

     // Returning response
     return {
       statusCode: 200,
       headers: responseHeaders,
       body: JSON.stringify({
         success: true,
         action: requestAction,
       }),
     };

     // The default case when the field itself is unidentified
   default:
     return {
       statusCode: 400,
       headers: responseHeaders,
       body: JSON.stringify({
         success: false,
         error: `Invalid Request: Action ${requestAction} ${typeof requestAction} not found`,
       }),
     };
 }
};



```


* In the Lambda function above, we’ve essentially defined all operations for our course dashboard application. We’ve used the AWS SDK for JavaScript (aws-sdk) to interact with the DynamoDB table to add a new course to the list, edit or delete a specific course in the list, or retrieve the complete course list. We’ll pass any attributes of the course as query parameters in the request to the Lambda function. One additional query parameter that we’ll pass will be the action parameter that defines what type of operation we want to perform.

* Now, we need to edit the LambdaBackendService-cloudformation-template.json file in the LambdaBackendService directory, which is one parent directory above the folder from where we edited the src/index.js file of our Lambda function. The LambdaBackendService-cloudformation-template.json file represents the CloudFormation template for creating the Lambda resources when we deploy it. Execute the following command to quickly open the LambdaBackendService-cloudformation-template.json file in the VS Code workspace:

* code /usercode/react-client-app/amplify/backend/function/LambdaBackendService/LambdaBackendService-cloudformation-template.json

* Copy the code below and replace the entire template code in the LambdaBackendService-cloudformation-template.json file with it.

```

{
   "AWSTemplateFormatVersion": "2010-09-09",
   "Description": "Custom Lambda function template for AWS Amplify",
   "Parameters": {
       "CloudWatchRule": {
           "Type": "String",
           "Default": "NONE",
           "Description": " Schedule Expression"
       },
       "deploymentBucketName": {
           "Type": "String"
       },
       "env": {
           "Type": "String"
       },
       "s3Key": {
           "Type": "String"
       },
       "storagecoursesTableName": {
           "Type": "String",
           "Default": "storagecoursesTableName"
       },
       "storagecoursesTableArn": {
           "Type": "String",
           "Default": "storagecoursesTableArn"
       }
   },
   "Conditions": {
       "ShouldNotCreateEnvResources": {
           "Fn::Equals": [
               {
                   "Ref": "env"
               },
               "NONE"
           ]
       }
   },
   "Resources": {
       "LambdaFunction": {
           "Type": "AWS::Lambda::Function",
           "Metadata": {
               "aws:asset:path": "./src",
               "aws:asset:property": "Code"
           },
           "Properties": {
               "Code": {
                   "S3Bucket": {
                       "Ref": "deploymentBucketName"
                   },
                   "S3Key": {
                       "Ref": "s3Key"
                   }
               },
               "Handler": "index.handler",
               "FunctionName": {
                   "Fn::If": [
                       "ShouldNotCreateEnvResources",
                       "LambdaBackendService",
                       {
                           "Fn::Join": [
                               "",
                               [
                                   "LambdaBackendService",
                                   "-",
                                   {
                                       "Ref": "env"
                                   }
                               ]
                           ]
                       }
                   ]
               },
               "Environment": {
                   "Variables": {
                       "ENV": {
                           "Ref": "env"
                       },
                       "REGION": {
                           "Ref": "AWS::Region"
                       }
                   }
               },
               "Role": {
                   "Fn::Sub": "arn:aws:iam::${AWS::AccountId}:role/LambdaRole"
               },
               "Runtime": "nodejs18.x",
               "Layers": [],
               "Timeout": 25
           }
       },
       "LambdaExecutionRole": {
           "Type": "AWS::IAM::Role",
           "Properties": {
               "RoleName": "LambdaExecutionRole",
               "AssumeRolePolicyDocument": {
                   "Version": "2012-10-17",
                   "Statement": [
                       {
                           "Effect": "Allow",
                           "Principal": {
                               "Service": [
                                   "lambda.amazonaws.com"
                               ]
                           },
                           "Action": [
                               "sts:AssumeRole"
                           ]
                       }
                   ]
               }
           }
       }
   },
   "Outputs": {
       "Name": {
           "Value": {
               "Ref": "LambdaFunction"
           }
       },
       "Arn": {
           "Value": {
               "Fn::GetAtt": [
                   "LambdaFunction",
                   "Arn"
               ]
           }
       },
       "Region": {
           "Value": {
               "Ref": "AWS::Region"
           }
       },
       "LambdaExecutionRoleArn": {
           "Value": {
               "Fn::GetAtt": [
                   "LambdaExecutionRole",
                   "Arn"
               ]
           }
       }
   }
}


```


you need to perform this action to attach the LambdaRole IAM role we’ve already created for this Lambda function because we don’t provide any permissions to create or modify policies, which the default template requires.

* Now, execute the following command to rebuild our local configuration files with the updated CloudFormation template for the Lambda function:

*amplify build*

To verify the status of the back-end services created till now, execute the following command:

*amplify status*

* If all the resources are set correctly, we’ll get the following response in the terminal:
current Environment: dev



| Category | Resource name    | Operation   |   Provider plugin   |
| :---:   | :---: | :---: |:---: |
| Storage | coursesTable   | Create   | awscloudformation   |
| Function | LambdaBackendService   | Create   | awscloudformation   |


**Congratulations!** you’ve successfully configured a function!!.


## Set Up a REST API on API Gateway

In AWS Amplify, an api refers to a back-end API, which can either be a GraphQL or REST API. We need a back-end API to create and manage our client applications. In this lab, we’ll model this back-end API as a REST API, which can easily be managed through the AWS API Gateway service. API Gateway is an AWS service where we can create, manage, and deploy different APIs on the AWS Cloud.
In this task, we’ll configure a REST API on API Gateway. We’ll direct all back-end queries through the endpoint of this API, which connects with the Lambda function that fetches and processes the course data from the DynamoDB table and returns it to API Gateway, which in turn sends the data to our React web application that requested it.
If the API Gateway API and all the Amplify-configured resources configured till now are deployed to the AWS cloud



Add an API Gateway REST API

* To add an API Gateway REST API, follow these steps:
* To begin initializing an API for this Amplify project, execute the following command in the VS Code workspace terminal on the right:


*amplify add api*



Select the “REST” option and press the “Enter” key to create a simple REST API:
? Select from one of the below mentioned services: (Use arrow keys)
  GraphQL 
❯ REST 
Type “backendService” in the prompt that appears and press the “Enter” key to set backendService as the reference name for the REST API:
? Provide a friendly name for your resource to be used as a label for this category in the project: › backendService


Type “/courses” in the prompt that appears and press the “Enter” key to set /courses as the endpoint path for the REST API:
? Provide a path (e.g., /book/{isbn}): › /courses 


Select the “Use a Lambda function already added in the current Amplify project” option and press “Enter” to add the Lambda function we previously configured as the source for the REST API:
? Choose a Lambda source …  (Use arrow keys or type to filter)
  Create a new Lambda function
❯ Use a Lambda function already added in the current Amplify project
If there’s only one function in the Amplify project, Amplify will automatically select and add it as the source on our behalf without any input. This is what happens in our case, and we get the following response from Amplify:
Only one option for [Choose the Lambda function to invoke by this path]. Selecting [LambdaBackendService].


Press “n” because we don’t need to restrict any access to the API, so we can easily test and connect with it.
? Restrict API access? (y/N) › n


? Do you want to add another path? (y/N) › n


Once Amplify locally creates the configuration files for the REST API, we’ll get the following message in the terminal:
✅ Successfully added resource backendService locally


To verify the status of the back-end services created till now, execute the following command:

*amplify status*

If all resources are set correctly, we’ll get the following response in the terminal:

Current·Environment:·dev

| Category | Resource name    | Operation   |   Provider plugin   |
| :---:   | :---: | :---: |:---: |
| Storage | coursesTable   | Create   | awscloudformation   |
| Function | LambdaBackendService   | Create   | awscloudformation   |
| Api | backendService   | Create   | awscloudformation   |

**Congratulations!** you successfully configured an API!

## Push Back-End Resources to the AWS Cloud

In this stage, we’ll finally deploy all our local back-end resources created using AWS Amplify to the AWS Cloud. Amplify utilizes the AWS CloudFormation service to perform this deployment to create these resources. The CloudFormation service allows developers to use stacks to maintain their project infrastructure according to their requirements. Developers can define AWS resources for their stacks using a CloudFormation template and don’t have to individually create each resource.
After the completion of this task and the deployment of all the resources on the AWS Cloud, the architecture diagram of our actual AWS infrastructure will be as follows:

* Deploy all local resources to the AWS Cloud

* To push all local Amplify-generated back-end resources to the AWS Cloud, follow these steps:
* To begin pushing all Amplify project resources to the AWS Cloud, execute the following command in the VS Code workspace terminal on the right:

*amplify push*

Amplify should begin pulling the back-end dev environment from the AWS Cloud. This might take a few seconds. Once done, Amplify will display the CloudFormation operation to apply on all Amplify resources, which should all be “Create” at this stage. Press “y” to acknowledge that we want to proceed ahead with the deployment:

  Current Environment: dev
  
| Category | Resource name    | Operation   |   Provider plugin   |
| :---:   | :---: | :---: |:---: |
| Storage | coursesTable   | Create   | awscloudformation   |
| Function | LambdaBackendService   | Create   | awscloudformation   |
| Api | backendService   | Create   | awscloudformation   |

✔ Are you sure you want to continue? (Y/n) · yes

The deployment will take some time to complete, and Amplify will display the progress in the meantime. Once the deployment is complete, we’ll be greeted with a response similar to the following:
Deployment state saved successfully.

REST API endpoint: https://<API_ID>.execute-api.us-east-1.amazonaws.com/dev

Copy and save the REST API endpoint from the response somewhere safe. We should have an AWS-defined API ID, in the URL in place of <API_ID>, like in the sample response above.
We can test out this API endpoint by copy-pasting it into a new tab with the /courses?action=allCourses path appended in front of it.

If you encounter the following error, it means that you’ve provided the wrong path for the API URL. Please make sure the path appended in front of the backend URL is as described above.




## Verify changes on the AWS Management Console

We can verify the successful creation of all back-end resources on the AWS Cloud by going to the AWS Management Console and following these steps:
Search for “Amplify” on the AWS Management Console and click the “AWS Amplify” service from the search results. This takes us to the Amplify dashboard.

*Under the “All apps” section, there will be the reactclientapp Amplify app. Open this app and open the “Backend environments” tab.

* Under the “Backend environments” tab, click the “Actions” drop-down menu and select the “View details” option.

* Here, we can observe all new deployments that have happened till now. To get a more detailed response, click the “View in CloudFormation” button to open the CloudFormation service that deployed these AWS resources as a CloudFormation stack.

* On the CloudFormation dashboard, open the “Resources” tab to check what AWS resources were created. Using the “Physical ID” column, we can explore the different IAM, Lambda, API Gateway, and DynamoDB resources created directly on the AWS Management Console.

 We might also have to go into some of the nested stacks to find some resources.

*Congratulations!* Using the Amplify service, you’ve successfully configured the complete back-end service workflow on the AWS Cloud for our React app.


## Test React Application Locally

In this stage, we’ll finally explore the React client application for which we set up Amplify and created all these resources.
Application workflow

* This demo application is a dashboard application that provides a list of courses on the same page and allows us to add, edit, and delete courses on the same page. The workflow of the application is as follows:

* The homepage shows the list of courses.
* If our list is empty, click the “Click Here to Auto-Populate Mock Course Data” button to instantly populate several courses in the database.

*Scroll down to the end of the page, where the “Add a Course” form will be. We need to fill in all the fields and click the “Add Course” icon to add a course.
For any course, click the “Open Course Link” icon to open the course link.

*Click the “Edit Course” icon to open the course editor on the same card for any course. Click the “Save changes” button to update the course and the “Discard Changes” button to return to the preview mode.

click the “Delete Course” button to open the prompt to delete the course. Click the “Yes” button to permanently delete the course from the database.

Run the application:

The VS Code workspace on the right contains the entire code of our React application in the react-client-app directory. Before running the application, we must add the REST API Endpoint URL we copied previously. In case we still need to retrieve the URL, simply execute the following command in the VS Code workspace and retrieve the URL under “REST API endpoint:”

Follow these steps to run the application:

Ensure that our client has the REST API endpoint URL to connect with the back-end services. 
* To do so, replace the {{BACKEND_API_URl}} string with the previously copied REST API endpoint URL in the react-client-app/src/hooks/useFetch.js file on line 13.
* For ease, the useFetch.js file can be easily opened by executing the following command:

code /usercode/react-client-app/src/hooks/useFetch.js

Now, we can run the demo application below by executing the following command in the VS Code terminal:

*npm start*

When the React development server starts, copy and paste the following URL into a new browser tab to test the client application currently running on localhost.


## Final stage: Publish React Application to the AWS Cloud

You’ll finally deploy and publicly host our React application on the AWS Cloud using the Amplify service. To do so, we’ll be using AWS Amplify’s hosting service.
After the completion of this task and the deployment of the client application on the AWS Cloud

* First, terminate the localhost session for our React application in the VS Code workspace terminal by pressing the “Control + C” keys on the terminal.

To begin initializing hosting for this Amplify project, execute the following command in the VS Code workspace terminal on the right:

#### Deploy hosting logic to the AWS Cloud


* To begin initializing hosting for this Amplify project, execute the following command in the VS Code workspace terminal on the right:

*amplify add hosting*


Select the “Hosting with Amplify Console (...” option and press the “Enter” key:
? Select the plugin module to execute …  (Use arrow keys or type to filter)
❯ Hosting with Amplify Console (Managed hosting with custom domains, Continuous deployment)
  Amazon CloudFront and S3
Select the “Manual deployment” option and press the “Enter” key because we want to manually deploy our application once instead of implementing a complex continuous deployment logic:
? Choose a type (Use arrow keys)
  Continuous deployment (Git-based deployments) 
❯ Manual deployment 
  Learn more 
Upon the successful creation of the hosting resources, we’ll be greeted with the following response:
You can now publish your app using the following command:


*Command: amplify publish*

Now, execute the following command in the VS Code terminal to push and publish the React application to the AWS Cloud:
amplify publish
Amplify should begin pulling the back-end dev environment from the AWS Cloud. This might take a few seconds. Once done, Amplify will display the CloudFormation operation to apply on all Amplify resources, which should be “Create” for only the amplifyhosting resource. Press “y” to acknowledge that we want to proceed ahead with the deployment:
   Current Environment: dev    

| Category | Resource name    | Operation   |   Provider plugin   |
| :---:   | :---: | :---: |:---: |
| Storage | coursesTable   | Create   | awscloudformation   |
| Function | LambdaBackendService   | Create   | awscloudformation   |
| Api | backendService   | Create   | awscloudformation   |

✔ Are you sure you want to continue? (Y/n) · yes

The application deployment will take some time to complete, and Amplify will display the progress in the meantime. Once the deployment is complete, we’ll be greeted with a response end similar to the following:
✔ Zipping artifacts completed.
✔ Deployment complete!
https://dev.<APP_ID>.amplifyapp.com


**Copy and paste the deployment URL in a new browser tab to test the client application currently hosted publicly on AWS.
Congratulations! We’ve successfully deployed a complete end-to-end web application using AWS Amplify and successfully tested it.**




