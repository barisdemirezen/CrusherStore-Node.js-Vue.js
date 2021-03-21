# CrusherStore Node.js Vue.js
## Welcome to **Crusher Store** ##
### Live example link: [Crush Store](https://crushstorevue.herokuapp.com) ###
* **I Know there are some bugs with routing on live example. Since I have finished my objectives, I'm not really willing to spend time on there bugs**


### Technologies Used ###
#### Front-end #####
Vue.js with vanilla javascript and also UI Kit named StoreFront Vue.
* [Store Front UI Kit Github](https://github.com/vuestorefront)
* [Store Front UI Website](https://www.storefrontui.io)

[Vuex](https://vuex.vuejs.org) for state management and [Vue Router](https://router.vuejs.org) for front-end routing.
### Back-end ###
[Node.js](https://nodejs.org/en/) with [Express.Js Framework](https://expressjs.com)
### Database ###
[Mongo.Db on cloud (Mongo Atlas)](https://www.mongodb.com/cloud/atlas)

## Run App on local - Tutorial ##
* **Back-end**

To start back-end server you can use nodemon. Like code below.

* Make sure you have filled to .env file variables (I leaved them empty for you)
* Front-end rest-api endpoints are defined with localhost:3000, so if you make any port change on express.js, you also need to change them on front-end api endpoints.

```
cd api
nodemon start
```

* **Front-end**

To start front-end server you can use code below.

```
cd crushstore
npm run serve
```

* **Database Structure**

Creating at least one User document is mandatory to use cart function. After creating User document, change vuex default state like below and search for variable named *userid*
* Go to file

````
cd crushstore/src/store/index.js
````

* Before

````
userid: "6049ff7d04ec3c1e44c0b742"
````

* After

````
userid: *Your User's ObjectId as String type*
````

* Database Structure

````
{Some DB Name}

 categories
  _id:ObjectId(),
  title:String,
  image:String
  
 items
  _id:ObjectId(),
  id:int,
  name:String,
  price:double,
  image:String,
  details:Object
   detail:String,
   images:Array
    String,
    String,
    ....
  stock:int,
  category:ObjectId - Must match with some-id in category's ObjectId
  
 users
  _id:ObjectId();
  id:int,
  name:String,
  surname:String,
  cart:Array
   ObjectId(), - Must match with some item's ObjectId
   ObjectId(),
   ...
````

Hope you liked it. Feel free to comment and connect.

**Check my [linked.in](https://www.linkedin.com/in/barış-demirezen-655879190/)**
