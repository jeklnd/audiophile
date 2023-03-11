import {
    Card,
    Typography,
    CardContent,
    Stack,
    Box,
    Button,
} from "@mui/material";
import { SummaryItem } from "@/components/checkout/SummaryItem";
import { SummaryText } from "@/components/checkout/SummaryText";

export default function SummaryCard({ fileUrl, width, height }) {
    return (
        <Card
            elevation={0}
            sx={{
                borderRadius: "0.5rem",
                padding: "2rem",
            }}
        >
            <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
                SUMMARY
            </Typography>
            <CardContent sx={{ padding: 0 }}>
                <Stack spacing={4}>
                    <Box>
                        <SummaryItem
                            fileUrl={fileUrl}
                            width={width}
                            height={height}
                        />
                    </Box>
                    <Box>
                        <SummaryText
                            label="total"
                            value="$ 5,396"
                        ></SummaryText>
                        <SummaryText
                            label="shipping"
                            value="FREE"
                        ></SummaryText>
                        <SummaryText
                            label="VAT (INCLUDED)"
                            value="$ 1,079"
                        ></SummaryText>
                        <SummaryText
                            label="GRAND TOTAL"
                            value="$ 5,446"
                            isGrandTotal={true}
                        ></SummaryText>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: "#d87d4a",
                                "&:hover": {
                                    backgroundColor: "#fbaf85",
                                    boxShadow: "none",
                                },
                                borderRadius: 0,
                                boxShadow: "none",
                            }}
                        >
                            PAY
                        </Button>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
}
