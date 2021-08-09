## Running the app

When in the project directory
```bash
$ npm run start
```
or
```bash
$ nest start
```

Then send a post request to localhost:3000/order with body containing the four request parameters

## Total Hours Worked

10 hours


## Challenges, Issues, or Bugs

Challenges:
- Making sure parameters were validized and not empty strings
- Throwing errors when in promise
- Setting up the database structure within nestjs and the relationship between user and order

Issues:
- Relationship between user and order isn't set up properly so the tables in the database don't have any foreign keys to the other.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).


## License

Nest is [MIT licensed](LICENSE).

