import { AppRegistry } from 'react-native'
import Navigator from './src/Navigator'
import { name as appName } from './app.json'
import React from 'react'
import { Provider } from 'react-redux'
import storeConfig from './src/store/storeConfig'

const store = storeConfig()
const Redux = () => {
    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Redux)
