# learnnodejs
I am trying to understand nodejs.


mondodb start up
#to start domain
mongod --dbpath /Users/akolla/installations/mongodb/data/db

#client command
mongo

#create and use first db
> use firstapi
switched to db firstapi
> db.myNewCollection1.insertOne( { x: 1 } )
{
	"acknowledged" : true,
	"insertedId" : ObjectId("5941fae56ab97bdd760effaf")
}
