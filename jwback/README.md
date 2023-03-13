## Description

Nest backend.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Controllers

Controllers are responsible for handling incoming requests and returning responses to the client.

A controller's purpose is to receive specific requests for the application. The _routing_ mechanism controls which controller receives which requests. Frequently, each controller has more than one route, and different routes can perform different actions.

In order to create a basic controller, we use classes and decorators. Decorators asociate classes with required metadata and enable Nest to create a routing map (tie requests to the corresponding controllers).

```
For quicly creating a CRUD controller with the validation built-in, you may use the CLI's CRUD generator:

> nest g resource [name]
```

# Routing

In the following example we'll use the `@Controller()` decorator, which is required to define a basic controller.

We'll specify an optional route path prefix of `cats`. Using a path prefix in a `@Controller()` decorator allows us to easily group a set of related routes, and minimize repetitive code.

For example, we may choose to group a set of routes that manage interactions with a cat entity under the route `/cats`. In that case, we would specify the path prefix `cats` in the `@Controller()` decorator so that we don't have to repeat that portion of the path for each route in the file.

Since we've declared a prefix for every route (cats), and haven't added any path information in the decorator, Nest will map `GET /cats` requests to this handler. As mentioned, the path includes both the optional controller path prefix and any path string declared in the request method decorator.

For example, a path prefix of `cats` combined with the decorator `@Get('breed')` would produce a route mapping for requests like `GET /cats/breed/`.

In our example above, when a `GET` request is made to this endpoint, Nest routes the request to our user-defined `findAll()` method. Note that the method name we choose here is completely arbitrary. We obviously must declare a method to bind the route to, but Nest doesn't attach any significance to the method name chosen.

Nest employs two different options for manipulating response:

-   Standard (recommended). Using this built-in method, when a request handler returns a javascript object or array, it will automatically be serialized to JSON. When it returns a JavaScript primitive type (string, number, boolean), however Nest will send just the value without attempting to serialize it. This makes response handling simple: just return the value, and Nest takes care of the rest.

Furthermore, the response's status code is always 200 by default, except for POST requests which uses 201. We can easily change this behaviour by adding the `@HttpCode(..)` decorator at a handler-level.

# Request Object

Handlers often need access to the client request details. Nest provides access to the _request object_ of the underlying platform. We can access the request object by instructing Nest to inject it by adding the `@Req()` decorator to the handler's signature.

```js
cats.controller.ts;

import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'expres';

@Controller
export class Controller {
    @Get()
    finAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }
}

// In order to take advantage of `express` typings install @types/express package.
```

The request object represents the HTTP request and has properties for the request query string, parameters, HTTP headers, and body. In most cases, it's not necessary to grab these properties manually. We can use dedicated decorators instead, such as `@Body()` or `@Query()`, which are available out of the box. Below is a list of the provided decorators and the plain platform-specific objects they represent.

> @Request(), @Req() => req

> @Response(), @Req()\* => res

> @Next() => next

> @Session() => req.session

> @Param(key?:string) => req.params / req.params[key]

> @Body(key?:string) => req.body / req.body[key]

> @Query(key?:string) => req.query / req.query[key]

> @Headers(name?: string) => req.headers / req.headers[name]

> @Ip() => req.ip

> @HostParams => req.hosts

Note that when you inject either `@Res()` or `@Response()` in a method handler, you put Nest into **Library-specific mode** for that handler, and you become responsible for managing the response. When doing so, you must issue some kind of response by making a call on the `response` object. (`res.json(...)` or `res.send(...)`), or the HTTP server will hang.

# Resources

Earlier, we defined an endpoint to fetch the cats resource (GET route). We'll typically also want to provide an endpoint that creates new records. For this let's create the POST handler.

```js
import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Post()
    create(): string {
        return 'This action adds a new cat';
    }

    @Get()
    findAll(): string {
        return 'This actions returns all cats';
    }
}
```

Nest provides decorators for all the standards HTTP methods: `@Get()`, `@Post()`, `@Put()`, `@Delete()`, `@Patch()`, `@Options()` and `@Head()`. In addition, `@All()` defines an endpoint that handles all of them.

# Route wildcards

Pattern based routes are supported as well. For instance, the asterisk is used as a wildcard, and will match any combination of characters.

```js
@Get('ab*cd')
findAll(){
    return 'This route is a wildcard';
}
```

The `ab*cd` route path will match `abcd`, `ab_cd`, `abecd` and so on. The characters `?`, `+`, `*`, and `()` may be used in a route path, and are subsets of their regular expression counterparts. The hyphen (-) and the dot (.) are interpreted literally by string-based paths.

# Status Code

As mentioned, the response `status code` is always 200 by default, except for POST requests which are 201. We can easily change this behaviour by adding the `@HttpCode(..)` decorator at a handler level.

```js
@Post()
@HttpCode(204)
create(){
    return 'This action adds a new cat';
}

```

Often, your status code isn't static but depends on various factors. In that case, you can use a library specific **response** (`@Res()`) object.

# Headers

To specify a custom response header, you can etiher use a `@Header` decorator or a library-specific response object (and call `res.header()` directly).

```js
@Post()
@Header()
create(){
    return 'This action adds a new cat';
}
```

# Redirection

To redirect a response to a specific URL, you can either use a `@Redirect()` decorator or a library specific response object (and call `res.redirect()`directly).

`@Redirect()` takes two arguments, `url` and `statusCode`, both are optional. The default value of `statusCode` is 302 (Found) if omitted.

```js
@Get()
@Redirect('https://nesjt.com', 301)
```

Sometimes you may want to determine the http code or the redirect url dynamically. Do this by returning an object from the router handler method with the shape.

```json
{
    "url": string,
    "statusCode": number
}

```

Returned values will override any arguments passed to the `@Redirect()` decorator. For example:

```js
@Get('docs')
@Redirect('https://docs.nestjs.com', 302)
getDocs(@Query('version') version){
    if(version && version === '5'){
        return {url: 'https://docs.nestjs.com/v5/'}
    }
}
```

# Route parameters

Routes with static paths won't work when you need to accept _dynamic data_ as part of the request (e.g. `GET /cats/1`) to get cat with id `1`.

In order to define routes with parameters, we can add route parameter **tokens** in the path of the route to capture dynamic value at that position in the request URL. The route parameter token in the `@Get()` decorator example below demonstrates this usage.

Route parameters declared in this can be accessed using the `@Params()` decorator, which should be added to the method signature.

> Routes with parameters should be declared after any static paths. This prevents the parameterized paths from intercepting traffic destined for the static paths.

```js
@Get(':id')
findOne(@Param() params):string{
    console.log(params.id)
    return `This action returns a #${params.id} cat`;
}

```

`@Params()` is used to decorate a method parameter (`params` in the example above), and makes the route parameters available as properties of that decorated method parameter inside the body of the method. As seen in the code above, we can access the `id` parameter by referencing `params.id`. You can also pass in a particular parameter token to the decorator, and then reference the route parameter directly by name in the method body.

> Import `Param` from the `@nestjs/common` package.

```js
@Get(':id')
findOne(@Param('id') id:string): string{
    returns `This action returns a #${id} cat`;
}
```
