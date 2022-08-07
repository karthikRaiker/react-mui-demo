import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      {/* In h3 we change it to h1 through mention component, gutterBottom means adding margin bottom*/}
      <Typography variant="h3" component="h1" gutterBottom>
        h3 Heading
      </Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      {/* for different variant of h6 tag */}
      <Typography variant="subtitle1">sub title 1</Typography>
      <Typography variant="subtitle2">sub title 2</Typography>
      {/* for alternative of p tag */}
      <Typography variant="body1">
        body1 Heading Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Excepturi, quisquam dolorum cupiditate, ex ab deserunt maxime et, quae
        earum voluptatibus sint qui ad pariatur numquam cumque dolorem modi iure
        veritatis!
      </Typography>
      <Typography variant="body2">
        body2 Heading Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Non facilis quae beatae, deleniti facere, repudiandae voluptatibus velit
        exercitationem minus nulla iure modi laborum dolores optio sapiente
        necessitatibus debitis temporibus quidem.
      </Typography>
    </div>
  );
};
