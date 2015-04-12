# Test Isso (comments engine)

## Prerequisites

* [Docker](https://docs.docker.com/installation)
* [Compose](https://docs.docker.com/compose/install)

## Build

    git clone git@github.com:oren/test-website.git
    cd test-website
    docker-compose build

## Run

    docker-compose up

or

    docker-compose run --service-ports app

## Get inside

    docker-compose run app sh
