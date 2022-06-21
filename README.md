# prisma-starter-ts-app

"The downloaded project had Prisma all set up and included an SQLite database with some blog data.

The `schema.prisma` file described the User and Post models that represent tables in the SQLite database.

After downloading and installing the dependencies, you wrote a query using the Prisma Client.

This query asked for all the users and their blog posts. You then printed the results of the query to the terminal."


## SRC

https://www.prisma.io/docs/getting-started/quickstart


## Run

Running
```bash
$ npm run dev
```

returns ...
```bash

┌─────────┬────┬───────────────────┬─────────┬──────────────┐
│ (index) │ id │       email       │  name   │    posts     │
├─────────┼────┼───────────────────┼─────────┼──────────────┤
│    0    │ 1  │ 'sarah@prisma.io' │ 'Sarah' │      []      │
│    1    │ 2  │ 'maria@prisma.io' │ 'Maria' │ [ [Object] ] │
└─────────┴────┴───────────────────┴─────────┴──────────────┘

[
  { id: 1, email: 'sarah@prisma.io', name: 'Sarah', posts: [] },
  {
    id: 2,
    email: 'maria@prisma.io',
    name: 'Maria',
    posts: [
      {
        id: 1,
        title: 'Hello World',
        content: null,
        published: false,
        authorId: 2
      }
    ]
  }
]
```
