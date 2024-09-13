import React from "react";
import Quote from "../svg/Quote";
import { Box, Typography } from "@mui/material";
import { IReview } from "../../interfaces/review.interface";
import ReviewCard from "../cards/ReviewCard";
import UseMedia from "../../hooks/UseMedia";

const reviews: IReview[] = [
  {
    id: 1,
    author: "Dr. Tania Meneghel",
    body: "The use of SHR in patients with dark skin types may substantially reduce pain or discomfort and minimize severity of blistering, scabbing, crusting and hyper/hyperpigmentation.",
    icon: <Quote />,
  },
  {
    id: 2,
    author: "Dr. Fernando Urdiales",
    body: "Soprano works with all skin and hair types, all year round, with consistent, safe, reliable results. Today Soprano SHR is an essential tool for aesthetics practices, providing more patient advantages than any of its competitors.",
    icon: <Quote />,
  },
  {
    id: 3,
    author: "Dr. Pablo Naranjo",
    body: "lam very pleased with the results I am able to achieve with the Soprano Titanium. Aside from the high efficiency and safety record, which are the basis for any hair removal treatment, there are additional features, such as Smart Clinic and the unique TRIO 4cm applicator, which set it above and beyond any other system on the market today",
    icon: <Quote />,
  },
];

const Reviews: React.FC = () => {
  const { isMobile, isTablet } = UseMedia();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      padding={6}
    >
      <Typography
        variant="h2"
        fontSize={24}
        color="#000"
        marginBottom={3}
        sx={{ textShadow: "none" }}
        fontFamily={"montserrat"}
        fontWeight={500}
      >
        REVIEWS
      </Typography>

      <Box
        display={"flex"}
        flexDirection={!isMobile ? "row" : "column"}
        alignItems={"center"}
        justifyContent={"space-around"}
        width={isTablet ? "100%" : "80%"}
      >
        {reviews.map(({ id, author, body, icon }: IReview) => (
          <ReviewCard key={id} body={body} author={author} icon={icon} />
        ))}
      </Box>
    </Box>
  );
};

export default Reviews;
