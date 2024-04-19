import facebook_icon from "@images/auth/facebook.svg";
import google_icon from "@images/auth/google.svg";
import OAuthBtn from "src/components/OAuthBtn";
import { pb } from "src/utils";

const OAuthRegistration = () => {


    const loginWithGoogle = async () => {
        const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' });
        console.log(authData);

    }

    const loginWithFacebook = async () => {
        const authData = await pb.collection('users').authWithOAuth2({ provider: 'facebook' });
        console.log(authData);
    }

    return (
        <>
            <OAuthBtn onClick={loginWithGoogle} icon={google_icon} label="Google" />
            <OAuthBtn onClick={loginWithFacebook} icon={facebook_icon} label="Facebook" />
        </>
    );
};

export default OAuthRegistration;