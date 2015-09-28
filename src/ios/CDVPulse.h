#import <Cordova/CDV.h>

@interface CDVPulse : CDVPlugin

- (void) measure:(CDVInvokedUrlCommand*)command;
- (void) stop:(CDVInvokedUrlCommand*)command;

@end