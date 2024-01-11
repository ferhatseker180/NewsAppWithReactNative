import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './NewsCardStyle'

const NewsCard = ({news} : any) => {
    console.log(news);
  return (
    <View style = {styles.container}>
      
      <Image style = {styles.imageStyle} source={{uri: news.imageUrl}} />

      <View style = {styles.innerContainer}> 
      <Text style = {styles.titleStyle}> {news.title} </Text>
      <Text style = {styles.descriptionStyle}> {news.description} </Text>
      <Text style = {styles.authorStyle}> {news.author} </Text>
      </View>
      

    </View>
  )
}

export default NewsCard