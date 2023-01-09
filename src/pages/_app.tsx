import type { AppProps } from 'next/app'
import Head from 'next/head'
import { LayoutProvider } from 'context/layout'
import 'swiper/css'
import { TaskProvider } from 'context/tasksContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <title>To do</title>
      </Head>
      <LayoutProvider>
        <TaskProvider>
            <Component {...pageProps} />
        </TaskProvider>
      </LayoutProvider>
    </>
  )
}
