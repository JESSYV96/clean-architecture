import { appSelectors, getActiveRooms, joinRoom } from '@jessy/application'
import { useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import RoomItem from 'src/components/multiplayer/Room'
import { useAppDispatch } from 'src/configs/store'

const RoomListScreen = () => {
  const { activeRoomsSelector } = appSelectors
  const dispatch = useAppDispatch()
  const activeRooms = useSelector(activeRoomsSelector)

  useEffect(() => {
    dispatch(getActiveRooms())
  }, [])

  useEffect(() => {}, [activeRooms])

  return (
    <View>
      <FlatList
        data={activeRooms}
        renderItem={({ item }) => (
          <RoomItem room={item} onPress={() => dispatch(joinRoom({ roomName: item.name }))} />
        )}
      />
    </View>
  )
}

export default RoomListScreen
