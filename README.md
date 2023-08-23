# contact-app

# To run an Android app developed using React Native on an Android mobile device, follow the below mentioned steps:

Setup Development Environment: 
•	Install Node.js and npm (Node Package Manager) on your system.
•	Install react.js
•	Install Android studio

Select the project : 
We can either create a new React Native project using the command: npx react-native init <YourAppName.>   (or )  clone an existing project from github.

Navigate to Project Directory: 
Change your working directory to the newly created project directory: cd  <YourAppName.>

Connect Android Device: 
Connect your Android device to your computer using a USB cable. Make sure the following options are enabled on your android device.
•	Developer option
•	USB debugging 
•	Default USB configuration -> Transferring files

Start Metro Server: 
Open a terminal window and run the Metro server using the command: npx react-native start.

Run on Android Device: 
In a separate visual studio code terminal window, run your app on the connected Android device using the command: npx react-native run-android.

The above command will build the app and install it on your connected Android device.
To check the list of all the Android devices that are connected to your computer, use the command :
adb devices

You'll see the app launching on your device.
