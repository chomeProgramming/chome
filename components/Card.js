import React from 'react';
import Head from 'next/head'
import styles from '../styles/Card.module.css'
import { Button } from '@material-ui/core';

export default function Card({ name, img, link, placeholder }) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>{name}</h2>
                <img src={img} alt='thumbnail' />
                <div className={styles.button}>
                    <Button href={link}>VISIT</Button>
                </div>
            </div>
        </div>
    )
}