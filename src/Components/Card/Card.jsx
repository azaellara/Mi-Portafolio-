import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import encriptador from "../../assets/images/encriptador.webp";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "@emotion/styled";
import background1 from "../../assets/images/background1.svg";
import miorg from "../../assets/images/miorg.webp";
import taskcreator from "../../assets/images/taskcreator.webp";

const Seccion = styled("section")({
  margin: "1rem 0",
  padding: "1rem",
  backgroundImage: `url(${background1})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
});

const Raya = styled("p")({
  textDecorationLine: "underline",
  marginLeft: "1rem",
  color: "#336b87",
});

const Container = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  margin: "2rem 2rem",
  justifyContent: "space-evenly",
});
const Carta = () => {
  return (
    <Seccion maxWidth="xl" sx={{ margin: "1rem 0" }}>
      <Typography
        variant="h2"
        fontSize={{ xs: "2em", sm: "2em", md: "4em" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        LAST <Raya>PROJECTS</Raya>
      </Typography>
      <Container>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 170 }}
            image={encriptador}
            title="Encriptador"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Encriptador
            </Typography>
            <Typography variant="body2">
              Esta es una app en el cual le pasas un texto y lo encripta aligual
              si le pasas un texto encriptado lo desencripta.
            </Typography>
          </CardContent>
          <CardActions>
            <Stack spacing={2} direction="row" margin="2rem 0">
              <Button
                variant="contained"
                href="https://encriptador-three.vercel.app/"
                target="_blank"
              >
                Demo
              </Button>
              <Button
                variant="outlined"
                href="https://github.com/azaellara/Encriptador"
                target="_black"
                startIcon={<GitHubIcon />}
              >
                Code
              </Button>
            </Stack>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 170 }} image={miorg} title="Mi org" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              MI ORG
            </Typography>
            <Typography variant="body2">
              App para crear y organizar equipos, ademas de poder dar like a los
              mienbros de los equipos y tener la posibilidad de modificar el
              color de las cartas.
            </Typography>
          </CardContent>
          <CardActions>
            <Stack spacing={2} direction="row" margin="2rem 0">
              <Button
                variant="contained"
                href="https://org-dun.vercel.app/"
                target="_blank"
              >
                Demo
              </Button>
              <Button
                variant="outlined"
                href="https://github.com/azaellara/org"
                target="_black"
                startIcon={<GitHubIcon />}
              >
                Code
              </Button>
            </Stack>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 170 }}
            image={taskcreator}
            title="taskcreator"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Taskcreator
            </Typography>
            <Typography variant="body2">
              App para crear lista de tareas que se pueden marcar como echas y
              pasan a una segunda lista donde apareceran cuando esten completas
              y se podran borrar.
            </Typography>
          </CardContent>
          <CardActions>
            <Stack spacing={2} direction="row" margin="2rem 0">
              <Button
                variant="contained"
                href="https://task-creator-weld.vercel.app/"
                target="_blank"
              >
                Demo
              </Button>
              <Button
                variant="outlined"
                href="https://github.com/azaellara/task-creator"
                target="_black"
                startIcon={<GitHubIcon />}
              >
                Code
              </Button>
            </Stack>
          </CardActions>
        </Card>
      </Container>
    </Seccion>
  );
};

export default Carta;
