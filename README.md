#
 # 1. Problems with https://github.com/sgarg5858/dynamic-forms-poc/tree/1-basic-dynamic-form-approach

1. We have the config and its type.
2. But we have to create the formGroup and register control everytime, which we can move the logic to formService.
3. But we have to do ngSwitchCase in the template, which we can move to one html file and we can use that file in every component template, but if take a look carefully, HTML part is exactly the design bottleneck where we create controls based on its type.
4. In future we might have 20 type of controls, we can’t put all 20 switch blocks, we will be violating Single Responsibility Principle and Open/Closed Principle.
5. My Idea is to extract each control into its own separate component and create those components dynamically using ngComponentOutlet.

# 2. Bits about this: [2-dynamic-forms-without-nested-group-array-support](https://github.com/sgarg5858/dynamic-forms-poc/tree/2-dynamic-forms-without-nested-group-array-support)

1. We have solved one problem by moving dynamic controls to their dedicated components, and resolving those compnonents via resolverService which helps in
   introducing new controls with ease, also less repititive work.
2. Till now our implementation supports only controls, we don't support formGroups or formArrays.
3. I also don't like the explicity [formGroup]="form" in every dynamic control component.
4. But for now we will focus on introducing formGroup support to our dynamicForm Implementation.


# 3. Bits about [3-dynamic-forms-with-form-group-support ](https://github.com/sgarg5858/dynamic-forms-poc/tree/3-dynamic-forms-with-form-group-support)

1. FormGroup works fine now in our dynamic approach.
2. But we have to use formGroup wrapper in every dynamic component, which i would like to remove and use more better approach.
3. We will use viewProviders to resolve parent formGroup/formGroupName , as formControlName  resolves the provider for ControlContainer using @Host, so it should find a provider in the same view, providers will not work, as @Host decorator.

# 4. Bits about [8-updating-error-messages-dynamically](https://github.com/sgarg5858/dynamic-forms-poc/tree/8-updating-error-messages-dynamically)

1. Currently we ard hard-coding the logic of error messages in the directive, we can make that configurable.




# DynamicFormsPoc

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@dynamic-forms-poc/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.






## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
