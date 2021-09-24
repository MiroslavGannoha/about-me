import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { MainContainer } from '../containers'

function MyApp({ Component, pageProps }: AppProps) {
  return <MainContainer><Component {...pageProps} /></MainContainer>
}
export default MyApp
