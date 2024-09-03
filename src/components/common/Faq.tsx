import { Box, Typography } from "@mui/material";
import React from "react";
import { IFaq } from "../../interfaces/faq.interface";
import FaqCard from "../cards/FaqCard";
import UseMedia from "../../hooks/UseMedia";

const faqList: IFaq[] = [
  {
    id: 1,
    question: "What is Soprano Titanium?",
    answer:
      "Soprano Titanium is the newest version of the popular, award-winning Soprano lasaer hair removal system. It is the most complete and effective laser hair removal system available today!",
  },
  {
    id: 2,
    question: "Is it clinically proven?",
    answer:
      "Soprano Titanium Alma Laser's SHR method, which is the only clinically proven method of laser hair removal that is virtually painless!",
  },
  {
    id: 3,
    question: "What is SHR technology? What are its advantages?",
    answer:
      "As with previous Soprano versions, Soprano Titanium features SHR, groundbreaking in-motion™ technology that ensures full covrage, and ICE Plus technology that cools the skin's surface, preventing superficial  burns and allowing for virtually painless, yet highly- effective hair removal.",
  },
  {
    id: 4,
    question: "What is 3D technology? What are its advantages?",
    answer:
      "Soprano Titanium's exclusive 3D technology, combines the three most effective laser wavelengths for hair removal (755nm, 810nm and 1064nm) in a single applicator, simultaneously targeting different tissue depths and anatomical structures within the hair follicle.",
  },
  {
    id: 5,
    question: "Are there specific protocols? ",
    answer:
      "We would not be who we are without our eco-friendly design, which is at the core of our strategy. We are liscenced.  Get in touch to learn more.",
  },
  {
    id: 6,
    question: "How many treatments are needed with Soprano Titanium?",
    answer:
      "Depending on the patient's skin and hair type, results are typically seen following 6 to 8 treatment sessions.",
  },
];

const Faq: React.FC = () => {
  const { isMobile } = UseMedia();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      padding={6}
    >
      <Typography
        variant="h2"
        fontSize={isMobile ? 60 : 72}
        color="#000"
        marginBottom={3}
        sx={{ textShadow: "none" }}
      >
        FAQs
      </Typography>

      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-around"}
        width={"80%"}
      >
        {faqList.map(({ id, answer, question }: IFaq, idx) => (
          <FaqCard key={id} idx={idx + 1} answer={answer} question={question} />
        ))}
      </Box>
    </Box>
  );
};

export default Faq;
