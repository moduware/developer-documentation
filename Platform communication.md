# Platform communication 

* moduware is a cross platform compatible, supporting both iOS and Android
* moduware devices are divided into gateways and modules
    * Gateway involves the phonepaq, batpaq and development board - where modules are inserted
    * Modules can customize the functions of a phone.  Connecting the physical world with the smartphone application and cloud
* Each module has at least a module inferface or tile 
* Libraries and APIs are provided to communicate the physical world to the application and cloud 

## Data Flow

* Modules send data to the gateway, an **mdk** for the firmware proess the data. 
* The gateway reroutes the data to the phone using BLE or USB communication. 
* The application process the data with the **Module Driver**, and routes the data to the **tile**
* The tile displays the data

##Command Flow

* Function is used in the tile, and a command from the application is called
* The application recognizes the command via the Module Driver and sends the command to the gateway
* The gateway reroutes the command to the module, and the module executes the function

![PlatformDiagram]


[PlatformDiagram]:(https://github.com/nexpaq/developer-documentation/blob/master/images/PlatformDiagram.jpg)