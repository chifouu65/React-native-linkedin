import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { useState } from 'react'


const Popularjobs = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {
          loading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : (
            error ? (
              <Text style={styles.error}>{error}</Text>
            ) : (
              <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8]}
                keyExtractor={item => item?.job_id}
                renderItem={({ item }) => <PopularJobCard 
                  item={item}
                  />}
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{ columnGap: SIZES.medium }}
              />
            )
          )
        }
      </View>
    </View>
  )
}

export default Popularjobs