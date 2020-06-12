<h1 align="center">
  <img src=".github/gobarbericon.svg" alt="GoBarber"><br />
  GoBarber
</h1>

<h4 align="center">
  Rest API for a fictitious barber shop. <br />
  <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="40px" /><br />
  <small>Project created during the Rocketseat GoStack Bootcamp.</small>
</h4>
<p align="center">
  <a href="https://www.linkedin.com/in/leonardo-freua-aa3a40138/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Leonardo%20Freua-%233b9eff">
  </a>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Leonardofreua/GoBarber">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/Leonardofreua/GoBarber">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?color=%233b9eff">
</p>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-minidisc-installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<br />

## :rocket: Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [Sequelize](https://sequelize.org/)
- [Express](https://expressjs.com/pt-br/)
- [JWT](https://github.com/auth0/node-jsonwebtoken)
- [bee-queue](https://github.com/bee-queue/bee-queue)
- [Sentry Repository](https://github.com/getsentry/sentry) | [Sentry Site](https://sentry.io)
- [Nodemailer Repository](https://github.com/nodemailer/nodemailer) | [Nodemailer Site](http://nodemailer.com/)
- [Mailtrap](https://mailtrap.io/)
- [date-fns](https://date-fns.org/)

### Databases

- [Postgres](https://www.postgresql.org/) - *Main storage*
- [MongoDB](https://www.mongodb.com/) - *To store the Notifications*
- [Redis](https://redis.io/) - *Manage by sending emails in the queue*

## 💻 Project

GoBarber is a project that aims to provide several features present in a possible application for a Barber Shop, these features include:

- User registration and authentication via `JWT`;
- Upload user avatar using `Multer`;
- Appointments registration and listing;
- Schedule notifications;
- Appointment cancellation with email notification to the provider.

## :minidisc: Installation

- Clone project: `git clone https://github.com/Leonardofreua/GoBarber.git`
- Download Postgres image: `docker run --name storage_goBarber -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
- Download MongoDB image: `docker run --name mongobarber -p 27017:27017 -d -t mongo`
- Download Redis image: `docker run --name redisbarber -p 6379:6379 -d -t redis:alpine`
- Run: `yarn install`
- Then: `yarn dev`

## 🤔 How to contribute

- Fork this repository;
- Create a branch with your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: My new feature'`;
- Push to your branch: `git push origin my-feature`.

Once your pull request merge is done, you can delete your branch.

## :memo: License

This project is under the MIT license. See [LICENSE](LICENSE) file for more details.
