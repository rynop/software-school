# software-school
Teaching software and internet basics to kids. Targeted towards 8YO+

Throughout this project you'll see this:
> Help needed:

Which means I could use help from the community in the form of GitHub pull requests (PR) to make this project better.

Here is how it all started ;)

![my whiteboard](./assets/whiteboard-ideas.jpg)

## Prerequisites

Before getting started, there are some steps the teacher and each student will need to do.

> Help needed: this school is setup for mac (and linux sort-of) computers. PR welcome for adding windows support.

### Prereq's for teacher

- Slides are [here](https://docs.google.com/presentation/d/1ZBV382xmKHYd6rEfKVmPTAwuuC0Ok2Nsl5CspRlGBlA/edit?usp=sharing) (bookmark it!)
- Github account
- Extra credit/optional: AWS account

#### Collaboration

##### Chat

Setup a place to collaborate (even if doing this in person). You'll need a place to share links (like VS Code "live share" extension, mentioned below). I recommend [guilded.gg](https://www.guilded.gg) (full transparency: this is where I work. `rynop/software-school` is no way affiliated).  Slack, MS Teams, etc will all work as well.  Here is my Guilded setup:
![alt text](./assets/guilded-server.png)

##### Live/paired coding 

I recommend using VS Code ["Live share" extension](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) to view/edit  student's code right in their IDE (VS Code).  Set it up ahead of time (I'll install it for you below).  You will sign into the extension with your github account (unless each student has their own github account).  See the [live share docs](https://docs.microsoft.com/en-us/visualstudio/liveshare/) for more info on how to use this extension.

#### Setup each computer (teacher and each student)

- Install [VS Code](https://code.visualstudio.com) IDE.  You can use [my VS code preferences](./prereqs/vscode-prefs.json) if you like (⇧+⌘+P then `Preferences: Open Settings (JSON)`).
- Put `code` command on your path: ⇧+⌘+P then `Shell Command: Install 'code' command in PATH`
- Install VS code extensions via (make sure to restart your terminal after putting `code` on your PATH):
```
code --install-extension esbenp.prettier-vscode
code --install-extension jgoday.createtmpfile
code --install-extension ms-vsliveshare.vsliveshare
code --install-extension ritwickdey.LiveServer
```
- Clone this repo to `~/` (your home directory)
- [Install nodejs](https://nodejs.org/tr/download/package-manager)
- [Install yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)


### Prereq's for each student

- 

