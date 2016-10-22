/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;
  
//  jsCodeLocation = [NSURL URLWithString:@"http://10.240.141.88:8081/index.ios.bundle"];
    jsCodeLocation = [NSURL URLWithString:@"http://192.168.3.10:8081/index.ios.bundle"];
  
  _mapManager = [[BMKMapManager alloc]init];
  BOOL ret = [_mapManager start:@"LONnWhXm8fCTP4y6ZkK8nI7WKfHsvDFt" generalDelegate:nil];
  
  if (!ret) {
    NSLog(@"manager start failed!");
  } else {
    NSLog(@"manager start success!");
  }
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"AwesomeProject"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  
  
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

@end
