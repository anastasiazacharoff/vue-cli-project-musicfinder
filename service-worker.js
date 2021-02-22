/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js')
  })
}

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
)

importScripts('/precache-manifest.8e98c5a3c079704fa151f4980085faae.js')

workbox.core.setCacheNameDetails({ prefix: 'final-app' })

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerRoute(
  'https://api.musixmatch.com/ws/1.1/track.search?q_artist=${this.query}&page_size=${this.value}&track.lyrics.get?track_id=${this.query}&page=1&s_track_rating=desc&apikey=5018c9280bcd8207badfea78b0288e9e',
  new workbox.strategies.NetworkFirst({
    networkTimeoutSeconds: 5,
    plugins: []
  }),
  'GET'
)
