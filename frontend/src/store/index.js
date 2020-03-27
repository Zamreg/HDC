
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    changeCounter:0,
    colHeaders: ['Model','Brand','OS_Version','Codename','Battery_level','Country_code','Time_zone'],
    data:[
      ["'VS500PP'","'lge'","'6.0.1'",'Marshmallow',88,'us','America/Chicago'],
      ["'AO5510'","'YU'","'5.1.1'",'Lollipop',59,'pt','Europe/Lisbon'],
      ["'ASUS_Z017D'","'asus'","'7.0'",'Nougat',-5,'us','America/Los_Angeles'],
      ["'ASUS_X014D'","'asus'","'5.1.1'",'Lollipop',41,'pt','Atlantic/Madeira'],
      ["'Nexus 5'","'google'","'6.0.1'",'MARSHMALLOW',90,'us','America/Los_Angeles'],
      ["'LG-D331'","'lge'","'4.4.2'",'KitKat',9,'us','America/New_York'],
      ["'Nexus 5'","'google'","'6.0.1'",'Marshmallow',67,'pt','Atlantic/Madeira'],
      ["'bq Aquaris 5 HD'","'bq'","'4.2.1'",null,35,'us','America/New_York'],
      ["'HUAWEI SCL-L21'","'Huawei'","'5.1.1'",'Lollipop',111,'gb','Europe/Belgrade'],
      ["'HUAWEI P7-L10'","'Huawei'","'5.1.1'",'Lollipop',57,'us','America/New_York'],
      ["'ONE A2003'","'OnePlus'","'6.0.1'",'MARSHMALLOW',65,'pt','Europe/Lisbon'],
      ["'SM-G903F'","'samsung'","'6.0.1'",'Marshmallow',36,'us','America/Chicago'],
      ["'ALE-L21'","'Huawei'","'6.0'",'Marshmallow',82,'us','America/New_York'],
      ["'ALE-L21'","'Huawei'","'6.0'",'MARSHMALLOW',55,'gb','Europe/Belgrade'],
      ["'Aquaris M5'","'bq'","'6.0.1'",'Marshmallow',55,'us','America/New_York'],
      ["'SM-G920F'","'samsung'","'7.0'",'Nougat',82,'pt','Atlantic/Madeira'],
      ["'SM-G950F'","'samsung'","'7.0'",'Nougat',57,'pt','Europe/Lisbon'],
      ["'ALE-L21'","'Huawei'","'6.0'",'Marshmallow',53,'pt','Europe/Lisbon'],
      ["'U FEEL LITE'","'WIKO'","'6.0'",'Marshmallow',76,'pt','Europe/Lisbon'],
      ["'HUAWEI NXT-L29'","'HUAWEI'","'7.0'",'Nougat',39,'us','America/Chicago'],
      ["'CHM-U01'","'Honor'","'6.0'",'Marshmallow',21,'gb','Europe/Belgrade'],
      ["'D5503'","'Sony'","'5.1.1'",'Lollipop',49,'us','America/Los_Angeles'],
      ["'SM-G930F'","'samsung'","'7.0'",'Nougat',95,'gb','Europe/Belgrade'],
      ["'EDI-AL10'","'HUAWEI'","'7.0'",'Nougat',17,'pt','Europe/Lisbon'],
      ["'KIW-L21'","'HONOR'","'6.0.1'",'Marshmallow',75,'pt','Europe/Lisbon'],
      ["'HUAWEI VNS-L31'","'HUAWEI'","'7.0'",'Nougat',42,'us','America/New_York'],
      ["'ASUS_Z017D'","'asus'","'7.0'",'Nougat',45,'us','America/Chicago'],
      ["'SM-G955F'","'samsung'","'7.0'",'Nougat',77,'pt','Atlantic/Madeira'],
      ["'Mi-4c'","'Xiaomi'","'7.0'",'Nougat',54,'us','America/New_York'],
      ["'HTC 10'","'htc'","'7.0'",'Nougat',54,'pt','Europe/Lisbon'],
      ["'Archos 55 diamond Selfie'","'archos'","'6.0.1'",'Marshmallow',49,'us','America/Los_Angeles'],
      ["'SM-G920F'","'samsung'","'7.0'",'Nougat',52,'pt','Europe/Lisbon'],
      ["'PRA-LX1'","'HUAWEI'","'7.0'",'Nougat',66,'us','America/Chicago'],
      ["'SM-G930F'","'samsung'","'7.0'",'Nougat',69,'us','America/New_York'],
      ["'SM-J730F'","'samsung'","'7.0'",'Nougat',96,'pt','Europe/Lisbon'],
      ["'F5321'","'Sony'","'7.1.1'",'Nougat',45,'pt','Europe/Lisbon'],
      ["'SM-A320FL'","'samsung'","'7.0'",'Nougat',36,'pt','Europe/Lisbon'],
      ["'SM-G935F'","'samsung'","'7.0'",'Nougat',85,'pt','Europe/Lisbon']
    ],
    dataHistory: [
      [
        ["'VS500PP'","'lge'","'6.0.1'",'Marshmallow',88,'us','America/Chicago'],
        ["'AO5510'","'YU'","'5.1.1'",'Lollipop',59,'pt','Europe/Lisbon'],
        ["'ASUS_Z017D'","'asus'","'7.0'",'Nougat',-5,'us','America/Los_Angeles'],
        ["'ASUS_X014D'","'asus'","'5.1.1'",'Lollipop',41,'pt','Atlantic/Madeira'],
        ["'Nexus 5'","'google'","'6.0.1'",'MARSHMALLOW',90,'us','America/Los_Angeles'],
        ["'LG-D331'","'lge'","'4.4.2'",'KitKat',9,'us','America/New_York'],
        ["'Nexus 5'","'google'","'6.0.1'",'Marshmallow',67,'pt','Atlantic/Madeira'],
        ["'bq Aquaris 5 HD'","'bq'","'4.2.1'",null,35,'us','America/New_York'],
        ["'HUAWEI SCL-L21'","'Huawei'","'5.1.1'",'Lollipop',111,'gb','Europe/Belgrade'],
        ["'HUAWEI P7-L10'","'Huawei'","'5.1.1'",'Lollipop',57,'us','America/New_York'],
        ["'ONE A2003'","'OnePlus'","'6.0.1'",'MARSHMALLOW',65,'pt','Europe/Lisbon'],
        ["'SM-G903F'","'samsung'","'6.0.1'",'Marshmallow',36,'us','America/Chicago'],
        ["'ALE-L21'","'Huawei'","'6.0'",'Marshmallow',82,'us','America/New_York'],
        ["'ALE-L21'","'Huawei'","'6.0'",'MARSHMALLOW',55,'gb','Europe/Belgrade'],
        ["'Aquaris M5'","'bq'","'6.0.1'",'Marshmallow',55,'us','America/New_York'],
        ["'SM-G920F'","'samsung'","'7.0'",'Nougat',82,'pt','Atlantic/Madeira'],
        ["'SM-G950F'","'samsung'","'7.0'",'Nougat',57,'pt','Europe/Lisbon'],
        ["'ALE-L21'","'Huawei'","'6.0'",'Marshmallow',53,'pt','Europe/Lisbon'],
        ["'U FEEL LITE'","'WIKO'","'6.0'",'Marshmallow',76,'pt','Europe/Lisbon'],
        ["'HUAWEI NXT-L29'","'HUAWEI'","'7.0'",'Nougat',39,'us','America/Chicago'],
        ["'CHM-U01'","'Honor'","'6.0'",'Marshmallow',21,'gb','Europe/Belgrade'],
        ["'D5503'","'Sony'","'5.1.1'",'Lollipop',49,'us','America/Los_Angeles'],
        ["'SM-G930F'","'samsung'","'7.0'",'Nougat',95,'gb','Europe/Belgrade'],
        ["'EDI-AL10'","'HUAWEI'","'7.0'",'Nougat',17,'pt','Europe/Lisbon'],
        ["'KIW-L21'","'HONOR'","'6.0.1'",'Marshmallow',75,'pt','Europe/Lisbon'],
        ["'HUAWEI VNS-L31'","'HUAWEI'","'7.0'",'Nougat',42,'us','America/New_York'],
        ["'ASUS_Z017D'","'asus'","'7.0'",'Nougat',45,'us','America/Chicago'],
        ["'SM-G955F'","'samsung'","'7.0'",'Nougat',77,'pt','Atlantic/Madeira'],
        ["'Mi-4c'","'Xiaomi'","'7.0'",'Nougat',54,'us','America/New_York'],
        ["'HTC 10'","'htc'","'7.0'",'Nougat',54,'pt','Europe/Lisbon'],
        ["'Archos 55 diamond Selfie'","'archos'","'6.0.1'",'Marshmallow',49,'us','America/Los_Angeles'],
        ["'SM-G920F'","'samsung'","'7.0'",'Nougat',52,'pt','Europe/Lisbon'],
        ["'PRA-LX1'","'HUAWEI'","'7.0'",'Nougat',66,'us','America/Chicago'],
        ["'SM-G930F'","'samsung'","'7.0'",'Nougat',69,'us','America/New_York'],
        ["'SM-J730F'","'samsung'","'7.0'",'Nougat',96,'pt','Europe/Lisbon'],
        ["'F5321'","'Sony'","'7.1.1'",'Nougat',45,'pt','Europe/Lisbon'],
        ["'SM-A320FL'","'samsung'","'7.0'",'Nougat',36,'pt','Europe/Lisbon'],
        ["'SM-G935F'","'samsung'","'7.0'",'Nougat',85,'pt','Europe/Lisbon']
      ]
    ],
  },
  getters: {
    
  },
  mutations: {
    replaceNull (state, payload) {
      for(var row=0; state.data[row]; row++){
        if(state.data[row][payload.col] == null){
          state.data[row][payload.col] = payload.val
        }
      }
      state.dataHistory.push(state.data)
      state.changeCounter++
    },
    removeNull (state, payload) {
      for(var row=0; state.data[row]; row++){
        if(state.data[row][payload.col] == null){
          state.data.splice(row,1)
        }
      }
      state.dataHistory.push(state.data)
      state.changeCounter++
    }
  },
  actions: {
    replaceNull (state, payload) {
      state.commit('replaceNull', payload)
    },
    removeNull (state, payload) {
      state.commit('removeNull', payload)
    }
  }
});