/*
* Copyright Amazon.com, Inc. and its affiliates. All Rights Reserved.
* SPDX-License-Identifier: MIT
*
* Licensed under the MIT License. See the LICENSE accompanying this file
* for the specific language governing permissions and limitations under
* the License.
*/

import React from 'react';
import { connect } from 'react-redux';

import { Auth, Interactions } from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut, AmplifyChatbot } from '@aws-amplify/ui-react';
import { AuthState } from '@aws-amplify/ui-components';
import { I18n } from '@aws-amplify/core';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import logoLight from '../../assets/Logos/logo-light.png';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import RegisterConfirm from '../RegisterConfirm/RegisterConfirm';
import DividerWithText from '../DividerWithText/DividerWithText';
import useWindowDimensions from '../../components/ViewPort/useWindowDimensions';
import { Branding } from '../../branding';
import Chatbot from '../Chatbot/Chatbot';



var Config = require("Config");

const useStyles = makeStyles((theme) => ({
	gridLogo: {
		paddingBottom: theme.spacing(3),
	},
	grid: {
		justifyContent: 'center',
	},
	box: {
		width: '90%',
		maxWidth: 650,
	},
	card: {
		justifyContent: 'center',
		backgroundColor: '#1f2d3b',
	},
	cardMedia: {
		paddingTop: '50px',
		width: 150,
		height: 150,
		backgroundSize: 'contain',
	},
	cardHeader: {
		paddingBottom: 0
	},
	cardContent: {
		justifyContent: 'center',
		textAlign: 'center',
		"&:last-child": {
			paddingBottom: theme.spacing(1)
		}
	},
	boxExpandIdp: {
		textAlign: 'center',
	},
	chipExpand: {
		backgroundColor: Branding.secondary,
		color: Branding.white,
		'&:hover': {
			backgroundColor: Branding.secondary,
			opacity: Branding.opacityHover,
		},
	},
	expandIcon: {
		color: Branding.white,
	},
	divider: {
		marginBottom: theme.spacing(2)
	}
}));

const mapStateToProps = (state) => {
	return {
		lang: state.app.lang,
	}
}

