import { View, Text, FlatList, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import news_data from './news_data.json';
import NewsCard from './components/NewsCard';
import news_banner_data from './news_banner_data.json';
import ScrollViewCard from './components/NewsCard/ScrollViewCard';

const App = () => {

  const renderNews = ({item} : any) => <NewsCard news = {item} />;

  return (
    <SafeAreaView style = {styles.container}> 

    <Text style = {styles.headerText}> NEWS </Text>
   
     <FlatList 
     ListHeaderComponent={() => 
      <ScrollViewCard />
    }
     keyExtractor={(item) => item.u_id.toString()}
     data={news_data}
     renderItem={renderNews}
     />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    justifyContent: 'center',
  },

  headerText : {
    fontSize : 44,
    fontWeight : 'bold',
    color : 'black',
  },

})

export default App