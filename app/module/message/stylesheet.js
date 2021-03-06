import { StyleSheet, Platform } from 'react-native'
import listview from '../common/stylesheet/listview'

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  tab: {
    borderBottomColor: '#DDD',
    borderBottomWidth: 0.5,
    height: 40
  },
  unselectedTab: {
    color: '#999'
  },
  selectedTab: {
    color: '#333',
    fontWeight: '700'
  },
  cellRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 5
  },
  cellImage: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  cellSubtitle: {
    paddingHorizontal: 8,
    flex: 1
  },
  cellSubtitleText: {
    fontSize: 13,
    lineHeight: 20,
    color: '#666'
  },
  cellMintitleText: {
    fontSize: 12,
    color: '#999',
    lineHeight: 15
  },
  cellAccessory: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: 'limegreen',
    borderRadius: 3
  },
  cellAccessoryText: {
    fontSize: 12,
    color: '#FFF'
  },
  cellTitle: {
    paddingHorizontal: 8,
    paddingVertical: 5
  },
  cellTitleText: {
    fontSize: 15
  },
  repliedTopicTitle: {
    paddingLeft: 8,
    color: 'royalblue'
  },
  replyContent: {
    backgroundColor: '#F1F1F1',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 10
  }
}

const stylesForIOS = {
  container: {
    ...styles.container,
    paddingTop: 20
  }
}

const stylesForAndroid = {}

export default StyleSheet.create(
  Object.assign(
    {},
    styles,
    Platform.OS === 'ios' ? stylesForIOS : null,
    Platform.OS === 'android' ? stylesForAndroid : null
  )
)
