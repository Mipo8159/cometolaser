import { Box, Typography } from "@mui/material";
import React from "react";
import { IContactCard } from "../../interfaces/contact-card.interface";
import ContactCard from "../cards/ContactCard";

const contactList: IContactCard[] = [
  {
    id: 1,
    title: "Phone",
    body: "1 (929) 603 - 7388",
  },
  {
    id: 2,
    title: "Email",
    body: "ComeToLaser@gmail.com",
  },
  {
    id: 3,
    title: "Location",
    body: "34 E 67th StreetNew York, New York, 10065",
  },
];

const Contact: React.FC = () => {
  return (
    <Box marginBottom={8}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        padding={5}
      >
        <Box>
          <Typography
            variant="h2"
            fontSize={42}
            color="#000"
            marginBottom={3}
            sx={{ textShadow: "none" }}
          >
            Contact us
          </Typography>
        </Box>
      </Box>

      <Box display={"flex"} justifyContent={"center"}>
        <Box width={"776px"} marginRight={6}>
          <img
            src={"/image/contact.webp"}
            alt={"/image/contact.webp"}
            style={{ width: "100%" }}
          />
        </Box>

        <Box display={"flex"} flexDirection={"column"}>
          <Typography
            variant="h2"
            fontSize={36}
            color="#000"
            marginBottom={6}
            sx={{ textShadow: "none" }}
          >
            Contact Information
          </Typography>

          {contactList.map(({ id, title, body }: IContactCard) => (
            <ContactCard key={id} title={title} body={body} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;