import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  card: {
    height: 380,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontWeight: 600,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 24,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
  id: number;
}

function Card({ image, title, category, id }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Link to={`/articles/${id}#`}>
        <Button variant="white" color="dark">
          Soma Inkuru
        </Button>
      </Link>
    </Paper>
  );
}

export const articles = [
  {
    id: 1,
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/221111074548-pregnancy-test-stock.jpg?c=16x9&q=w_800,c_fill",
    title: "Ni ryari wakora Pregnancy Test",
    category: "Ubuzima",
  },
  {
    id: 2,
    image:
      "https://video-images.vice.com/articles/58e41f76feca7b07aecf1407/lede/1491834723255-GettyImages-137358265.jpeg?crop=1xw:0.52886345053148xh;center,center",
    title: "Testosterone nke mu mubiri",
    category: "Ubuzima",
  },
  {
    id: 3,
    image:
      "https://www.gannett-cdn.com/presto/2022/05/12/USAT/b587914f-8ab1-4a71-894d-f4abd7f885c8-GettyImages-1320497977.jpg?width=980&height=654&fit=crop&format=pjpg&auto=webp",
    title: "Gutoza Umwana umuco wo kwifata",
    category: "UBUZIMA",
  },
  {
    id: 4,
    image:
      "https://assets3.cbsnewsstatic.com/hub/i/r/2010/09/22/86b3c5fb-a643-11e2-a3f0-029118418759/thumbnail/640x480/6bdb6a9a0b00d7c0c238184fb451abdc/sperm_1.jpg",
    title: "Ibishobora kwica intanga-ngabo",
    category: "UBUZIMA",
  },
];

export default function Articles() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = articles.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <div id="articles" className="my-20">
      <div className="text-center my-8">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Ibikuzwe kugarukwaho
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p>
      </div>
      <Carousel
        slideSize="25%"
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
        slideGap="md"
        align="start"
        className="max-w-7xl px-3 lg:px-0 mx-auto"
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </div>
  );
}
