# STRAPI user guide

Author: Guanlin Li

E-mail: lig11@rpi.edu

Environment: Windows 10 10.0.19044

---

1. Installation
   
    * Prerequisite

        * Node.js

            Strapi required Node.js to be installed on the machine. The download link can be found [here](https://nodejs.org/en/download/). Choose the  Windows Installer (.msi) 64-bit one and download. Once download is finished, start installing following the installation guidance. Don't forget to add Node.js to your *PATH*. After installation is complete, open a command prompt window and type `node -v` which should gives you the latest version of Node.js. Then, type `npm -v` which should also gives you the latest version of npm. If any of them prints an error message, try reboot your computer and reinstall the Node.js. 

        * Yarn

            Yarn will help us to configure and run Strapi on Windows. The download link can be found [here](https://classic.yarnpkg.com/latest.msi). Once download is finished, start installing the software. The installation should automatically add yarn to *PATH*. After the installation is finished, open a command prompt and type `yarn -v`. You should see the latest version of yarn, indicating that yarn has been successfully installed. 


            


2. Start a new project

     To start your project, open up a command prompt and go to the directory where you wishes to put your project at. Then, simply type `yarn create strapi-app YOUR_PROJECT_NAME --quickstart`. This will create a folder called *YOUR_PROJECT_NAME* under the specified directory, and all other files will be under that directory. Wait until the command prompt shows that the server is on, and you can open up the [admin page](http://localhost:1337/admin) in your browser. 

    * Solution to possible error

        If you are unable to open the [admin page](http://localhost:1337/admin), it is possible that some other programs are using the port 1337. To view which program is using the port, open a command prompt with administrator and type `netstat -aon`. This will list all programs that are currently using the localhost ports. Find port 1337 and find the PID of the program (which is the last number on that row). Open task manager and go to Details page, sort by PID and kill the specific program with the corresponding PID. In my case, the RAZER service is using the port, so I can simply kill the RAZER service. You can also change the port strapi will be using by opening up .env file and change the port to another number that will not conflict with other programs. 