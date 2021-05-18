# graphQl-demo

<ins>**Topic to be covered**</ins>
* Graphql Basic
* Scehma
* Query
* Mutation
* Resolver

---

**Definiton**

```
GraphQL is a declarative, strongly-typed query language for client applications. Clients define the exact data shape and contents that they need in a single request which eliminates over-fetching problems and circumvents the need for multiple costly round trips to the server.

GraphQL is a query language for your API - not databases. GraphQL does not mandate the use of a particular language – JAVA, Ruby and many others have implementations. GraphQL itself is independent of language.
```

**Graphql example as gif**

![image](https://miro.medium.com/max/1400/1*K0czTfHWTtNNBhvaVdyXfw.gif)

---

<ins>**Problem with REST api**</ins>
1. No of endpoint can go higher in case of REST api if our application is bigger.
   Unlike REST, Graphql exposes single endpoint mostly **graphql/** with POST method instead of feature based endpoint

`Taking REST api exaple that may look like this`
```
    GET user/:id
    GET user/:id/followers
    GET user/:id/followers/:followerId
    GET user/:id/posts 
    GET user/:id/posts/:postId
```

2. There is over and under-fetching of resources in case of REST api.
   
---

<ins>**Key concepts:**</ins>

1. Queries — They are basically READ operation in graphql

2. Mutations — They are basically create, update and  delete in CUD in graphql.
* `So whatever client sent in request to server we call it query (or muatation) in graphql.`
3. Schema - It act as contract between clinet and server. It usually consist of typeDefs. They usually consist of root Type called Query, Mutation alon with your custom Type.

#### <ins>Root Types :</ins> 
```
type Query {
    getpersons(): User
}

type mutation {
    createUser(name: String, age: number) : User
}
```

```
Graphql has it own type system called sdl (schema definition language) which is used to define schema of an API
if we take an exmple of Blog application Where user create account and they can write there post.
```

**Examples**
``` 
    type User {
        name: string!
        age: number!
    }

```

```
    type Post {
        content: string! 
    } 
```

**We can also put related schema type in below format**

Person typedefs who can write post clould look like this

``` 
    type User {
        name: string!
        age: number!
        posts: [post!]!
    } 
```

Post typedefs that belong to an author could look like this

```
    type Post {
        name: string!
        age: number!
        author: [User]!
    }
```

   
4. Resolver -  A resolver is a function that resolves a value for a type or field in a schema.
When the server receives a query (or mutation), it will call all the functions for the fields that are specified in the query’s payload. It thus resolves the query and is able to retrieve the correct data for each field.

To better understand resolvers, you need to know how queries are executed. Every GraphQL query goes through three phases. Queries are parsed, validated and executed.


Parse — A query is parsed into an abstract syntax tree (or AST). 

Example 

For this query 

![image](https://miro.medium.com/max/304/1*S3xBNGThKSBNJorDvFzIkQ.png)

An AST could look like this

![image](https://miro.medium.com/max/391/1*hVSDe0UwmZDkwwL13o8Y_A.png)

Validate — The AST is validated against the schema. Checks for correct query syntax and if the fields exist.

Execute — The runtime walks through the AST, starting from the root of the tree, invokes resolvers, collects up results, and emits JSON.


For this query

```
    query GetBooksByLibrary {
        libraries {
            books {
                author {
                    name
                }
            }
        }
    }
```

A resolvers process result in a chain

```
    Query.libraries() -> Library.books() -> Book.author() -> Author.name()
```

Resolver functions can optionally accept four positional arguments.

* root or parent - It contains the result of the previous resolver execution level. GraphQL queries can be nested. Each level of nesting (i.e. nested curly braces) corresponds to one resolver execution level. 

	
* args - An object with the arguments passed into the field in the query.

* context - This is an object shared by all resolvers in a particular query. They can have request and respose or any thing which we want to share across resolvers like authentication data.

	
* info - It contains information about the execution state of the query, including the field name, path to the field from the root.

---

**Time for Demo**

---

<ins>**Problem with graphql**</ins>

* Require separate configuration at client end for implemneting caching  as Graphql reuest are POST.
* It increase more work at backend levet as you need to maintain resolver and lot and lot of typedefs for schema apart from the database schema you alreay have.

<ins>**Conclusion**</ins>

**Q.** Should we start using graphql in our project ?

**A.** It's totally depend on your application. If you building application for specfic client that have this requirement go for it but if your building an application where n number of client going to use your api it will be better to go with rest as it is more acceptable compare to graphql. As we know consuming graphql api require separate configuration at client level and we can not ask our client to make change in your client application to consume your api. 

---
<ins>**Topic to be covered in some other session**</ins>
* Front-end implementation of graphql
* Subscription model in graphQl
* Handling Error
* Pagination
* Authorization
* Caching