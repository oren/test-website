# Website in Node.js for testing Isso (comments engine)

http://posativ.org/isso/

## Prerequisites

* [Docker](https://docs.docker.com/installation)
* [Compose](https://docs.docker.com/compose/install)

## Run

First run the comments service - [https://github.com/oren/test-isso](https://github.com/oren/test-isso)

    git clone git@github.com:oren/test-website.git
    cd test-website
    docker-compose build
    docker-compose up

To test it go to: [http://localhost:3000](http://localhost:3000).
