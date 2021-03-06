import * as React from "react";
import { AppBar, Box, Container, Toolbar, Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: { main: "rgb(0, 61, 77)" },
		secondary: { main: "rgb(246, 138, 97)" },
	},
});

interface MainTemplateProps {}

function MainTemplate({
	children,
}: React.PropsWithChildren<MainTemplateProps>) {
	return (
		<ThemeProvider theme={theme}>
			<>
				<AppBar position="static">
					<Toolbar variant="dense" color="white">
						<Typography variant="h6">
							COSI - Flight Check-In
						</Typography>
					</Toolbar>
				</AppBar>
				<Container>
					<Box pt={8}>{children}</Box>
				</Container>
			</>
		</ThemeProvider>
	);
}

export default MainTemplate;
