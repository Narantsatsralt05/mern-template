# Writing an issue guidance

## Issue title format

```
[project name in lowercase] Short title
```

Task title formats:

- <verb/action> [activity] (e.g. “Perform backup”)
- <verb/action> [thing] (e.g. “Research new javascript framework”)

New features:

- Implement <endpoint> (e.g. Implement POST /api/v1/users)
- Create endpoint <endpoint> (e.g. Create endpoint POST /api/v1/users)

Updates:

- Make [feature] run faster
- Improve the performance of [feature/screen/endpoint]
- Update [feature] with/to [update]
- Rename [feature/text] to [new name]

In example:

`[client] Doc - Update previous documentation on client`

`[server] Bug - Path alias is not working`

## Issue label format

Each issue must be have a label.

> The **first label** is to indicate to which project this issue belongs. (required)

- `client`
- `server`
  General issues for many projects

> **Second label** is to indicate to what kind of work this job is intended to do.

- `enhancement`
  New feature or request
- `doc`
  Updated documentation or readme
- `bug`
  Something isn't working

> **Third label** is to indicate to what the current state of affairs is. (optional)

- `blocked`
  blocked by other task or design
- `help wanted`
  Extra attention is needed
- `question`
  Further information is requested
- `wontfix`
  This will not be worked on
- `question-in-design`
  Further design information is requested

## Issue description format

- **Context**: explain the conditions which led you to write this issue.

  For example: _“Since we’ve configured typescipt in the project, our code quality is improved.”_

- **Problem or idea**: the context should lead to something, an idea or a problem that you’re facing.

  For example: _“But our code quality is not good enough. We need to configure eslint in our project.”_

- **Solution or next step**: this where you move forward. You can engage others (request feedback), assign somebody else to the issue, or simply leave it for further investigation, but you absolutely need to propose a next step towards solving the issue.

  For example: _“@user please take look at eslint configuration of our previous project. [Here] is repo link. We need to install eslint, eslint-config-next, typescript-eslint“_

- **Other requirements**:
  - Please Keep titles short and descriptive.
  - Include/tag the right people in your discussion.
  - Format your messages. Use markdown syntax. Steps of work can be described with checkboxes.
  - Add useful links to you references.

# Branch naming convention

Branch name consists of 3 parts with following format:

- ID of the issue (number)
- Short description
- Hyphens must be seperators

For example: `12-add-content-basic-of-react`

**Branch type based names**

Type based names might be useful.

For example:

`feature/12-add-content-basic-of-react`
`hotfix/23-fixed-runtime-timeout-error`
`refactor/7-refactored-jwt-authentication`
`docs/added-installation-guide-in-readme`

# Commit messages

In monorepo, short name in commit messages can be helpful. Subject of notification emails will become more descriptive.

Please keep commit message short but explicit. Prepend your action before commit message.

For example:

`Fix - [server] Pagination next error`

`Fix - [client] Dropdown last is not appearing`


# Pull request format

**Naming convention**:

- Project short slug
- Title - Short informative summary of the pull request

  For example: `[web] Footer`, `[component]`

**Description**:

- IssueID must be provided with `#`. For example: `#12`
- Description: More detailed explanatory text describing the PR for the reviewer. What did you solve/fixed.


# PR/Code reviewing

PR/Code reviewing guidance is [here](review.md).
