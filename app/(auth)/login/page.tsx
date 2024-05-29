/* eslint-disable @next/next/no-img-element */

import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import bgImage from "../../../assets/images/1716955138152.jpg";
import Logo from "../../../assets/images/City driver-bro.png";

import Image from "next/image";
import Link from "next/link";
function page() {
    // const [showMdp,setShowMdp]= useState(false);

  const bannier = require("../../../assets/images/1716955138152.jpg");
  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        minHeight={"100vh"}
      >
        <Grid
          container
          width={"40%"}
          direction={"row"}
          //   border={"red solid 2px"}
          borderRadius={5}
          sx={{ boxShadow: "5px 7px 10px 10px rgba(0, 0, 0, 0.1)" }}
          alignItems={"center"}
          justifyContent={"center"}
          overflow="hidden"
        >
          <Grid
            item
            xs={6}
            style={{
              height: "50vh",
            }}
            zIndex={777}
            container
            // border={"orange solid 7px"}
            borderRadius={"20px 0px 0px 20px"}
            // bgcolor={"black"}
            justifyContent={"center"}
            alignItems={"center"}
            overflow={"hidden"}
            position={"relative"}

          >
            <Image src={bgImage} alt="bannier" height={400} />
            <Typography
              variant="h4"
              textAlign={"center"}
              sx={{ fontWeight: "bold" }}
              color={"white"}
              alignContent={"center"}
              //   border={"red solid 2px"}
              zIndex={5}
              position={"absolute"}
              height={"100%"}
              width={"100%"}
              style={{
                backdropFilter: "blur(1px)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <span style={{ color: "orange" }}>HIGH-CAR</span> CAR
            </Typography>
          </Grid>
          
          <Grid
            item
            xs={6}
            justifyContent={"center"}
            alignItems={"center"}
            p={2}
          >
            <Grid container item xs={12} justifyContent={'center'}>
                <Image src={Logo} alt="logo" width={100}/>
            </Grid>
            <Grid container item xs={12} justifyContent={'center'} >
                <Typography variant="h5" fontWeight={'bold'}>
                    Welcome Back!
                </Typography>
            </Grid>
            <TextField name="email" label="Email" fullWidth sx={{ my: 1 }} />
            <TextField
              name="mdp"
              label="Password"
              fullWidth
              type="password"
              sx={{ my: 1 }}
            />
            <Grid container direction={"row"} justifyContent={"center"}>
              <Grid container item xs={9}>
                <Button
                  fullWidth
                  sx={{ bgcolor: "orange", mt: 2 }}
                  variant="contained"
                >
                  Login
                </Button>
              </Grid>
              <Grid
                container
                item
                xs={9}
                textAlign={"center"}
                mt={2}
                // border={"red solid 3px"}
                justifyContent={"center"}
                fontSize={"12px"}
              >
                <Link href={"#"}>Mot de passe oublier</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default page;
