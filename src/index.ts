import { loadScript } from './utils'
import { ILiff } from './liff'

export async function loadLiff(liffId): Promise<ILiff> {
  await loadScript('https://static.line-scdn.net/liff/edge/2.1/sdk.js')
  const liff: ILiff = (window as any).liff
  await new Promise((resolve) => {
    liff.init({ liffId }, resolve)
  })
  return liff
}
