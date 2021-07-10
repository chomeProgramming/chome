import React from 'react';
import Head from 'next/head'
import styles from '../styles/Card.module.css'
import { Button } from '@material-ui/core';
import Image from 'next/image'

export default function Card({ name, img, link }) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>{name}</h2>
                <Image src={img} alt='thumbnail' width='100%' height='50%' layout='responsive' priority />
                <div className={styles.button}>
                    <Button href={link}>VISIT</Button>
                </div>
            </div>
        </div>
    )
}