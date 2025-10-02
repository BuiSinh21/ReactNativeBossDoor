package com.AppBossDoor

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.content.Intent
import android.util.Log
import com.facebook.react.ReactInstanceManager
import com.facebook.react.bridge.ReactContext

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "AppBossDoor"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

    override fun onNewIntent(intent: Intent?) {
        super.onNewIntent(intent)
        val manager: ReactInstanceManager = reactNativeHost.reactInstanceManager
        val reactContext: ReactContext? = manager.currentReactContext

        if (reactContext != null && reactContext.hasActiveCatalystInstance()) {
            manager.onNewIntent(intent)
        } else {
            Log.w("MainActivity", "ReactContext chưa sẵn sàng, bỏ qua onNewIntent")
        }
    }
    override fun onWindowFocusChanged(hasFocus: Boolean) {
        super.onWindowFocusChanged(hasFocus)
        val manager: ReactInstanceManager = reactNativeHost.reactInstanceManager
        val reactContext: ReactContext? = manager.currentReactContext

        if (reactContext != null && reactContext.hasActiveCatalystInstance()) {
            manager.onWindowFocusChange(hasFocus)
        } else {
            Log.w("MainActivity", "ReactContext chưa sẵn sàng, bỏ qua onWindowFocusChange")
        }
    }
}

