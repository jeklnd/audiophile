import React, { useState } from "react";
import { Card, Typography, CardContent, Grid, InputLabel } from "@mui/material";
import { CheckoutSubtitle } from "@/components/checkout/CheckoutSubtitle";
import { LabelledInput } from "@/components/checkout/LabelledInput";
import { RadioButtons } from "@/components/checkout/RadioButtons";

export default function CheckoutCard() {
    const [checkedIndex, setCheckedIndex] = useState(0);
    const handleClick = (index) => {
        setCheckedIndex(index);
    };
    return (
        <Card
            elevation={0}
            sx={{
                borderRadius: "0.5rem",
                padding: ["1.5rem", "1.5rem", "3rem"],
            }}
        >
            <Typography
                title="CHECKOUT"
                variant="h3"
                sx={{
                    marginBottom: ["0rem", "0.5rem", "0.5rem"],
                }}
            >
                CHECKOUT
            </Typography>
            <CardContent sx={{ padding: 0 }}>
                <Grid container rowSpacing={3} columnSpacing={[0, 2]}>
                    <Grid item xs={12} sm={12} md={0}>
                        <CheckoutSubtitle
                            subtitle={"Billing Details"}
                        ></CheckoutSubtitle>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <LabelledInput
                            label="Name"
                            placeholder="Jesse Krensel"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <LabelledInput
                            label="Email Address"
                            placeholder="jdkrensel@gmail.com"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <LabelledInput
                            label="Phone Number"
                            placeholder="610-234-8503"
                        />
                    </Grid>
                </Grid>
                <Grid container rowSpacing={3} columnSpacing={[0, 2]}>
                    <Grid item xs={12}>
                        <CheckoutSubtitle
                            subtitle={"Shipping Info"}
                        ></CheckoutSubtitle>
                    </Grid>
                    <Grid item xs={12}>
                        <LabelledInput
                            label="Address"
                            placeholder="1600 Amphitheatre Parkway"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <LabelledInput
                            label="City"
                            placeholder="Mountain View"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <LabelledInput label="State" placeholder="CA" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <LabelledInput label="ZIP Code" placeholder="94043" />
                    </Grid>
                </Grid>
                <Grid container rowSpacing={3} columnSpacing={[0, 2]}>
                    <Grid item xs={12}>
                        <CheckoutSubtitle
                            subtitle={"Payment Details"}
                        ></CheckoutSubtitle>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography
                            component={InputLabel}
                            sx={{
                                color: "#000",
                                fontWeight: "bold",
                            }}
                        >
                            Payment Method
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <RadioButtons
                            onCheck={handleClick}
                            checkedIndex={checkedIndex}
                        />
                    </Grid>
                    {checkedIndex === 0 && (
                        <>
                            <Grid item xs={12} sm={6}>
                                <LabelledInput
                                    label="e-Money Number"
                                    placeholder="238521993"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <LabelledInput
                                    label="e-Money PIN"
                                    placeholder="6891"
                                />
                            </Grid>
                        </>
                    )}
                </Grid>
            </CardContent>
        </Card>
    );
}