const SignInContainer = ({ authState, loaded }) => {
	const classes = useStyles();
	const [showChat, setShowChat] = React.useState(true);

	/*
	 * You can make this selection of IdP different between clients
	 * for that do a describeUserPoolClient API call to Cognito with the client_id from the query
	 * uses the defined IdP from SupportedIdentityProviders array
	 * See: https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolClient.html
	 */
	// IdP Provider and Login
	const socialIdPs = ["LoginWithAmazon", "Facebook", "Google"];
	const countIdpLogins = Config.providers.length || 0;

	const amazonLogin = Config.providers.includes("LoginWithAmazon");
	const facebookLogin = Config.providers.includes("Facebook");
	const googleLogin = Config.providers.includes("Google");

	// SAML
	const SAMLIdPs = Config.providers.filter(value => !socialIdPs.includes(value));
	const countSamlLogins = SAMLIdPs.length || 0;
	const SAMLLogin = SAMLIdPs.length !== 0 ? true : false;
	const SAMLLoginButtons = SAMLIdPs.map(IdP =>
		<Box key={IdP}>
			<button
				className="saml btn"
				onClick={() => handleIdPLogin(IdP)}
			>
				{I18n.get(`LANDING_PAGE_BUTTON_IDP_${IdP}_LABEL`)}
			</button>
		</Box>
	);

	const allwaysExpanded = (countIdpLogins < 1) || ((countIdpLogins + countSamlLogins) <= 3)
	const [expandIdp, setExpandIdp] = React.useState(allwaysExpanded || false);
	const { width } = useWindowDimensions();
	Interactions.configure({
		bots: {
      		"DiggitDentist": {
        		"name": "DiggitDentist",
        		"alias": "TestBotAlias",
        		"region": "eu-west-2",
      },
    }})

	const handleIdPLogin = (identity_provider) => {
		// Store redirect_uri/authorization_code in local storage to be used to later
		let queryStringParams = new URLSearchParams(window.location.search);
		let redirect_uri = queryStringParams.get('redirect_uri');
		let authorization_code = queryStringParams.get('authorization_code');
		let clientState = queryStringParams.get('state');

		if (redirect_uri) {
			localStorage.setItem(`client-redirect-uri`, redirect_uri);
		}
		if (authorization_code) {
			localStorage.setItem(`authorization_code`, authorization_code);
		}
		if (clientState) {
			localStorage.setItem(`client-state`, clientState);
		}
		Auth.federatedSignIn({ provider: identity_provider });
	}

	const handleClickExpandIdp = (value) => {
		setExpandIdp(value);
	}

	return (
		<div>

			{loaded && (
				<Grid
					container
					spacing={0}
					direction="column"
					alignItems="center"
					justify="center"
					className={classes.gridLogo}
				>
					<CardMedia
						className={classes.cardMedia}
						image={logoLight}
						title={Branding.appName}
					/>
					<Typography
						variant={width < 550 ? "h4" : "h3"}
						color="primary"
					>
						{Branding.appName}
					</Typography>
				</Grid>
			)}

			<Grid container className={classes.grid}>
				<Card variant="outlined" className={classes.card}>
					<CardContent className={classes.cardContent}>

						{/*
						  * Login with Amazon
						  */}
						{authState === AuthState.SignIn && amazonLogin && (
							<Box>
								<button
									className="amazon btn"
									onClick={() => handleIdPLogin('LoginWithAmazon')}
								>
									<i className="fa fa-amazon fa-fw" />
									{I18n.get("LANDING_PAGE_BUTTON_IDP_AMAZON_SIGNIN_LABEL")}
								</button>

							</Box>
						)}

						{/*
						  * Login with Google
						  */}
						{authState === AuthState.SignIn && googleLogin && (
							<Box>
								<button
									className="google btn"
									onClick={() => handleIdPLogin('Google')}
								>
									<i className="fa fa-google fa-fw" />
									{I18n.get("LANDING_PAGE_BUTTON_IDP_GOOGLE_SIGNIN_LABEL")}
								</button>

							</Box>
						)}

						{/*
						  * Login with Facebook
						  */}
						{authState === AuthState.SignIn && facebookLogin && (
							<Box>
								<button
									className="fb btn"
									onClick={() => handleIdPLogin('Facebook')}
								>
									<i className="fa fa-facebook fa-fw" />
									{I18n.get("LANDING_PAGE_BUTTON_IDP_FACEBOOK_SIGNIN_LABEL")}
								</button>
							</Box>
						)}

						{/*
					      * Expand more Buttons; hidden by default
						  */}
						{!expandIdp && !allwaysExpanded && authState === AuthState.SignIn && SAMLLogin && (
							<Box className={classes.boxExpandIdp}>
								<Chip
									icon={<ExpandMoreIcon className={classes.expandIcon} />}
									label={I18n.get("LANDING_PAGE_CHIP_EXPAND_MORE_LABEL")}
									size="small"
									onClick={() => handleClickExpandIdp(true)}
									className={classes.chipExpand}
								/>
							</Box>
						)}


						{/*
					      * Collapsed Login Buttons
						  */}
						<Collapse in={expandIdp} timeout="auto" unmountOnExit>
							{/*
							 	  * Login with
							      */}
							{authState === AuthState.SignIn && SAMLLogin && (
								<Box>
									{SAMLLoginButtons}
								</Box>
							)}
						</Collapse>

						{/*
						  * Hide more Buttons;
						  */}
						{expandIdp && !allwaysExpanded && authState === AuthState.SignIn && SAMLLogin && (
							<Box className={classes.boxExpandIdp}>
								<Chip
									icon={<ExpandLessIcon className={classes.expandIcon} />}
									label={I18n.get("LANDING_PAGE_CHIP_EXPAND_LESS_LABEL")}
									size="small"
									onClick={() => handleClickExpandIdp(false)}
									className={classes.chipExpand}
								/>
							</Box>
						)}

						{/*
						  * Divider between AmplifyAuthenticator and IdP Logins
						  */}
						{authState === AuthState.SignIn && (
							<DividerWithText>
								{I18n.get("LANDING_PAGE_DIVIDER_TEXT")}
							</DividerWithText>
						)}

						{/*
						  * AmplifyAuthenticator Container
						  */}
						<AmplifyAuthenticator usernameAlias="email" >
							<ForgotPassword />
							<Login />
							<Register />
							<RegisterConfirm />
							<div>
								{I18n.get("LANDING_PAGE_WAIT_REDIRECTION")}
								<AmplifySignOut />
							</div>
						</AmplifyAuthenticator>

					</CardContent>
				</Card >
			</Grid>
			<Chatbot showChat={setShowChat}/>
			{showChat && (
				<AmplifyChatbot
				botName="DiggitDentist"
    			botTitle="Diggit ChatBot"
    			welcomeMessage="Hello, how can I help you?"
  				/>
			)}
		</div >
	);
}

export default connect(mapStateToProps)(SignInContainer);
