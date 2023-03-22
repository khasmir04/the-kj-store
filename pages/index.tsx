import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { checkout } from './../checkout'

export default function Home() {
  return (
    <>
      <Head>
        <title>The KJ Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        The KJ Store
      </header>
      <main className={styles.main}>
        <div className={styles.page}> Our Products</div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <Image alt='anya-image' src='/images/anya.jpg' width={200} height={200} />
              <h2>Anya Toy</h2>
              <p className={styles.price}>$10.00</p>
              <p className={styles.desc}>Toy figure of Anya</p>
              <button className={styles.buyBtn} onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: 'price_1MoNx1F8wn5EaWfoDmEKGCRE',
                      quantity: 1,
                    }
                  ]
                })
              }}>Buy</button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <Image alt='damian-image' src='/images/damian.jpg' width={200} height={200} />
              <h2>Damian Toy</h2>
              <p className={styles.price}>$1.00</p>
              <p className={styles.desc}>Toy figure of Damian</p>
              <button className={styles.buyBtn} onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: 'price_1MoNxzF8wn5EaWfoLVAxyLHT',
                      quantity: 1,
                    }
                  ]
                })
              }}>Buy</button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <Image alt='no image available' src='/images/noimage.jpg' width={200} height={200} />
              <h2>Damian Toy</h2>
              <p className={styles.price}>$50.00</p>
              <p className={styles.desc}>Description of product goes here</p>
              <button className={styles.buyBtn} onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: 'price_1MoNxzF8wn5EaWfoLVAxyLHT',
                      quantity: 1,
                    }
                  ]
                })
              }}>Buy</button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <Image alt='no image available' src='/images/noimage.jpg' width={200} height={200} />
              <h2>Damian Toy</h2>
              <p className={styles.price}>$99.00</p>
              <p className={styles.desc}>Description of product goes here</p>
              <button className={styles.buyBtn} onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: 'price_1MoNxzF8wn5EaWfoLVAxyLHT',
                      quantity: 1,
                    }
                  ]
                })
              }}>Buy</button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <Image alt='no image available' src='/images/noimage.jpg' width={200} height={200} />
              <h2>Damian Toy</h2>
              <p className={styles.price}>$99.00</p>
              <p className={styles.desc}>Description of product goes here</p>
              <button className={styles.buyBtn} onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: 'price_1MoNxzF8wn5EaWfoLVAxyLHT',
                      quantity: 1,
                    }
                  ]
                })
              }}>Buy</button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <Image alt='no image available' src='/images/noimage.jpg' width={200} height={200} />
              <h2>Damian Toy</h2>
              <p className={styles.price}>$99.00</p>
              <p className={styles.desc}>Description of product goes here</p>
              <button className={styles.buyBtn} onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: 'price_1MoNxzF8wn5EaWfoLVAxyLHT',
                      quantity: 1,
                    }
                  ]
                })
              }}>Buy</button>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        Dev KJ
      </footer>
    </>
  )
}
