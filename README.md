# URL Shortner API
This is URL shortner API developed using expressJS & MongdoDB in nodeJS. Below are the details about this api.

## POSTMAN API Collection
You can access postman API collection at below given URL

[view collection](https://documenter.getpostman.com/view/17359967/UyxgKoCY)


## Packages & Tech
- expressJS
- Mongoose
- [simpleflakes](https://github.com/leodutra/simpleflakes) (It is used for genratation of unique id for URLs over distributed system. The concept is inspired by twitter snowflake ID)
- dotenv
- nodemon
- cors

## Local Installation

Step1: Clone the repo in the localhost

Step2: Install node packages using command as below
```sh
npm install
```

Step3: create .env file in the root of the project and set the below variables as given

```sh
MONGO_URL = (It is used for mongoDB database conenction. The DB use to be set here.)
PASS_SEC = (It is used for password hasing)
JWT_SEC = (It is used for JWT Auth process)
```

Step4: Once all the above steps are done you can project using below command in localhost.
```sh
npm start
```

## Live Installation

I have used Varcel to host the nodeJs application. The only steps required to host nodejs application in varcel is creating vercel.json file in the root of the poject.

varcel.json
```sh
{
    "version": 2,
    "builds": [
        {
            "src": "./index.js",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/"
        }
    ]
}
```

Once this done, you can directly import the project in varcel, and set ENV variable and deploy the application. It then follow the CI/CD pipleline for autopush for every commit done at main branch.
