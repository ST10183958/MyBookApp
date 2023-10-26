import { Text, SafeAreaView, StyleSheet,View,Image,TouchableOpacity,ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';



const myArrTitles: any[] = []
const myArray: any[] = [];

const InfoPage = () => {

  /// page numbers /// 
  const { params } = useRoute();

  let inputValue = params?.inputValue;
  let Inputtitles = params?.Inputtitles;
  
  myArray.push(parseInt(inputValue))
  myArrTitles.push(Inputtitles)

  let sum = myArray.reduce((acc, curr) => acc + curr, 0);
  let avg = sum/myArray.length

  /// page numbers /// 


  /// titles  /// 
  
    const renderList = () => {
    return myArrTitles.map((item, index) => (
      <View>
        <Text style={styles.ListedtitleTxt} key={index}>Title: {item}</Text>
      </View>
      
    ));
  };

    /// titles  /// 

  return (
    <SafeAreaView style={styles.container}>

 
        <View style={styles.InfoSection}>
          <View style={styles.LastBookInfoSection}>
              <Text style={styles.LastbookTitle}> c</Text>
           </View>

          <View style={styles.TotalInfoSection}>
            <Text style={styles.TotalPagesTxt}> Total number of pages of all Books</Text>
            <Text style={styles.TotalPagesNum}>{sum}</Text>
            <Text style={styles.AveragePagesTxt}> Average number of pages of all Books</Text>
            <Text style={styles.AveragePagesNum}>{avg}</Text>
          </View>


        </View>


    <ScrollView style={styles.BookListScroll}>
      <Text style={styles.CurrentBooksTxt}> Current Books </Text>
      {renderList()}
    </ScrollView>

    </SafeAreaView>
  );
}



export default InfoPage;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  InfoSection:{

  },

    navigationbar:{
    top:31,
  },
  storepage:{
    width:70,
    height:70,
    left:-10,
  },
  homepage: {
    width:70,
    height:70,
    left:80,
    top:-70,
  },
  bookpage: {
    width:70,
    height:70,
    top:-140,
    left:200,
  },
  historypage: {
    width:70,
    height:70,
    top:-207,
    left:310,
  },

  TotalPagesTxt:{
    fontSize:20,
  },
  AveragePagesTxt:{
    fontSize:20,
  },
  TotalPagesNum:{
    fontSize:30,
    left:130,
  },
  AveragePagesNum:{
    fontSize:30,
    left:130,
  },

  BookListScroll:{
    top:100,
  },

  CurrentBooksTxt:{
      fontSize:20,
  },

});
