### Run Locally

    git clone http://github.com/muhilham/gc-fe-test.git
    cd FE-TEST
    yarn install

running in development

    yarn dev


## Project structure

Root

    ...
    ├── components
    ├── pages
    ├── redux
    ├── package.json
    └── yarn.lock

Pages

    ...
    ├── pages
    │   ├── contact
    │   │   ├── component.js
    │   │   └── index.js
    ...
    │   ├── index.js
        └── _document.js

Redux

    ├── redux
    │   ├── ducks
    │   │   ├── PhoneBook.js
    ...
    │   ├── index.js
    │   └── root
    │       ├── epics.js
    │       └── reducers.js


# Author
Muhammad Ilham
