
const loaded: { [key: string]: Promise<void> } = {}

export function loadScript(url) {
  if (!loaded[url]) {
    loaded[url] = new Promise((resolve, reject) => {

      const script = document.createElement('script')
      script.onload = () => resolve()
      script.onerror = reject
      script.src = url

      document.head.appendChild(script)
    })
  }
  return loaded[url]
}
