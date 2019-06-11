# Testing React applications with Jest

Curso da Pluralsight de como testar aplicações em React usando Jest

https://app.pluralsight.com/library/courses/testing-react-applications-jest/table-of-contents

## Why testing?

- Prevents regression
- Provides objective success criteria
- Facilitates complex modular applications

## What are Tests?

- A suite of tests is an application which checks your application
- Composed of assertions about how your code will execute
- Tests files are commited to the repo with application code
- Suite is run  quickly and routinely by CI tools

### Whats if Tests didn't exist?

- Someone would have manually check the whole application every change
- No easy way to know if your code has broken someone else's
- No way to mensure the "correctness" of the code
- As the application grow, the cost of manually checking for regression becomes burdensome
- Eventually, adding new features become too risky ans expensive, and the application can no longer grow

## Advantages and Disadvantages of testing

#### Advantages

- Prevents unexpected regression
- Reduces the need for manual verification
- Verify corner cases
- Allows developer to focus on current tasks (versus worrying about past ones)
- Allows for modular construction of applications that would otherwise be too complex

#### Disadvantages

- More code to write, debug and maintain
- More tools that developers need to be able to use
- Additional project dependency and cloud host compatibility concerns
- Tests must actually be used and respected to be of value
- Non-critical test failures may cause the app to be rejected on the CI level

## How regression works?

![How regression works](readme_files/how_regression_works.png)

### How testing stop regression

![How testing stop regression](readme_files/how_testing_stop_regresion.png)

## Different kinds of tests

> Type of test

```
1) Unit test
2) Component test
3) Snapshot test
4) End-to-end test
```

> What it tests

```
1) A single function or service
2) A single component (functionality)
3) A single component (regression)
4) Interaction between multiple components
```

> Required tool

```
1) Mocha / Jest
2) Jest / Enzyme
3) Jest
4) Protactor / Cypress
```

### Unit tests

![Unit tests](readme_files/unit_tests.png)

### Component tests

![Component tests](readme_files/component_tests.png)

### Snapshot tests

![Snapshot tests](readme_files/snapshot_tests.png)

### Coverage tests

![Coverage tests](readme_files/coverage_tests.png)