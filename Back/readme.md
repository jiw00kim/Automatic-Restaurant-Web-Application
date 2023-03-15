1.
Need to install NodeJS to start Serverless Framework. (https://nodejs.org/en/download/)

After installed NodeJS, open your powershell or Nodejs CLI, "Node.js command prompt", and input the following command

```console
npm install serverless -g
```

2.
Input the following command

```console
serverless config credentials --provider aws --key AKIA5FVSFI37QIGOGAFC --secret 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
```

3.
Move into "~/Project directory/Back/" and input the following command

```console
.\build.cmd
```
to build the project

```console
sls deploy
```
to deploy the service to AWS

If you see the success message, you are ready to develop