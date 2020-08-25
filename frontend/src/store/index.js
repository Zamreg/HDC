import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    changeCounter:0,
    colHeaders: ['Model','Brand','OS_Version','Codename','Battery_level','Country_code','Time_zone'],
    colHeaders2: ['Model','Brand','OS_Version','Codename','Battery_level','Country_code','Time_zone'],
    columns:[
      {type:'text'},
      {type:'text'},
      {type:'text'},
      {type:'text'},
      {type:'numeric'},
      {type:'text'},
      {type:'text'}
    ],
    columns2:[
      {type:'text'},
      {type:'text'},
      {type:'text'},
      {type:'text'},
      {type:'numeric'},
      {type:'text'},
      {type:'text'}
    ],
    data:[
      ["'VS500PP'","'lge'","'6.0.1'",'Marshmallow',88,'us','America/Chicago'],
      ["'AO5510'","'YU'","'5.1.1'",'Lollipop',59,'pt','Europe/Lisbon'],
      ["'ASUS_Z017D'","'asus'","'7.0'",'Nougat',-5,'us','America/Los_Angeles'],
      ["'ASUS_X014D'","'asus'","'5.1.1'",'Lollipop',41,'pt','Atlantic/Madeira'],
      ["'Nexus 5'","'google'","'6.0.1'",'MARSHMALLOW',90,'us','America/Los_Angeles'],
      ["'LG-D331'","'lge'","'4.4.2'",'KitKat',9,'us','America/New_York'],
      ["'Nexus 5'","'google'","'6.0.1'",'Marshmallow',67,'pt','Atlantic/Madeira'],
      ["'bq Aquaris 5 HD'","'bq'","'4.2.1'",'',35,'us','America/New_York'],
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
    data2:[
      ["'VS500PP'","'lge'","'6.0.1'",'Marshmallow',88,'us','America/Chicago'],
      ["'AO5510'","'YU'","'5.1.1'",'Lollipop',59,'pt','Europe/Lisbon'],
      ["'ASUS_Z017D'","'asus'","'7.0'",'Nougat',-5,'us','America/Los_Angeles'],
      ["'ASUS_X014D'","'asus'","'5.1.1'",'Lollipop',41,'pt','Atlantic/Madeira'],
      ["'Nexus 5'","'google'","'6.0.1'",'MARSHMALLOW',90,'us','America/Los_Angeles'],
      ["'LG-D331'","'lge'","'4.4.2'",'KitKat',9,'us','America/New_York'],
      ["'Nexus 5'","'google'","'6.0.1'",'Marshmallow',67,'pt','Atlantic/Madeira'],
      ["'bq Aquaris 5 HD'","'bq'","'4.2.1'",'',35,'us','America/New_York'],
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
        ["'bq Aquaris 5 HD'","'bq'","'4.2.1'",'',35,'us','America/New_York'],
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
    getColDataType: (state) => (controller) => {
      if(!isNaN(state.data[0][controller])) return "number"
      else return typeof state.data[0][controller]
    },
    getNumberOfCols: (state) => {
      return state.colHeaders.length
    },
    getNumberOfRows: (state) => {
      return state.data.length
    },
    getBelowMin: (state)=>(min,col)=>{ // return row index where outliers below minimum bound exist
      var arr = []
      if(min != '') {
        for(var row=0; state.data[row]; row++){
          if(state.data[row][col] < min){
            arr.push(row)
          }
        }
      } else return []
      return arr
    },
    getAboveMax: (state) => (max,col) => { // return row index where outliers below minimum bound exist
      var arr = []
      for(var row=0; state.data[row]; row++){
        if(state.data[row][col] > max){
          arr.push(row)
        }
      }
      return arr
    },
    getNulls: (state) => (col) => { // return row index where null values appear in the selected column
      var v = []
      var i = 0
      while ( i !=-1){
        i=_.findIndex(state.data,function(array){
          if (array[col] == null && array[col] == '') return true
          else return false
        })
        v.push(i)
      }
      /*var v = []
      for(var row=0; state.data[row]; row++){
        if(state.data[row][col] == null || state.data[row][col] == '' ){
          v.push(row)
        }
      }*/
      return v
    },
    getReplaceRows: (state) => (col, replaceValues) => { //return row index where values to replace appear in the selected column
      var arr = []
      for(var row=0; state.data[row]; row++){
        if(replaceValues.includes(state.data[row][col] )){
          arr.push(row)
        }
      }
      return arr
    },
    getNullControllers: (state) => {
      var cols = state.colHeaders.length
      var nullcols = new Array()
      for(var c = 0; c<cols;c++){
        _.each(state.data, function(array){
          if (array[c] == null || array[c] == '') {
            nullcols.push(c)
          }
        })
      }
      //console.log(nullcols)
      return nullcols
    }
  },
  mutations: {
    init(state,payload){
      state.colHeaders = payload.headers
      state.colHeaders2 = payload.headers
      state.columns = payload.cols
      state.columns2 = payload.cols
      state.data = _.cloneDeep(payload.data)
      state.data2 = _.cloneDeep(payload.data)
      //state.dataHistory[0] = _.cloneDeep(payload.data)
      state.changeCounter = 0
    },
    update(state){
      state.changeCounter++
    },
    removeCol(state,payload){

      if(payload[0].start.col == payload[0].end.col){
        _.map(state.data, function(array){ 
          _.pullAt(array,payload[0].start.col)
        })
        _.pullAt(state.colHeaders,payload[0].start.col)
        _.pullAt(state.columns,payload[0].start.col)
      }

      state.dataHistory.push(state.data)
      state.changeCounter++
    },
    //Null Ops
    replaceNull (state, payload) {
      _.forEach(state.data,function(row){
        if(row[payload.col] == null || row[payload.col] == '') row[payload.col] = payload.val 
      })
      state.dataHistory.push(state.data)
      state.changeCounter++
    },
    removeNull (state, payload) {
      _.remove(state.data, function(array){
        if (array[payload.col] == null || array[payload.col] == '') return true
        else return false
      })  
      state.dataHistory.push(state.data)
      state.changeCounter++
    },
    removeBelow (state, payload) {
      _.remove(state.data, function(array){
        if (array[payload.col] < payload.val) return true
        else return false
      })  
      state.dataHistory.push(state.data)
      state.changeCounter++
    },
    removeBelowEq (state, payload) {
      _.remove(state.data, function(array){
        if (array[payload.col] <= payload.val) return true
        else return false
      })  
      state.dataHistory.push(state.data)
      state.changeCounter++
    },
    removeAbove (state, payload) {
      _.remove(state.data, function(array){
        if (array[payload.col] > payload.val) return true
        else return false
      })  
      state.dataHistory.push(state.data)
      state.changeCounter++
    },
    removeAboveEq (state, payload) {
      _.remove(state.data, function(array){
        if (array[payload.col] >= payload.val) return true
        else return false
      })  
      state.dataHistory.push(state.data)
      state.changeCounter++
    },
    keepNull(state, payload) {
      for(var row=0; state.data[row]; row++){
        if(state.data[row][payload.col] != null){
          state.data.splice(row,1)
        }
      }
      state.dataHistory.push(state.data)
      state.changeCounter++
    },
    //Single Filter
    removeDiff(state, payload) {
      _.remove(state.data, function(array){
        if (array[payload.col] != payload.val) return true
        else return false
      })  
      state.dataHistory.push(state.data)
      state.changeCounter++
    },
    //Other
    replaceSimilarValues (state, payload){
      for(var row=0; state.data[row]; row++){
        if(payload.toReplace.includes( state.data[row][payload.col] )){
          state.data[row][payload.col] = payload.new
        }
      }
      state.dataHistory.push(state.data)
      state.changeCounter++
    },
    changeCase (state, payload){
      for(var row=0; state.data[row]; row++){
        if(state.data[row][payload.col] != null){
          if(payload.case == "ul" ){
            state.data[row][payload.col] = 
              state.data[row][payload.col].charAt(0).toUpperCase() + 
              state.data[row][payload.col].slice(1).toLowerCase();
          } else if(payload.case == "upper"){
            state.data[row][payload.col] = 
              state.data[row][payload.col].toUpperCase() 
          } else if(payload.case == "lower"){
            state.data[row][payload.col] = 
              state.data[row][payload.col].toLowerCase() 
          }
        }
      }
      state.dataHistory.push(state.data)
      state.changeCounter++
    },
    splitByChar(state, payload){
      state.colHeaders[payload.col] = payload.column1
      state.colHeaders.push(payload.column2)
      var x = null
      for(var row=0; state.data[row]; row++){
        //add new column at the end
        x = state.data[row][payload.col].substring( state.data[row][payload.col].indexOf(payload.char)+1 )
        state.data[row].push( x )
        /*  state.data[row][payload.col].substring(
            state.data[row][payload.col].indexOf(payload.char)+1
          )
        )*/
        if(row == 0 && !isNaN(x)) state.columns.push({type: 'numeric'})
        else if (row == 0 && isNaN(x)) state.columns.push({type: 'text'})
        //modify current column
        state.data[row][payload.col] = state.data[row][payload.col].split(payload.char)[0] 
      }
      state.dataHistory.push(state.data)
      state.changeCounter++
    },
    removeOutliers (state, payload){
      for(var row=0; state.data[row]; row++){
        if(state.data[row][payload.col] < payload.min || state.data[row][payload.col] > payload.max){
          state.data.splice(row,1)
          row--
        }
      }
      state.dataHistory.push(state.data)
      state.changeCounter++
    },
    keepOutliers (state, payload){
      for(var row=0; state.data[row]; row++){
        if(state.data[row][payload.col] > payload.min && state.data[row][payload.col] < payload.max){
          state.data.splice(row,1)
        }
      }
      state.dataHistory.push(state.data)
      state.changeCounter++
    },
    findReplace (state,payload){
      var rows = state.data.length
      for(var j = 0; j< rows; j++){
        if(state.data[j][payload.col] == payload.val) {
          state.data[j][payload.col] = payload.rep
        }
      }
      state.dataHistory.push(state.data)
      state.changeCounter++
    },
    applyTrans(state){
      state.data2 = _.cloneDeep(state.data)
      state.colHeaders2 = _.cloneDeep(state.colHeaders)
      state.columns2 = _.cloneDeep(state.columns)
      state.changeCounter++
    },
    resetTrans(state){
      state.data = _.cloneDeep(state.data2)
      state.colHeaders = _.cloneDeep(state.colHeaders2)
      state.columns = _.cloneDeep(state.columns2)
      state.dataHistory.push(state.data)
      state.changeCounter++
    },
    
    
  },
  actions: {
    init(state,payload){
      state.commit('init',payload)
    },
    update(state){
      state.commit('update')
    },
    removeCol(state,payload){
      state.commit('removeCol',payload)
    },
    removeOutliers (state, payload){
      state.commit('removeOutliers',payload)
    },
    replaceNull (state, payload) {
      state.commit('replaceNull', payload)
    },
    removeNull (state, payload) {
      state.commit('removeNull', payload)
    },
    replaceSimilarValues (state, payload){
      state.commit('replaceSimilarValues', payload)
    },
    changeCase (state,payload) {
      state.commit('changeCase', payload)
    },
    splitByChar (state,payload) {
      state.commit('splitByChar', payload)
    },
    findReplace (state,payload) {
      state.commit('findReplace',payload)
    },
    applyTrans (state){
      state.commit('applyTrans')
    },
    resetTrans (state){
      state.commit('resetTrans')
    },
    nullFilter (state,payload) {
      switch(payload.job){
        case "Is empty":
          state.commit('removeNull',payload)
          break;
        case "Is not empty":
          state.commit('keepNull',payload)
          break;
        default: break;
      }
    },
    singleFilter(state,payload) {
      switch( payload.job ){
        case "Is equal to": 
          break;
        case "Is not equal to": 
          console.log("Not equal remove")
          state.commit('removeDiff',payload)
          break;
        case "Greater than": 
          state.commit('removeAbove',payload)
          break;
        case "Greater than or equal to": 
          state.commit('removeAboveEq',payload)
          break;
        case "Less than": 
          state.commit('removeBelow',payload)
          break;
        case "Less than or equal to": 
          state.commit('removeBelowEq',payload)
          break;
        default: break;
      }
    },
    doubleFilter(state,payload) {
      switch( payload.job ){
        case "Is between":
          state.commit('keepOutliers',payload)
          break;
        case "Is not between": 
          state.commit('removeOutliers',payload)
          break;
        default: break;
      }
    }
  }
});