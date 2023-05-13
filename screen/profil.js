import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'

export default ProfileView = () => {
  const data = [
    { id: 1, image: 'https://static.vecteezy.com/system/resources/previews/006/417/311/original/outline-email-icon-isolated-on-grey-background-open-envelope-pictogram-line-mail-symbol-for-website-design-mobile-application-ui-illustration-eps10-free-vector.jpg', title: 'email' },
    {
      id: 2,
      image: 'https://img.icons8.com/color/70/000000/administrator-male.png',
      title: 'Password',
    },
    { id: 3, image: 'https://img.icons8.com/color/70/000000/filled-like.png', title: 'Score' },
    { id: 4, image: 'https://img.icons8.com/color/70/000000/facebook-like.png', title: 'Logout' },
   
  ]

  const [options, setOptions] = useState(data)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://thumbs.dreamstime.com/b/businesswoman-avatar-flat-design-businesswoman-design-woman-business-management-corporate-job-occupation-worker-theme-vector-163223630.jpg' }}
          />
          <Text style={styles.name}>Hanna Lee</Text>
          <Text style={styles.name}>I like the music</Text>
        </View>
      </View>

      <View style={styles.body}>
        <FlatList
          style={styles.container}
          enableEmptySections={true}
          data={options}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <View style={styles.box}>
                  <Image style={styles.icon} source={{ uri: item.image }} />
                  <Text style={styles.title}>{item.title}</Text>
                  <Image
                    style={styles.btn}
                    source={{ uri: 'https://img.icons8.com/customer/office/40' }}
                  />
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#90EE90',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: '#000000',
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 18,
    color: '#000000',
    marginLeft: 4,
  },
  btn: {
    marginLeft: 'auto',
    width: 40,
    height: 40,
  },
  body: {
    backgroundColor: '#E6E6FA',
  },
  box: {
    padding: 5,
    marginBottom: 2,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems:'center',
  },
  username: {
    color: '#20B2AA',
    fontSize: 22,
    alignSelf: 'center',
    marginLeft: 10,
  },
})
