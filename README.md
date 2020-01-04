## Getting Started

These instructions will get a copy of the project running on your local machine.

### Prerequisites

* Node.js

```
$ brew install node
```

*  To get the  API key, sign up on : http://omdbapi.com/apikey.aspx
  

Clone the repo and install dependencies:

```
$ cd autocompletemovie
$ npm i
```
The 'dev' script is setup to pull an M_API_KEY from your bash environment. Define M_API_KEY:

```
$ export M_API_KEY=yourAPIkey
```

Finally, run the app on a local server. Application will automatically launch in your default browser:

```
$ npm run dev 
```

