import { StyleSheet, Platform, Dimensions } from 'react-native';

const getHeaderHeight = () => {
  let height;
  const orientation = getOrientation();
  height = getHeaderSafeAreaHeight();
  height += DeviceInfo.isIPhoneX_deprecated && orientation === PORTRAIT ? 24 : 0;

  return height;
};

const styles = StyleSheet.create({
  heroImage: {
    width: Dimensions.get('window').width,
    flex: 1,
    resizeMode: 'cover',
    marginTop: -10,
    marginLeft: -10,
    marginRight: 40,
    zIndex: 2
    // height: 400,
  },
  logo: {
    resizeMode: 'contain',
    width: 200,
    height: 100,
    flex: 1,
    marginTop: -100,
    alignSelf: 'center',
    zIndex: 3
  },
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-start',
  },
  homeContainer: {
    padding: 10,
    backgroundColor: '#fff',
    // paddingBottom: 300
  },
  title: {
    fontSize: 40,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 30,
    marginTop: 20,
  },
  menuLeft: {
    position: 'absolute',
    left: 20,
    top: 80,
    height: 100,
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuRight: {
    position: 'absolute',
    right: 20,
    top: 80,
    height: 100,
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    fontSize: 60,
  },
  TBShown_container: {
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    paddingBottom: 40
  },
  content: {
    fontSize: 18
  }
})

export default styles;