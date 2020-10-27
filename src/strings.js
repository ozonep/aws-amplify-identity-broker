/*
 * Copyright Amazon.com, Inc. and its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT
 *
 * Licensed under the MIT License. See the LICENSE accompanying this file
 * for the specific language governing permissions and limitations under
 * the License.
 */

// Impossible to find import for now
import { Translations } from "@aws-amplify/ui-components";

// See official Amplify UI labels: https://github.com/aws-amplify/amplify-js/blob/master/packages/amplify-ui-components/src/common/Translations.ts
export const strings = {
	en: {
		[Translations.SIGN_UP_EMAIL_PLACEHOLDER]: "your.adress@example.com",
		[Translations.PHONE_PLACEHOLDER]: "(555) 555-1234",
		AWSSSO: "Sign In with AWS SSO (SAML)",
		OIDCIdentityProvider: "Sign In with Demo OIDC (oauth2)",
		AMAZON_SIGNIN: "Sign In with Amazon",
		GOOGLE_SIGNIN: "Sign In with Google",
		FACEBOOK_SIGNIN: "Sign In with Facebook",
		OR: "OR",
		WAIT_REDIRECTION:
			"You have successfully logged in, please wait while redirecting...",
		VERIFY_EMAIL:
			"You have successfully created an account. Please check your email to confirm your registration...",
		"Custom auth lambda trigger is not configured for the user pool.":
			"Password cannot be empty.", // Temporary: see https://github.com/aws-amplify/amplify-js/issues/5623
		LOGO: "Logo",
		YOUR_APPLICATIONS: "Your Applications",
		LOGOUT: "Logout",
		LOGIN_TO: "Login to",
		USER_ATTRIBUTES: "User Attributes",
		EMAIL_ADDRESS: "Email Address",
		PASSWORD: "Password",
	},
	fr: {
		[Translations.NO_ACCOUNT_TEXT]: "Pas encore de compte ?",
		[Translations.RESET_YOUR_PASSWORD]: "Réinitialiser votre mot de passe",
		[Translations.NEW_PASSWORD_LABEL]: "Nouveau mot de passe",
		[Translations.NEW_PASSWORD_PLACEHOLDER]:
			"Entrez votre nouveau mot de passe",
		[Translations.CREATE_ACCOUNT_TEXT]: "créer un compte",
		[Translations.FORGOT_PASSWORD_TEXT]: "Mot de passe oublié ?",
		[Translations.RESET_PASSWORD_TEXT]: "Réinitialiser le mot de passe",
		[Translations.SIGN_IN_ACTION]: "CONNEXION",
		[Translations.SIGN_IN_HEADER_TEXT]: "Connexion à votre compte",
		[Translations.SIGN_IN_TEXT]: "Se connecter",
		[Translations.SIGN_UP_EMAIL_PLACEHOLDER]: "votre.email@exemple.com",
		[Translations.SIGN_UP_HAVE_ACCOUNT_TEXT]: "Vous avez un compte ?",
		[Translations.SIGN_UP_HEADER_TEXT]: "Créer un compte",
		[Translations.SIGN_UP_PASSWORD_PLACEHOLDER]: "Mot de passe",
		[Translations.SIGN_UP_SUBMIT_BUTTON_TEXT]: "CREER COMPTE",
		[Translations.SIGN_UP_USERNAME_PLACEHOLDER]: "Identifiant",
		[Translations.SEND_CODE]: "Envoyer le code",
		[Translations.BACK_TO_SIGN_IN]: "Retour à connexion",
		[Translations.EMAIL_LABEL]: "Adresse de messagerie *",
		[Translations.EMAIL_PLACEHOLDER]: "votre.email@exemple.com",
		[Translations.PASSWORD_LABEL]: "Mot de passe *",
		[Translations.PASSWORD_PLACEHOLDER]: "Entrez votre mot de passe",
		[Translations.PHONE_LABEL]: "Numéro de téléphone *",
		[Translations.PHONE_PLACEHOLDER]: "(555) 555-1234",
		[Translations.CONFIRM_SIGN_UP_CODE_LABEL]: "Code de confirmation",
		[Translations.CONFIRM_SIGN_UP_CODE_PLACEHOLDER]: "entrez votre code",
		[Translations.CONFIRM_SIGN_UP_HEADER_TEXT]: "Confirmer l'inscription",
		[Translations.CONFIRM_SIGN_UP_LOST_CODE]: "Vous avez perdu votre code?",
		[Translations.CONFIRM_SIGN_UP_RESEND_CODE]: "Renvoyer le code",
		[Translations.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT]: "Confirmer",
		[Translations.SIGN_OUT]: "Déconnexion",
		AWSSSO: "Connectez-vous avec AWS SSO (SAML)",
		OIDCIdentityProvider: "Connectez-vous avec Demo OIDC (oauth2)",
		AMAZON_SIGNIN: "Connectez-vous avec Amazon",
		GOOGLE_SIGNIN: "Connectez-vous avec Google",
		FACEBOOK_SIGNIN: "Connectez-vous avec Facebook",
		OR: "OU",
		WAIT_REDIRECTION:
			"Vous vous êtes connecté avec succès, attendez d'être redirigé...",
		VERIFY_EMAIL:
			"Vous avez créé un compte avec succès. Veuillez vérifier votre email pour confirmer votre inscription...",
		"Custom auth lambda trigger is not configured for the user pool.":
			"Veuillez renseigner le mot de passe.",
		// This may change in the future: see https://github.com/aws-amplify/amplify-js/issues/6898
		"1 validation error detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6":
			"Le mot de passe doit faire au moins 6 caractères.",
		"Username cannot be empty": "Le nom d'utilisateur doit être renseigné",
		"User does not exist.": "L'utilisateur n'existe pas.",
		"An account with the given email already exists.":
			"Un compte avec cette adresse couriel existe déjà.",
		"User is disabled.": "L'utilisateur est désactivé.",
		"Access Token has been revoked": "Le jeton d'accès a été révoqué",
		LOGO: "Logo",
		YOUR_APPLICATIONS: "Vos Applications",
		LOGOUT: "Se Deconnecter",
		LOGIN_TO: "Se connecter à",
		USER_ATTRIBUTES: "Attributs d'utilisateur",
		EMAIL_ADDRESS: "Addresse Email",
		PASSWORD: "Mot de passe",
	},
	de: {
		[Translations.NO_ACCOUNT_TEXT]: "Noch keinen Konto?",
		[Translations.RESET_YOUR_PASSWORD]: "Passwort zurücksetzen",
		[Translations.NEW_PASSWORD_LABEL]: "Neues Passwort",
		[Translations.NEW_PASSWORD_PLACEHOLDER]: "Gib Dein neues Passwort ein",
		[Translations.CREATE_ACCOUNT_TEXT]: "Ein Konto erstellen",
		[Translations.FORGOT_PASSWORD_TEXT]:
			"Haben Sie Ihr Passwort vergessen?",
		[Translations.RESET_PASSWORD_TEXT]: "Passwort zurücksetzen",
		[Translations.SIGN_IN_ACTION]: "ANMELDEN",
		[Translations.SIGN_IN_HEADER_TEXT]: "Am Konto anmelden",
		[Translations.SIGN_IN_TEXT]: "Anmelden",
		[Translations.SIGN_UP_EMAIL_PLACEHOLDER]: "ihre.email@exemple.de",
		[Translations.SIGN_UP_HAVE_ACCOUNT_TEXT]: "Hast Du noch kein Konto?",
		[Translations.SIGN_UP_HEADER_TEXT]: "Ein Konto erstellen",
		[Translations.SIGN_UP_PASSWORD_PLACEHOLDER]: "Passwort",
		[Translations.SIGN_UP_SUBMIT_BUTTON_TEXT]: "KONTO ERSTELLEN",
		[Translations.SIGN_UP_USERNAME_PLACEHOLDER]: "Benutzeridentifikation",
		[Translations.SEND_CODE]: "Code senden",
		[Translations.BACK_TO_SIGN_IN]: "Zurück zur Anmeldung",
		[Translations.EMAIL_LABEL]: "E-Mail Adresse *",
		[Translations.EMAIL_PLACEHOLDER]: "ihre.email@exemple.de",
		[Translations.PASSWORD_LABEL]: "Passwort *",
		[Translations.PASSWORD_PLACEHOLDER]: "Geben Sie Ihr Passwort ein",
		[Translations.PHONE_LABEL]: "Telefonnummer *",
		[Translations.PHONE_PLACEHOLDER]: "(555) 555-1234",
		[Translations.CONFIRM_SIGN_UP_CODE_LABEL]: "Bestätigungscode",
		[Translations.CONFIRM_SIGN_UP_CODE_PLACEHOLDER]: "Gib Deinen Code ein",
		[Translations.CONFIRM_SIGN_UP_HEADER_TEXT]: "Registrierung bestätigen",
		[Translations.CONFIRM_SIGN_UP_LOST_CODE]:
			"Hast Du Deinen Code verloren?",
		[Translations.CONFIRM_SIGN_UP_RESEND_CODE]: "Code erneut senden",
		[Translations.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT]: "Bestätigen",
		[Translations.SIGN_OUT]: "Abmelden",
		AWSSSO: "Anmelden mit AWS SSO (SAML)",
		OIDCIdentityProvider: "Anmelden mit Demo OIDC (oauth2)",
		AMAZON_SIGNIN: "Anmelden mit Amazon",
		GOOGLE_SIGNIN: "Anmelden mit Google",
		FACEBOOK_SIGNIN: "Anmelden mit Facebook",
		OR: "ODER",
		WAIT_REDIRECTION:
			"Du hast Dich erfolgreich angemeldet, Du wirst nun weitergeleitet...",
		VERIFY_EMAIL:
			"Du hast Dein Konto erfolgreich angelegt. Bitte prüfe Deine E-Mails umd die Registrierung zu bestätigen...",
		LOGO: "Logo",
		YOUR_APPLICATIONS: "Deine Anwendungen",
		LOGOUT: "Abmelden",
		LOGIN_TO: "Anmelden an",
		USER_ATTRIBUTES: "Benutzerinformationen",
		// Temporary: see https://github.com/aws-amplify/amplify-js/issues/5623
		"Custom auth lambda trigger is not configured for the user pool.":
			"Das Passwort darf nicht leer sein.",
		// This may change in the future: see https://github.com/aws-amplify/amplify-js/issues/6898
		"1 validation error detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6":
			"Dein Passwort muss mindestens 6 Zeichen lang sein.",
		"Username cannot be empty": "Der Benutzername muss eingegeben werden",
		"User does not exist.": "Der Benutzer existiert nicht",
		"An account with the given email already exists.":
			"Ein Konto mit dieser E-Mail-Adresse ist bereits vorhanden.",
		"User is disabled.": "Der Benutzer ist deaktiviert.",
		"Access Token has been revoked": "Der Zugriffstoken wurde widerrufen",
	},
	nl: {
		[Translations.NO_ACCOUNT_TEXT]: "Nog geen account??",
		[Translations.RESET_YOUR_PASSWORD]: "Wachtwoord opnieuw instellen",
		[Translations.NEW_PASSWORD_LABEL]: "Nieuw paswoord",
		[Translations.NEW_PASSWORD_PLACEHOLDER]: "Voer je nieuwe wachtwoord in",
		[Translations.CREATE_ACCOUNT_TEXT]: "Account aanmaken",
		[Translations.FORGOT_PASSWORD_TEXT]: "Ben je je wachtwoord vergeten?",
		[Translations.RESET_PASSWORD_TEXT]: "Wachtwoord opnieuw instellen",
		[Translations.SIGN_IN_ACTION]: "REGISTRATIE",
		[Translations.SIGN_IN_HEADER_TEXT]: "Log in op het account",
		[Translations.SIGN_IN_TEXT]: "Aanmelden",
		[Translations.SIGN_UP_EMAIL_PLACEHOLDER]: "jouw.email@exemple.nl",
		[Translations.SIGN_UP_HAVE_ACCOUNT_TEXT]: "U heeft nog geen account?",
		[Translations.SIGN_UP_HEADER_TEXT]: "Account aanmaken",
		[Translations.SIGN_UP_PASSWORD_PLACEHOLDER]: "Wachtwoord",
		[Translations.SIGN_UP_SUBMIT_BUTTON_TEXT]: "MAAK EEN ACCOUNT AAN",
		[Translations.SIGN_UP_USERNAME_PLACEHOLDER]: "Gebruikersidentificatie",
		[Translations.SEND_CODE]: "Code verzonden",
		[Translations.BACK_TO_SIGN_IN]: "Terug naar Inloggen",
		[Translations.EMAIL_LABEL]: "E-mailadres *",
		[Translations.EMAIL_PLACEHOLDER]: "jouw.email@exemple.nl",
		[Translations.PASSWORD_LABEL]: "Wachtwoord *",
		[Translations.PASSWORD_PLACEHOLDER]: "Voer uw wachtwoord in",
		[Translations.PHONE_LABEL]: "Telefoonnummer *",
		[Translations.PHONE_PLACEHOLDER]: "(555) 555-1234",
		[Translations.CONFIRM_SIGN_UP_CODE_LABEL]: "Verificatie code",
		[Translations.CONFIRM_SIGN_UP_CODE_PLACEHOLDER]: "Voer uw code in",
		[Translations.CONFIRM_SIGN_UP_HEADER_TEXT]: "Bevestig de registratie",
		[Translations.CONFIRM_SIGN_UP_LOST_CODE]: "Ben je je code kwijt??",
		[Translations.CONFIRM_SIGN_UP_RESEND_CODE]: "Stuur de code opnieuw",
		[Translations.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT]: "Bevestigen",
		[Translations.SIGN_OUT]: "Afmelden",
		AWSSSO: "Aanmelden met AWS SSO (SAML)",
		OIDCIdentityProvider: "Aanmelden met Demo OIDC (oauth2)",
		AMAZON_SIGNIN: "Aanmelden met Amazon",
		GOOGLE_SIGNIN: "Aanmelden met Google",
		FACEBOOK_SIGNIN: "Aanmelden met Facebook",
		OR: "OF",
		WAIT_REDIRECTION:
			"Je bent succesvol ingelogd, je wordt nu doorgestuurd...",
		VERIFY_EMAIL:
			"U heeft uw account succesvol aangemaakt. Controleer uw e-mails om uw registratie te bevestigen...",
		LOGO: "Logo",
		YOUR_APPLICATIONS: "Uw applicaties",
		LOGOUT: "Afmelden",
		LOGIN_TO: "Aanmelden",
		USER_ATTRIBUTES: "Gebruikers informatie",
		// Temporary: see https://github.com/aws-amplify/amplify-js/issues/5623
		"Custom auth lambda trigger is not configured for the user pool.":
			"Het wachtwoord mag niet leeg zijn.",
		// This may change in the future: see https://github.com/aws-amplify/amplify-js/issues/6898
		"1 validation error detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6":
			"Uw wachtwoord moet minimaal 6 tekens lang zijn.",
		"Username cannot be empty": "De gebruikersnaam moet worden ingevoerd",
		"User does not exist.": "De gebruiker bestaat niet",
		"An account with the given email already exists.":
			"Er bestaat al een account met dit e-mailadres.",
		"User is disabled.": "De gebruiker is gedeactiveerd.",
		"Access Token has been revoked": "Het toegangstoken is ingetrokken.",
	},
};
