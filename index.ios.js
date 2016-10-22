/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    ActionSheetIOS,
    TouchableHighlight
} from 'react-native';

import BDMapView from './BDMapView.ios'

import ImagePickerManager from 'NativeModules';


export default class AwesomeProject extends Component {
  render() {
    return (
        <View style={styles.view} >

          <BDMapView style={styles.map} />


          <TouchableHighlight style={[ styles.center]}
              onPress={e=>this.test(e)}
          >
            <Text>居中摆放</Text>
          </TouchableHighlight>

        </View>
    )
  }

  test(e){
    var options = {
      title: '更换头像', // 选择器的标题，可以设置为空来不显示标题
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '从相机拍照获取', // 调取摄像头的按钮，可以设置为空使用户不可选择拍照
      chooseFromLibraryButtonTitle: '从手机相册选择', // 调取相册的按钮，可以设置为空使用户不可选择相册照片
      /*
       customButtons: {
       'Choose Photo from Facebook': 'fb', // [按钮文字] : [当选择这个按钮时返回的字符串]
       },
       mediaType: 'photo', // 'photo' or 'video'
       videoQuality: 'high', // 'low', 'medium', or 'high'
       durationLimit: 10, // video recording max time in seconds
       maxWidth: 100, // photos only默认为手机屏幕的宽，高与宽一样，为正方形照片
       maxHeight: 100, // photos only*/
      allowsEditing: true, // 当用户选择过照片之后是否允许再次编辑图片

    };
    let ImagePickerManager = require('react-native-image-picker');
    ImagePickerManager.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePickerManager Error: ', response.error);
      }
      else if (response.customButton) {
        // 这是当用户选择customButtons自定义的按钮时，才执行
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        // You can display the image using either data:

        if (Platform.OS === 'android') {
          source = {uri: response.uri, isStatic: true};
        } else {
          source = {
            uri: response.uri.replace('file://', ''),
            isStatic: true
          };
        }

        this.setState({
          avatarSource: source
        });
      }
    });

  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  splitline: {
    flexDirection : 'row',
    height: 50,
    position:'absolute',
    left: 50,
    top:50,
    alignItems: 'center',
    justifyContent: 'center',

  },
  views:{
    position: 'absolute',
    borderWidth: 5,
    borderColor: 'blue',
    left: 40,
    bottom: 20,
    width: 100,
    height: 40
  },
  center:{
    alignSelf: 'center'
  },
  left:{
    alignSelf: 'flex-start'
  },
  right:{
    alignSelf: 'flex-end'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
