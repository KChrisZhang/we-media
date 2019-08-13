import lookUp from './mock/lookUp.json'
import appListData from './mock/appListData.json'
import recomendData from './mock/recomendData.json'

export default {
  getAppList() {
    return appListData
  },
  getAppListData() {
    return recomendData
  },
  search() {
    return lookUp
  },

}
