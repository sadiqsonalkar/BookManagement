# CRUD-using-MongoDB
I have created Book Management System using Node.js and Express.js and used MongoDB Atlas as my database and I have perform CRUD in it.

MongoDB is an open-source document database and leading NoSQL database.
MongoDB is a document database. It stores data in a type of JSON format.
A record in MongoDB is a document, which is a data structure composed of key value pairs similar to the structure of JSON objects.
MongoDB is a cross-platform, document oriented database that provides, high performance, high availability, and easy scalability. 
MongoDB works on concept of collection and document.
Documents can contain many different key-value pairs, or key-array pairs, or even nested documents. MongoDB is a document database.

MongoDB Atlas is a fully-managed cloud database that handles all the complexity of deploying, managing, and healing your deployments on the cloud service provider of your choice (AWS and Azure). 
MongoDB Atlas is the best way to deploy, run, and scale MongoDB in the cloud. With Atlas, you’ll have a MongoDB database running with just a few clicks, and in just a few minutes.
Multi-region, multi-cloud, Serverless and elastic, Always-on security, Native tooling, Continuous backups, etc. are some advantages of MongoDB

Database - Database is a physical container for collections. Each database gets its own set of files on the file system. A single MongoDB server typically has multiple databases.

Collection - Collection is a group of MongoDB documents. It is the equivalent of an RDBMS table. A collection exists within a single database. 

Document - A document is a set of key-value pairs. Documents have dynamic schema. Dynamic schema means that documents in the same collection do not need to have the same set of fields or structure, and common fields in a collection's documents may hold different types of data.

In my application I have performed CRUD in MongoDB database.
I have used Node and some other module to make my project.
To connect my application to the cloud I have use Mongoose.

CRUD Operations means 
CREATE – Insert data
READ – Select data
UPDATE – Update data
DELETE – Delete data

Using the New Book Form we can add book into database.
Using the Update Icon we can update the book which we already have added in the database.
Using delete Icon we can delete the book from the database.
I can also directly create, update, Delete book from the database itself without using the application.
I have applied HTML,CSS and JS into my application.

Following is the dependencies I have added:
1. We are using express to rapidly develop node application.

2. We are using morgan to help us to log a message every time when we make a request.

3. We are using nodemon to allows us to restart the server automatically when we make changes in the project.

4. We are using ejs(Embedded JavaScript) is the template engine i'm using in this project it allow us to create dynamic html.

5. We are using body-parser module it allows us to serialize the data and access the form data using body property.

6. We are using dotenv module which allows you to separate the secret from your source code this is useful in collaborative environment where you may not want to share your database login credential with other people instead you can share the source code while allowing other people to create their own dot env file.

7. We are using mongoose which will helps us to connect the project with mongodb database.

8. We are using axios library this library makes it easy to make a request in express application.

To connect to MongoDB atlas I have a file name Config.env where u can connect ur application to the database.

To create a database in MongoDB Atlas:
1. Login with your account.
2. Create New project
3. Create new databasse. You can select the free version for this project.
4. Then according to the area you live in select your region then create the cluster.
5. Enter a credential which will help u to connect to your application.
6. Then click on add your current IP.
7. Then your Cluster/Database will be create there you will see Connect Button. From there you can connect to your application by copying the path
