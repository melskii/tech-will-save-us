Story Time
=====================

## Outline

The application allows the user to choose an emotion, a genre and input text. Using a scale (on the right) it will determine a story is "happy", "sad", or "unknown". It will also tell the user if they have successfully written the emotion they set out to write. 

Once they have written a story, the user will have the option to save it for later (until the page is refreshed).

## Design Decisions
I used React and Redux to create the application in order to seperate the data contained in the application with the views.
Then used actions to communicate from react views back to reducers. 

* **Index**
  * App (Container)
    * Save Story 
    * Story Area (Container)
      * Input Text Area
      * Classifier
        * Classifier Image
        * Classifier Text
    * Story Type
      * Emotion Dropdown
      * Genre Dropdown (Container)
  * Navbar
  * Saved Stories List (Container)
  
Components were created to seperate functionality within the application and I decided to nest the Input Text Area and Classifier underneath the component Story Area. This meant I was able to pass values between them easily and update the Classifier as the user types in the Input Text Area. 

React Components were promoted to Containers when necessary to enable the view to communcate with the data in the reducers. 
I have tried to keep these to a minimum and only updated the parent view when multiple children require the data from a reducer. 

I decided to use the framework Bootstrap as it is cross-compatible to help style the application and allowed me to create responsive layouts easily. 

