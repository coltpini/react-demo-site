# LDS Specific Fork of the React/Redux Project Starter

## Introduction

This is a fork of the react-starter on github. The ldsjs tool uses this Bitbucket repository to generate a new React project.

- [react-starter on Github](https://github.com/tuxsudo/react-starter)
- [react-starter on Bitbucket](https://code.ldschurch.org/git/projects/OWS/repos/react-starter/browse)

## How to contribute

LDS specific contributions should be added to this repository. Other contributions should be added directly to the github repository. Please fork the appropriate repository and create a pull request to have your changes reviewed and considered. It's always a good idea to ping the owners regarding the chance that your request will be accepted before spending time on the changes.

## How to update this fork

Our intention is to update the Bitbucket repository using the `rebase` command [like this guy suggests](https://robots.thoughtbot.com/keeping-a-github-fork-updated).

Clone the repository if you have not already. The '-lds' suffix is added to distinguish it from the upstream repository in case you have it cloned separately.

`git clone https://code.ldschurch.org/git/scm/ows/react-starter.git react-starter-lds`

Add the upstream remote if you have not already

`git remote add upstream https://github.com/tuxsudo/react-starter.git`

Pull down upstream changes into the upstream/master branch

`git fetch upstream`

Make sure you are on the origin/master branch

`git checkout master`

Rewrite your master branch so that any commits of yours that aren't already in upstream/master are replayed:

`git rebase upstream/master`

Do whatever is necessary to resolve conflicts, if any.

Push back into Bitbucket. Without the force flag you will likely receive Updates were rejected because the tip of your current branch is behind its remote counterpart.

`git push --force`

See also... <https://help.github.com/articles/syncing-a-fork/>

Tag so the `ldsjs` tool uses the new code. Note that the old tags are still valid but in a strange state. The old tags still exist, and in Stash even link out to the commit, but that commit does not exist in the commit log. You can still clone from the old tag, so `ldsjs` is not broken.

```
git tag x.x.x
git push origin x.x.x
```

Run the `ldsjs` tool and verify.


## How this fork was created

Create an empty [Bitbucket repository](https://code.ldschurch.org/git/scm/ows/react-starter.git)

Clone github repository locally

`git clone https://github.com/tuxsudo/react-starter.git`

Rename the "origin" remote to "upstream"

`git remote rename origin upstream`

Add the Bitbucket repository as "origin"

`git remote add origin https://code.ldschurch.org/git/scm/ows/react-starter.git`

Push the code to Bitbucket

`git push -u origin master`
