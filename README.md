# Fate/GO Calculator v2

An app which allows a user to keep track of the Servant characters they've obtained in the mobile game Fate/Grand Order. It allows the user to update the characters' stats as they level up, sort them by name, class, and various stats, and offers suggested teams based on class advantages and disadvantages.

## Setup Steps

1. [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone) this repository.
1. Run `install npm` to install all dependencies
1. Use `npm run server` to spin up the server.

## Important Links

- [Other Repo](www.link.com)
- [Deployed API](www.link.com)
- [Deployed Client](www.link.com)

## Planning Story

Lorem ipsum dolor amet cloud bread letterpress squid actually, single-origin coffee williamsburg af poutine fingerstache austin semiotics paleo man braid vexillologist. Tumeric literally banjo pickled disrupt cold-pressed thundercats shoreditch try-hard health goth intelligentsia pop-up small batch skateboard farm-to-table. Meh tofu fam, direct trade tattooed stumptown etsy everyday carry activated charcoal. Neutra cornhole polaroid literally salvia, listicle tofu.

### User Stories

- As a user I want to sign in/up
- As a user I want to sign out
- As a user I want to change password
- As a user I want to Create a new Servant
- As a user I want to Read multiple Servants
- As a user I want to Read a single Servant
- As a user I want to Update a Servant I own
- As a user I want to Delete a Servant I own

### Technologies Used

- HTML/CSS
- Bootstrap
- Javascript
- Express
- React

### Catalog of Routes

Verb         |	URI Pattern
------------ | -------------
GET | /servants
GET | /servants/:id
POST | /servants
PATCH | /servants/:id
DELETE | /servants/:id

### Unsolved Problems

- Still need to ....
- Would like to eventually ....

## Images

#### Wireframe:
![wireframe](https://i.imgur.com/V9DThg2.jpg)
![wireframe](https://i.imgur.com/pfJppUC.jpg)

---

#### ERD:
![ERD](https://i.imgur.com/t4kX8up.jpg)
