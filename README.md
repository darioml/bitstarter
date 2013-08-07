Bitstarter - Learnguage
==========

This repository is used purely for educational purpose, following the coursera startup course.

Any references to any other technology, developed by me or not, are used here purely for convenience. This project hold no relevance to any such project, and has no purpose outisde the academic world.

## Work

Since multiple people are using this repo, please follow the following procedures:
- Anything into master must be brought with a PULL REQUEST
- Do dev work in your own branch, you can push your branch to heroku and mess around there
- Send a pull request. We dont really need to use the staging branch, since we're not going to have a central staging. (I'll be using it every so often)
- I'm working on a MAC, not on AWS. As such the puppet files I created are slightly outdated...

Regarding the coursera course:
- Homeworks look for an .html file. I don't do that stuff. I will add a /homework/ dir which will hold an index.html file to submit to coursera

##Installation & Setup

### Local

- Compile your coffee
- Run nodemon
- Run a watchscript if you're editing LESS files.

(I need to find a better way to handle this...)

### Remote

Overkill in using puppet - but hey!

To run a server up (AWS) with required stuff just run `manifests/install.sh`