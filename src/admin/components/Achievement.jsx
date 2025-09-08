import styled from '@emotion/styled'
import { Button, Card, CardContent, Typography } from '@mui/material';
import React from 'react'
import TrophyIcon from "../../assets/icons/trophy.png"

const Achievement = () => {

    const TrophyImgContainer = styled("img")({
        right: 0,
        bottom: 0,
        height: 170,
        position: "absolute"
    });

    const TophyImg = styled("img")({
        right: 36,
        bottom:20,
        height: 98,
        position: "absolute"
    })

  return (
    <>
        <Card sx={{position: "relative", bgcolor:"#242B2E", color: "white"}} className='space-y-5'>
            <CardContent>
                <Typography variant='h6' sx={{letterSpacing: ".25px"}}>
                    Shop with SmallBazar
                </Typography>
                <Typography variant='body2'>Congratulations 🥳</Typography>
                <Typography sx={{my:3.1}}>420.8k</Typography>
                <Button size='small' variant='contained'>View Sales</Button>
                <TrophyImgContainer src='' />
                <TophyImg src={TrophyIcon} />
                
            </CardContent>
        </Card>
    </>
  )
}

export default Achievement;