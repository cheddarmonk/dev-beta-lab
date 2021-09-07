# Dev Lab BETA/486 Story Card 

## Welcome!

Dev Beta is designed to bring about familarilty with GitHub, Heroku, and the process of commiting changes to your builds. This helps to set the foudnation for better pipeline mechanics to ensure a stramlined process to the success of future endavors. 

## Table of Contents

- [Dev Process](#dev-process)
- [Let's Git Into It! Heroku](#let's-git-into-it)
- [Your First App](#your-first-app)
- [Committing Changes](#committing-changes)
- [Finale](#finale)


## Dev Process:

This lab will guide you through the following processes

1. Ensure that you can connect to the served up files via URL(Heroku):
2. Setting up a Heroku app
3. Connecting Github to Heroku
4. Understandint the Github committ process

***

### Let's Git Into It!

## Heroku
The first thing to do is to set-up your very own Heroku account by finishing the sign-up process here: [Heroku's Website.](www.heroku.com) ![Login](https://github.com/cheddarmonk/dev-beta-lab/blob/main/images/Capture1.PNG)

* Click on the Sign up option and follow the process to completion. 
* Congrats next on to connecting your GitHub project to Heroku!


### Your First App
* Once you have logged in to Heroku you should be at a page like this ![Dashboard](https://github.com/cheddarmonk/dev-beta-lab/blob/main/images/Capture2.PNG)
* Click on the *New*  button on the top right and select New App
* Enter your app's name and create the app
* You will be brought to a dashboard and under the heading *Deployment Method* you will see a button that will allow you to connect to your GitHub account! 
  
  * ![Apphome](https://github.com/cheddarmonk/dev-beta-lab/blob/main/images/Capture3.PNG) 

  * ![GitHub Button](https://github.com/cheddarmonk/dev-beta-lab/blob/main/images/Capture4.PNG)

* Clicking the button will open a new window allowing you to enter your GitHub Account info. 
* After you login to your Github there you should go back to your dashboard and be able to select which GitHub Repository you would like for Heroku to connect to
  * ![GitHub Connect](https://github.com/cheddarmonk/dev-beta-lab/blob/main/images/Capture5.PNG)

* After finding which repo to connect to, click on the connect button. Heroku then will automatically connect and copy over all the information in that repo!

* **ONE FINAL THING HERE!** After you connect be sure to Enable Automatic Depolys so that any changed we make later can be automatically made here!
  * ![Auto Deploy](https://github.com/cheddarmonk/dev-beta-lab/blob/main/images/Capture6.PNG)


### Committing Changes
Now lets head to Visual Studio. VS has a plethora of extensions to help us manage GitHub Repos and helps us to streamline the process. I recommend using the VS extension `GitHub Pull Request and Issues` which can be searched by accessing the extension browser in VS Studio. This extension allows us to pull, commit, and push changes

* ![Git Extension](https://github.com/cheddarmonk/dev-beta-lab/blob/main/images/Capture7.PNG)

* Terminology 
  * Pull - download a copy of a GitHub Repository
  * Commit - Save Changes to your repo copy
  * Push - Upload your saved changes to GitHub

* The first thing (if you haven't done so) is to log in to GitHub with VS to authenicate your workstation
  * On the bottom left of the VS Hud you will see a little profile picture 
  
    ![Account Icon](https://github.com/cheddarmonk/dev-beta-lab/blob/main/images/Capture8.PNG)

  *  Click on it and use the option to sync with GitHub.

*  Once that has been synced, you can now make changes easily.
*  On the left hand side you can see the a fork icon icon (Called Source Control), this will open the GitHub menu allowing you to pull, commit, and push changes you make to GitHub. 
  
   ![Source Control](https://github.com/cheddarmonk/dev-beta-lab/blob/main/images/Capture9.PNG)

* Once a change has been saved in VS, it wil appear under the Source Control menu. Clicking the plus icon will add the change to your next save. Click the check mark to commit the change, and commit bar will pop up in the center top of the page allowing you to make comments on what was changed for reference.
  
   ![Stage Change](https://github.com/cheddarmonk/dev-beta-lab/blob/main/images/Capture10.PNG)
   ![Commit Changg](https://github.com/cheddarmonk/dev-beta-lab/blob/main/images/Capture11.PNG)

* Once it has been committed, click on the three dots to the right of the Checkmark, find the Push option, and this will push your changes to GitHub, and then to Heroku!

    ![Push](https://github.com/cheddarmonk/dev-beta-lab/blob/main/images/Capture12.PNG)
    


### Finale

The final thing to do is to wait for Heroku to adapt the changes you make into your app. You can watch this by Heading back to [Heroku's Website.](www.heroku.com). From there access your app and watch as it will deploy the changes you've made to Heroku automatically! Congrats one making a New App! :satisfied:
