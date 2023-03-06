<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
<br />

<div align="center">
<h3 align="center">StackIt SDK</h3>

  <p align="center">
    Nest.js. v0.0.1
    <br />
    <p>↓ Explore the docs ↓</p>
    <a href="https://docs.google.com/document/d/1lb5mbdpTvPCZUgh3xrR-pTD4F1fHAKgfGOXrbhag_0Q/edit">Stackit SDK Guide<strong></strong></a>
    <a href="https://docs.google.com/document/d/1vFZfCGlIZfD-6ub_qdUsBFVvjLAGnMoJVKtdeOgYu1s/edit?usp=sharing">Terraform Guide<strong></strong></a>
    <br />
    <br />
    <a href="https://github.com/stackitgroup/stackit-sdk-nextjs">View Demo</a>
  </p>
</div>

## About The Project

A GitHub template can be a valuable tool when starting a new project. By using a template, many hours of work can be saved, as the template already includes a basic structure and predefined functionalities that fit the project's needs.

In the specific case of Stackit, a GitHub template can help the company speed up project development and ensure code quality and application functionality. By using an internal template, the company can customize the template to fit their needs and ensure internal standards and best practices are met.

### Built With

- [![NestJs][Nest.js]][Nest-url]
- [![NodeJS][Node.js]][Node-url]
- [![Terraform][Terraform.com]][Terraform-url]
  <br />
  <br />

### Naming Convention and Folder Structure

<details>
  <summary>Endpoint Folder Structure</summary>

- controllers
- - [controller].controller.ts
- decorators
- - [decorator].decorator.ts
- dto
- - [dto].dto.ts
- guards
- - [guard].guard.ts
- services
- - [service].service.ts
- strategies
- - [strategy].strategy.ts

</details>
<details>
  <summary>Common Folder</summary>

- dto
- - [dto].dto.ts
- exceptions
- - [exceptionTypeFolder]
- - - [exceptionType].exception.ts
- middlewares
- - [middleware].middleware.ts
- pipes
- - [pipe].pipe.ts
- providers
- - [provider].provider.ts
- constants.ts

</details>

<details>
  <summary>Config Folder:</summary>

- [configFile].config.ts

</details>
<details>
  <summary>Enums Folder</summary>

- [enum].enum.ts

</details>
Note: If you have any questions you can get in touch with the team or check samples on this SDK

<br />

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

1. Create a new repository from stackit-sdk-nestjs

   They will start with the same files and folders as [stackitgroup/stackit-sdk-nestjs.](https://github.com/stackitgroup/stackit-sdk-nestjs)

2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install Yarn packages
   ```sh
   yarn install
   ```
4. Enter your APIs in `variables.tf`
   ```js
   variable "API_KEY" {
      type        = string
      default     = "ENTER YOUR API"
      description = "ENTER YOUR DESCRIPTION"
    }
   ```
5. Enter your API in `.env`
   ```js
   API_KEY = "ENTER YOUR API";
   ```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

[contributors-shield]: https://img.shields.io/badge/CONTRIBUTORS-4-orange
[contributors-url]: https://github.com/stackitgroup/stackit-sdk-nextjs/graphs/contributors
[Nest.js]: https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white
[Nest-url]: https://nestjs.com/
[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/en/
[Jest.com]: https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]: https://jestjs.io/
[Terraform.com]: https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white
[Terraform-url]: https://www.terraform.io/
