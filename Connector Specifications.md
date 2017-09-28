# Connector Specifications

* Power:
    * 5V or 3V3
    * Power line (5V OUT) 
* Communication
    * High-Speed SPI 2.0 (up to 1 MBit/s) which can be slowed down for slower modules
    * High-speed USB 2.0, back forward compatible with USB 2.0 full speed and USB 1.1

    ![connector-specs]
    

## PCB Layout specifications for the connector 
* 5V BUS
    * Power bus for the case, phone, and other modules. High current bus, recommended track width dimentions:  **40mil ~ 80mil**

* 5V OUT
    * Power bus for the case, phone, and other modules. High current bus, recommended track width dimentions:  **40mil ~ 80mil**

* 3V3 BUS
    * Power bus. Recommended track width is 40mil ~ 60mil.
* USB
    * Differential signal line. The differential impedance resistance is 90 Ohm.

Observations: Note that P3.0 in MSP430 is not an accessible pin as it is used as a control pin for 5V.

![specification_table]

## Maximum & Recommended Current & Voltage


![current-voltatge1]

![current-voltatge2]

* (*) sMaximum 2A per each connector pin. Multiple connectors need to be used if the multi-module needs more pins. Below the max number of pins, it can use a single connector to get the maximum current reserved for all slots used by that module.
* (**) A multi-module require one SPI communication and if necessary one USB communication. If a multi-module requires multiple SPI and/or USB communications then additional connectors can be used. However, these different connectors cannot connect with each other.


[connector-specs]:https://github.com/nexpaq/msp430-firmware-template/blob/master/Images/compiler_instructions_1.png
[specification_table]:https://github.com/nexpaq/msp430-firmware-template/blob/master/Images/compiler_instructions_2.png
[current-voltatge1]:https://github.com/nexpaq/msp430-firmware-template/blob/master/Images/compiler_instructions3.png
[current-voltatge2]:https://github.com/nexpaq/msp430-firmware-template/blob/master/Images/connection.jpg
