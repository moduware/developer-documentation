# Developer Documentation

Moduware is a modular mobile platform, it is using smatphone or tablet as a central hub and inteface for user. Modules are getting connected to phone case or powerbank and then can be controlled using BLE connection between smart devices and gateway (case or powerbank).

From this page you can find links to various resources describing development process for moduware platform. Moduware modules consist of many parts: hardware of module, firmware in microcontroller of module, tile as user interface of module on user device (phone or tablet).

Moduware provides many examples and templates to make your development process simpler and let you start faster.

## General information

* [Platform communication](https://github.com/nexpaq/developer-documentation/blob/master/Platform%20communication.md)
* [Protocol Message Format](https://github.com/nexpaq/msp430-firmware-template/blob/master/Protocol%20Message%20Format.md)
* [Module Drivers Reference](https://moduware.github.io/developer-documentation/module-drivers/)
* [Driver Format Reference]
* [API Refence v0]

## Hardware 
Module PCB Layout, Schematics and 2D/3D housing templates
* [MSP430 PCB template](https://github.com/nexpaq/msp430-pcb-template)
* [Housing](https://drive.google.com/drive/folders/0B-RYMkGi4XZ8MWdpZDFydlpNLTA?usp=sharing) 2D/3D CAD projects for 1,2 and 3 module slot
    * STEP and SWasm formats for 3D designs
    * PDF for 2D Part drawings 
* [Connector Specifications](https://github.com/nexpaq/developer-documentation/blob/master/Connector%20Specifications.md)

## Firmware 

Right now Moduware platform support's only MSP430 MCU.

* [MSP430 Firmware template](https://github.com/nexpaq/msp430-firmware-template)
* [Flashing the firmware](https://github.com/nexpaq/msp430-firmware-template/blob/master/Flashing.md)
* [How to fix broken MSP430 Bootloader](https://github.com/nexpaq/msp430-firmware-template/blob/master/restorebootloader.md)
* [MSP430 memory settings](https://github.com/nexpaq/msp430-firmware-template/blob/master/MSP430%20memory%20settings%20.md)
* [Interrupt vectors and timers on MSP430 module](https://github.com/nexpaq/msp430-firmware-template/blob/master/Interrupt%20vectors%20and%20timers%20msp430.md)

## Tiles 

There are two types of tiles: webview and native. Webview tiles are suitable for simple interfaces to module that does not require any complex data processing or phone OS\hardware features usage. Native tiles are much more complex and basically complete mobile applications separate from Moduware app, they need to be distributed separately and Moduware app only calls them when it is required by user. 

* [Manifest generator](https://nexpaq.github.io/manifest-generator/)
* [Module driver generator](https://nexpaq.github.io/module-driver-generator/)

### WebView
Webview tiles is a simple one page local website. It is important to remember that is has access only to local resources, so if you are using some web-fonts, they won't be available for offline users.
* [webview tile template](https://github.com/nexpaq/webview-tile-template)
* [Install webview tile](https://github.com/nexpaq/webview-tile-template/blob/master/Install%20webview%20tile.md)
* [Moduware tiles](https://github.com/search?q=topic%3Atile+org%3Amoduware&type=Repositories)

### Native
Right now we support only [Xamarin](https://www.xamarin.com/) as a platform for native tile development, it allows you to develop application using C# language that works on both Android and iOS platforms and shares sugnificant amount of code between them.
* [native tile template](https://github.com/moduware/xamarin-native-tile-template)
* [native tile framework](https://github.com/moduware/platform-tile)
* [Moduware speaker native tile](https://github.com/moduware/native-tile-speaker)


## Complete Examples (MSP430 Hardware + Firmware + WebView tile)
Under this list, examples include firmware, module driver and tile code as well as breadboard setup
* [LED RGB via PWM Example](https://github.com/nexpaq/example-led-rgb)
* [ADC data example](https://github.com/nexpaq/example-adc)
* [LCD via I2C](https://github.com/nexpaq/example-lcd)
* [SHT20 via I2C](https://github.com/nexpaq/example-i2c)
* [HC-SR04 Ultrasonic Sensor](https://github.com/nexpaq/example-ultrasonic)
