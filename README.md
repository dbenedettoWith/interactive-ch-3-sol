# interactive-ch-3-sol

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/interactive-ch-3-sol)

this is an interactive challenge that tests the basic knowledge of Angular application

## goal

The goal of this challenge is to improve upon existing Angular code by applying Angular coding best practices

The application comes equipped with an in memory web api.

## Best practices to look for:

1. Use interface to define the type of Product object that we expect to receive from the API.
2. Avoid using any type for the user variable, and instead, use the User interface to make the code more type-safe.
3. Use the async pipe in the template to handle the subscription and unsubscription of the observable.
4. Use map() array method instead of using forEach() since map() method creates a new array with the results of calling a function on every element in the original array, while forEach doesn't create a new array
5. Use the $ sign in the variable name to indicate that it is an Observable.
   5.Use the pipe() method to apply operators to the observable instead of performing work in subscribe().
6. declaring the return type of the method even if it is void
   7.Use the catchError operator to handle errors in case the API call fails, in the service or component level depending on requirements.. i.e do we need to show an error message or log to the backend etc..
