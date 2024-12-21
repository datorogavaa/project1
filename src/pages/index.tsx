'use client'
import { useState, useRef } from "react";
import Head from 'next/head';
import Link from 'next/link'; 
import Button from "@/components/Button"
export default function Home() {
  const [text,setText] = useState('Selling online is vital to business growth.')
  const [text1,setText1] = useState('2025 Grow Your\ne-Commerce Conference')
  const [text2, setText2 ] = useState('September 16-18, 2025\nParagon One Plaza and Sky Garden') 
  return (
    <>
      <Head>
        <title>e-Commerce</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       </Head>
       <div style={{display: 'flex', marginLeft: '250px', marginTop: '50px'}}>
        <div>
        <p style={{ fontSize: '60px', width: '500px', color: 'white'}}>{text}</p>
        <p style={{whiteSpace: 'pre-line',color: 'white', fontSize: '28px', width: '400px'}}>{text1}</p>
        <p style={{marginTop: '200px', whiteSpace: 'pre-line', color: 'white', fontSize: '18px', fontWeight: '600'}}>{text2}</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Link href="/products" >
          <Button/>
          </Link>
          <img style={{width: '1000px', height: '650px', marginTop: '102px', marginLeft: '155px', cursor: 'pointer'}} src="/img.png" alt="logo" />
        </div>
       </div>
    </>
  );
}
