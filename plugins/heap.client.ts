import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $useHeap(heapAppid: string): void
  }
}

declare global {
  interface Window {
    heap: any
  }
}

declare const heap: any

Vue.prototype.$useHeap = (appId: string) => {
  ;(window.heap = window.heap || []),
    (heap.load = function (e: any, t: any) {
      ;(window.heap.appid = e), (window.heap.config = t = t || {})
      var r = document.createElement('script')
      ;(r.type = 'text/javascript'),
        (r.async = !0),
        (r.src = 'https://cdn.heapanalytics.com/js/heap-' + e + '.js')
      var a = document.getElementsByTagName('script')[0]
      a.parentNode?.insertBefore(r, a)
      for (
        var n = function (e: any) {
            return function () {
              heap.push([e].concat(Array.prototype.slice.call(arguments, 0)))
            }
          },
          p = [
            'addEventProperties',
            'addUserProperties',
            'clearEventProperties',
            'identify',
            'resetIdentity',
            'removeEventProperty',
            'setEventProperties',
            'track',
            'unsetEventProperty'
          ],
          o = 0;
        o < p.length;
        o++
      )
        heap[p[o]] = n(p[o])
    })
  heap.load(appId)
}
