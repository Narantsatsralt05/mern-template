# Reviewing pull request guidance

## Basic checklist

- Read about original issue and understand how to solve, and review this pull request.
- Use checklist of our pull request template.
- Check name of the pull request & branch is valid as our following standards.
- Pull request must be assigned to one of reviewers. It means that PR is ready to be reviewed.

## Code review

Read the change list. We have several checklist for reviewing change list.

**Functionality**

- UI changes are sensible and look good.

**Tests**

- Ensure tests are valid. (No cheating!)
- Tests must cover functionality of the feature
- If some lines or blocks are disabled test or lint. Please check "why"?

**Complexity & naming**:

- Code readability is important. (Name of variable, functions and classes)
- Check complexity of code. "Complex" means **"can’t be understood quickly by code readers."**

**Style**: _This part is solved with lint rules_

**Documentation / Comments**

- Good comments explain why this code is needed. If code is not clear to explain itself, we need to to make it simpler. But regex or some complex algorithms it needs "human explanation".
- Mostly comments explain _why_ instead of _what_.

- If we are following self-generated documentation rule (For example: Typedoc, Sphinx etc...), please ensure code is well documented or not.

# About communication

- **Be kind** and be respectful. If there's something good in change list, tell them what they did right if they did wrong **explain your reasoning**

**Bad and good comment example:**

Bad: “Why did you use threads here when there’s obviously no benefit to be gained from concurrency?”

Good: “The concurrency model here is adding complexity to the system without any actual performance benefit that I can see. Because there’s no performance benefit, it’s best for this code to be single-threaded instead of using multiple threads.”

- **Give guidance**
  Fixing change list is responsibility of developers, not reviewers'. But reviewers needed to give guidance (It does not mean to give detailed design of a solution).

- **Accept explanation**
  If there is some code hard to understand, you can ask them why. After their reply, there is 2 options. 1. Code needed to be rewritten 2. Their reply can be included in comment.

- **Pushback or/and upsetting developers**
  Reviewer believe their suggestion will improve code health. If reviewers give comments polite it prevents conflicts. Refactor/Cleaning up later is an option.
